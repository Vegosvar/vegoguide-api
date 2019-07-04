export default ({ host, path, prefix, port, protocol, version }) =>
  `${protocol}://${host}${port ? `:${port}` : ''}${
    prefix ? `/${prefix}` : ''
  }/${version}/${path}`;
