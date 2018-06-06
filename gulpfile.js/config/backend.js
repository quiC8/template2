module.exports = {
  proxy: process.env.SERVER_URL || 'http://localhost/backup/wordpress', // backend server address
  root: process.env.SERVER_ROOT || '/srv/sites/backup/wordpress', // document root
  theme: 'wp-content/themes/mytheme' // relative with root directory
}
