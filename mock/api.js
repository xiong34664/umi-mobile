import { mock } from 'mockjs';

export default {
  '/api/user/lists': mock({
    'userlist|10': [
      {
        name: '@cname',
        'status|1': true,
        date: '@date',
        strategyId: /[A-Z0-9]{18}/,
      },
    ],
  }),
};
