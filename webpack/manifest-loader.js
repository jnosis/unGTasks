module.exports = function makeManifest(content, mode, platform) {
  console.log('manifest loading...');
  let manifest = JSON.parse(content);

  console.log(`load ${platform} manifest...`);
  const { chrome, firefox, edge, whale, ...common } = manifest;
  switch (platform) {
    case 'chrome':
      manifest = { ...common, ...chrome };
      break;
    case 'firefox':
      manifest = { ...common, ...firefox };
      break;
    case 'edge':
      manifest = { ...common, ...edge };
      break;
    case 'whale':
      manifest = { ...common, ...whale };
      break;

    default:
      break;
  }

  const { commands, ...rest } = manifest;
  if (mode) {
    console.log('load production manifest...');
    const { dev: _dev, ...prod } = commands;
    manifest = { ...rest, commands: prod };
  }

  console.log('manifest loaded');
  return JSON.stringify(manifest, null, 2);
};
