//https://backend.formactiu.com/
 export const environment = {
  production: true, 
   url_public: 'https://beauty-clic-back.vercel.app/assets',
  url_login: 'https://beauty-clic-back.vercel.app/api/login-user',
  url_register: 'https://beauty-clic-back.vercel.app/api/register-user',
  url_update_image: 'https://beauty-clic-back.vercel.app/api/upload/user-pic',
  urlpost: 'https://beauty-clic-back.vercel.app/api/post_cita_trabajador_cliente',
  urlgetCitasCliente: 'https://beauty-clic-back.vercel.app/api/get_citas_cliente',
  urlgetCitasTrabajadorDia: 'https://beauty-clic-back.vercel.app/api/get_citas_trabajador_dia',
  url_newslist: 'https://beauty-clic-back.vercel.app/api/newslist',
  urlgetTrabajadoresServicio: 'https://beauty-clic-back.vercel.app/api/get_trabajadores_servicio',
  urlgetCategorias: 'https://beauty-clic-back.vercel.app/api/get_categorias',
  urlgetServicios: 'https://beauty-clic-back.vercel.app/api/get_servicios',
  url: 'https://beauty-clic-back.vercel.app/api/get_trabajadores',
  pubkey: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyfmKEnrvSjcF5GjHH8Gt
uJ75DsLWn9e5O1UE+utY3o7ygpnXUKPZ7eZz7+XAPl2IiQIXg3bi0Dd5yLX7YyRA
L99YRYpw2Oj1o4SisEKqscMcv/wdFzu8eKEYRcFgnLk6eBILPW1h+J8xjtFWCqVS
hge43sXx4RoPVnWxGn3kxUc/WDlIpITixT5ZxSeu22T+EfN/SUSI+FKgWs7AZ464
bD0zKpRHMW9109MV4aDkSBB18kBBe8c3BGayKwryjiraQrI0GnJsuhnJ/fLQvZWY
j1osW9f7by6lOMsX+G9UznXqbjhs3IPhplkwUQdgrq4NMYr8DHIVw8wW1BYUx9mP
QwIDAQAB
-----END PUBLIC KEY-----`,
  privkey: `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAvjhjmdH6rryDJwtfduS9giccEiDeNpNTUrGswp3ugW16CSk4
P6qobXPKRM7gCwT/J+SdqA6RpKQUb6c08XDI6sxsZgLajbFGxasU6qEbKDsCNXWX
KMGRRTxjbnSG0GtYQFgrDR0TNHQSG0/r4oYZNA2hGqVfC5jrtuCrr/PPz117VN1M
Rrbx6rJaoNGpJDCxjZVSzlqW4lNpmY7kl8iReid6rNVbCTQULRXkudIrJN57Nebz
yazhfdfpdJVQ6Kx+9xmzaNsRptj6YIJ5yu8lDmhEIMirr0YI1FuoMOFAKa5GgDgs
pJVLbBl5Z51XmzMytAwLZw4RB9sXw4NEz0sQ4wIDAQABAoIBAA9SfXtjdZzjpHDd
sqfiDv3P5qvzJ9MflOOhWjgm/pJAXkckodpHBeAjJpTaUSOyGFd/S8/AtKydZuQD
hPk5y4VWSBkDe9VUBU5g1IN9zLE155ykxzNKPEhmb9/y1PUu4GH2eClLQUPFYbv/
eRG7GYae3m5GCdzmSX5mpI28xu1+B5R0cXQJXZQeV1XQbom3A87KisHPcxxt0d4G
Rd7YLr0GecUHT0W/8QkPYaGMbylRhnuMHbZvauVEva/26FGXdGZ543FeA5sVfORW
/cSFpTUEy/CAQupLsiJFdFqZtQlifKH5CEoYmljq2haf5Ps9JJhYF0auk+Cp1fmP
GkjNcFECgYEA60o2neWfQzq3hwi5/fTOs7NlLkEL3cGDNx99/LmCWm2ZatoWpZEG
qhRS1CwOzo2riLw7HxMRZm2ub+STA30cRPghmYz0sHjZiWTVt6Nb9qVO77UGZOwh
V8/Pdii00WLvE27e2DsnPMV4AkfU4j0ufoWNtKzsPDUeOZhJGItdh3sCgYEAzvaf
N7DsJ0TDbKI9L518ZUBAQ8PacDL0EYIoYcbM86HbkLInMuuuB/HZe9/cQNDG0Kvh
yss2A+FJMSzbvGYYNEbrl+5anwE7uHi/IefJBdZbFvbtUaV73OgNmH9FnmSeOQKf
fOXrWCSC9llxerH0nKNth569eFVYmYfY2l0Pq7kCgYBVG+EpuFeln+WnCLcOb7Ed
O3UMCCdcrZTjKZcPBaNrRl3KUt0CQrVgbD2R1eX9PS2hJkVUdjdDD8WbX9j12BmT
sRWmT2BrPSujEUBlTsgDLcSh3J9VfjyJYPgwS4UsgFbudppRKQSGbP9+A7GzrGHX
DkQ16J8DIEuwla9LG45XZQKBgBB0xaYs+CoLKqrJn6nYkNqQKEv7F7RSKNv3iHR1
1TgOB6JSuBExci4JiexymVXCA/z1ncd9LvdSA3rYgURSrdwCQ5taBXSdKX16hGAS
yQYgzC9gRPB4AwhGn0Yf4I4+m+IWlk3dDkB87rjd1csWuUd3Ky9cbN5Tku7qQVDj
k2ppAoGBAN4pcov1ciGRtHV5XSTK5xtoy4ZNcWcrJz1uSzxMq5qkq8kqjRr2lqmF
U6ElDVfz89fYw4sZ+/c7QbXpzp3RPGs5EjZXGZYSY4OBi0Mulj+AxxVpKlngaS2u
XoyFM0SL5Nk51fPGf5MkjoEVe5ef4PVWhkhdma96nNnOdQoOrvuG
-----END RSA PRIVATE KEY-----`


}
