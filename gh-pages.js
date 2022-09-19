import { publish } from 'gh-pages';

publish(
  'build',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/arjunkalburgi/2022.git',
    user: {
      name: 'Arjun Kalburgi',
      email: 'askalburgi@gmail.com'
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);