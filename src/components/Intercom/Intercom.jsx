import Intercom from '@intercom/messenger-js-sdk';
import React, { useEffect } from 'react';

const user = {
  id: '123',
  name: 'John Doe',
  email: 'john@example.com',
  createdAt: Math.floor(Date.now() / 1000),
};

export default function Component() {
  useEffect(() => {
    console.log('Initializing Intercom...');
    Intercom('boot', {
      app_id: 'lk2bf6cz', // Проверьте правильность app_id
      user_id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.createdAt,
    });

    Intercom('onShow', () => console.log('Intercom widget is shown!'));

    return () => {
      console.log('Shutting down Intercom...');
      Intercom('shutdown');
    };
  }, []);

  return <div>Example App</div>;
}
