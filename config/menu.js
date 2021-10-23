const menu = [
  { type: 'config', id: 'news' },
  { type: 'config', id: 'live' },
  { type: 'config', id: 'tickets' },
  { type: 'config', id: 'tournaments' },
  { type: 'config', id: 'info' },
  { type: 'page', title: 'Animations', id: 202110, link: '/animations' },
  {
    type: 'nolink',
    title: 'Archives',
    children: [
      { type: 'external', title: '2019', link: 'https://2019.atlantic-lan.com' },
      { type: 'external', title: '2018', link: 'https://2018.atlantic-lan.com' }
    ]
  }
]

module.exports = menu
