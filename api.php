<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');

// CORS Headers
header("Access-Control-Allow-Origin: https://stellarlikes.com");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Обработка preflight-запросов
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  exit(0);
}

require 'vendor/autoload.php';

use Dotenv\Dotenv;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$action = $_GET['action'] ?? null;
$client = new Client();

try {
  switch ($action) {
    case 'FetchAllCoupons':
      // Fetch all coupons
      $consumer_key = $_ENV['REACT_APP_TEST_CHECKOUT_CONSUMER_KEY'];
      $consumer_secret = $_ENV['REACT_APP_TEST_CHECKOUT_CONSUMER_SECRET_KEY'];

      $response = $client->request('GET', 'https://testgraming.net/wp-json/wc/v3/coupons', [
        'query' => [
          'consumer_key' => $consumer_key,
          'consumer_secret' => $consumer_secret,
        ],
      ]);

      echo $response->getBody();
      break;

    case 'FetchAllProductData':
      // Fetch all product data
      $consumer_key = $_ENV['REACT_APP_CONSUMER_KEY'];
      $consumer_secret = $_ENV['REACT_APP_CONSUMER_SECRET'];

      $response = $client->request('GET', 'https://graming.com/wp-json/wc-graming/products', [
        'query' => [
          'consumer_key' => $consumer_key,
          'consumer_secret' => $consumer_secret,
        ],
      ]);

      echo $response->getBody();
      break;

    case 'FetchOrderInfo':
      // Fetch order information
      $id = $_GET['id'] ?? null;
      if (!$id) {
        throw new Exception('Missing parameter: id');
      }

      $consumer_key = $_ENV['REACT_APP_TEST_CHECKOUT_CONSUMER_KEY'];
      $consumer_secret = $_ENV['REACT_APP_TEST_CHECKOUT_CONSUMER_SECRET_KEY'];

      $response = $client->request('GET', "https://testgraming.net/wp-json/wc-graming/order/{$id}", [
        'query' => [
          'consumer_key' => $consumer_key,
          'consumer_secret' => $consumer_secret,
        ],
      ]);

      echo $response->getBody();
      break;

    case 'FetchUserTiktokPosts':
      // Fetch user TikTok posts
      $unique_id = $_GET['unique_id'] ?? null;
      $cursor = $_GET['cursor'] ?? null;
      if (!$unique_id) {
        throw new Exception('Missing parameter: unique_id');
      }

      $api_key = $_ENV['REACT_APP_API_KEY'];

      $response = $client->request('GET', 'https://tiktok-scraper7.p.rapidapi.com/user/posts', [
        'query' => [
          'unique_id' => $unique_id,
          'count' => 9,
          'cursor' => $cursor,
        ],
        'headers' => [
          'x-rapidapi-host' => 'tiktok-scraper7.p.rapidapi.com',
          'x-rapidapi-key' => $api_key,
        ],
      ]);

      echo $response->getBody();
      break;

    case 'GetUserIPAndCountry':
      // Get user's IP and country
      $response = $client->request('GET', 'https://ipapi.co/json/');
      echo $response->getBody();
      break;

    case 'payCheckout':
      // Handle checkout payment
      $input = json_decode(file_get_contents('php://input'), true);

      $consumer_key = $_ENV['REACT_APP_TEST_CHECKOUT_CONSUMER_KEY'];
      $consumer_secret = $_ENV['REACT_APP_TEST_CHECKOUT_CONSUMER_SECRET_KEY'];

      $response = $client->request('POST', 'https://testgraming.net/wp-json/wc-graming/pay_checkout', [
        'query' => [
          'consumer_key' => $consumer_key,
          'consumer_secret' => $consumer_secret,
        ],
        'json' => $input,
      ]);

      echo $response->getBody();
      break;

    case 'TikTokUserDetails':
      // Fetch TikTok user details
      $username = $_GET['username'] ?? null;
      if (!$username) {
        throw new Exception('Missing parameter: username');
      }

      $api_key = $_ENV['REACT_APP_API_KEY'];

      // Get user's IP and country
      $ipResponse = $client->request('GET', 'https://ipapi.co/json/');
      $ipData = json_decode($ipResponse->getBody(), true);
      $country = $ipData['country_code'] ?? null;

      // Get TikTok user information
      $response = $client->request('GET', 'https://tiktok-scraper7.p.rapidapi.com/user/info', [
        'query' => [
          'unique_id' => $username,
        ],
        'headers' => [
          'x-rapidapi-host' => 'tiktok-scraper7.p.rapidapi.com',
          'x-rapidapi-key' => $api_key,
        ],
      ]);

      if ($response->getStatusCode() == 200) {
        $json = json_decode($response->getBody(), true);

        if (isset($json['data'])) {
          $originalData = $json['data'];

          $newItem = [
            'pk' => $username,
            'id' => $originalData['user']['id'] ?? null,
            'username' => $originalData['user']['nickname'] ?? null,
            'full_name' => $originalData['user']['nickname'] ?? null,
            'profile_pic_url' => $originalData['user']['avatarThumb'] ?? null,
            'local_image_path' => $originalData['user']['avatarThumb'] ?? null,
            'uniqueId' => $originalData['user']['uniqueId'] ?? null,
            'country' => $country,
          ];

          echo json_encode([$newItem]);
        } else {
          throw new Exception('User not found. Please check the username.');
        }
      } else {
        throw new Exception('Error: ' . $response->getStatusCode() . ' ' . $response->getReasonPhrase());
      }
      break;

    default:
      throw new Exception('Invalid action specified.');
  }
} catch (RequestException $e) {
  // Handle Guzzle exceptions
  http_response_code(500);
  $message = $e->getMessage();
  if ($e->hasResponse()) {
    $message = $e->getResponse()->getBody()->getContents();
  }
  echo json_encode(['error' => 'Request error: ' . $message]);
} catch (Exception $e) {
  // Handle other exceptions
  http_response_code(500);
  echo json_encode(['error' => $e->getMessage()]);
}
