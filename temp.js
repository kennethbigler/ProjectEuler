Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Cloud-init v. 0.7.6 running 'init-local' at Wed, 01 Jun 2016 17:39:39 +0000. Up 3.47 seconds.
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Writing to /var/log/cloud-init.log - ab: [420] 0 bytes
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Changing the ownership of /var/log/cloud-init.log to 0:4
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Attempting to remove /var/lib/cloud/instance/boot-finished
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Attempting to remove /var/lib/cloud/instance
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Attempting to remove /var/lib/cloud/data/no-net
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Reading from /var/lib/cloud/instance/obj.pkl (quiet=False)
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['ubuntu', 'cloudinit.distros.ubuntu'] that have attributes ['Distro']
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Failed at attempted import of 'ubuntu' due to: No module named ubuntu
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found ubuntu with attributes ['Distro'] in ['cloudinit.distros.ubuntu']
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] stages.py[DEBUG]: Using distro class <class 'cloudinit.distros.ubuntu.Distro'>
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Looking for for data source in: ['DigitalOcean', 'None'], via packages ['', 'cloudinit.sources'] that matches dependencies ['FILESYSTEM']
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['DataSourceDigitalOcean', 'cloudinit.sources.DataSourceDigitalOcean'] that have attributes ['get_datasource_list']
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Failed at attempted import of 'DataSourceDigitalOcean' due to: No module named DataSourceDigitalOcean
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found DataSourceDigitalOcean with attributes ['get_datasource_list'] in ['cloudinit.sources.DataSourceDigitalOcean']
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['DataSourceNone', 'cloudinit.sources.DataSourceNone'] that have attributes ['get_datasource_list']
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Failed at attempted import of 'DataSourceNone' due to: No module named DataSourceNone
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found DataSourceNone with attributes ['get_datasource_list'] in ['cloudinit.sources.DataSourceNone']
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Searching for data source in: []
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] cloud-init[DEBUG]: No local datasource found
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Reading from /proc/uptime (quiet=False)
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Read 10 bytes from /proc/uptime
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: cloud-init mode 'init' took 0.044 seconds (0.05)
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Cloud-init v. 0.7.6 running 'init' at Wed, 01 Jun 2016 17:39:39 +0000. Up 4.26 seconds.
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Writing to /var/log/cloud-init.log - ab: [420] 0 bytes
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Changing the ownership of /var/log/cloud-init.log to 0:4
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Running command ['ifconfig', '-a'] with allowed return codes [0] (shell=False, capture=True)
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Running command ['netstat', '-rn'] with allowed return codes [0] (shell=False, capture=True)
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] cloud-init[DEBUG]: Checking to see if files that we need already exist from a previous run that would allow us to stop early.
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Reading from /var/lib/cloud/data/no-net (quiet=False)
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Reading from /var/lib/cloud/instance/obj.pkl (quiet=False)
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Reading from /var/lib/cloud/instance/obj.pkl (quiet=False)
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['ubuntu', 'cloudinit.distros.ubuntu'] that have attributes ['Distro']
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Failed at attempted import of 'ubuntu' due to: No module named ubuntu
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found ubuntu with attributes ['Distro'] in ['cloudinit.distros.ubuntu']
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] stages.py[DEBUG]: Using distro class <class 'cloudinit.distros.ubuntu.Distro'>
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Looking for for data source in: ['DigitalOcean', 'None'], via packages ['', 'cloudinit.sources'] that matches dependencies ['FILESYSTEM', 'NETWORK']
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['DataSourceDigitalOcean', 'cloudinit.sources.DataSourceDigitalOcean'] that have attributes ['get_datasource_list']
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Failed at attempted import of 'DataSourceDigitalOcean' due to: No module named DataSourceDigitalOcean
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found DataSourceDigitalOcean with attributes ['get_datasource_list'] in ['cloudinit.sources.DataSourceDigitalOcean']
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['DataSourceNone', 'cloudinit.sources.DataSourceNone'] that have attributes ['get_datasource_list']
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Failed at attempted import of 'DataSourceNone' due to: No module named DataSourceNone
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found DataSourceNone with attributes ['get_datasource_list'] in ['cloudinit.sources.DataSourceNone']
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Searching for data source in: ['DataSourceDigitalOcean', 'DataSourceNone']
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Seeing if we can get any data from <class 'cloudinit.sources.DataSourceDigitalOcean.DataSourceDigitalOcean'>
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_list'] that have attributes ['Merger']
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_list with attributes ['Merger'] in ['cloudinit.mergers.m_list']
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_dict'] that have attributes ['Merger']
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_dict with attributes ['Merger'] in ['cloudinit.mergers.m_dict']
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_str'] that have attributes ['Merger']
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_str with attributes ['Merger'] in ['cloudinit.mergers.m_str']
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging 'dict' into 'dict' using method '_handle_unknown' of 'LookupMerger: (3)'
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging using located merger 'DictMerger: (method=no_replace,recurse_str=False,recurse_dict=True,recurse_array=False,allow_delete=False)' since it had method '_on_dict'
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_list'] that have attributes ['Merger']
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_list with attributes ['Merger'] in ['cloudinit.mergers.m_list']
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_dict'] that have attributes ['Merger']
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_dict with attributes ['Merger'] in ['cloudinit.mergers.m_dict']
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_str'] that have attributes ['Merger']
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_str with attributes ['Merger'] in ['cloudinit.mergers.m_str']
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging 'dict' into 'dict' using method '_handle_unknown' of 'LookupMerger: (3)'
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging using located merger 'DictMerger: (method=no_replace,recurse_str=False,recurse_dict=True,recurse_array=False,allow_delete=False)' since it had method '_on_dict'
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: [0/6] open 'http://169.254.169.254/metadata/v1/' with {'url': 'http://169.254.169.254/metadata/v1/', 'headers': {'User-Agent': 'Cloud-Init/0.7.6'}, 'allow_redirects': True, 'method': 'GET', 'timeout': 10.0} configuration
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: Read from http://169.254.169.254/metadata/v1/ (200, 82b) after 1 attempts
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: [0/6] open 'http://169.254.169.254/metadata/v1/interfaces/' with {'url': 'http://169.254.169.254/metadata/v1/interfaces/', 'headers': {'User-Agent': 'Cloud-Init/0.7.6'}, 'allow_redirects': True, 'method': 'GET', 'timeout': 10.0} configuration
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: Read from http://169.254.169.254/metadata/v1/interfaces/ (200, 8b) after 1 attempts
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: [0/6] open 'http://169.254.169.254/metadata/v1/interfaces/public/' with {'url': 'http://169.254.169.254/metadata/v1/interfaces/public/', 'headers': {'User-Agent': 'Cloud-Init/0.7.6'}, 'allow_redirects': True, 'method': 'GET', 'timeout': 10.0} configuration
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: Read from http://169.254.169.254/metadata/v1/interfaces/public/ (200, 3b) after 1 attempts
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: [0/6] open 'http://169.254.169.254/metadata/v1/interfaces/public/0/' with {'url': 'http://169.254.169.254/metadata/v1/interfaces/public/0/', 'headers': {'User-Agent': 'Cloud-Init/0.7.6'}, 'allow_redirects': True, 'method': 'GET', 'timeout': 10.0} configuration
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: Read from http://169.254.169.254/metadata/v1/interfaces/public/0/ (200, 28b) after 1 attempts
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: [0/6] open 'http://169.254.169.254/metadata/v1/interfaces/public/0/ipv4/' with {'url': 'http://169.254.169.254/metadata/v1/interfaces/public/0/ipv4/', 'headers': {'User-Agent': 'Cloud-Init/0.7.6'}, 'allow_redirects': True, 'method': 'GET', 'timeout': 10.0} configuration
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: Read from http://169.254.169.254/metadata/v1/interfaces/public/0/ipv4/ (200, 23b) after 1 attempts
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: [0/6] open 'http://169.254.169.254/metadata/v1/interfaces/public/0/ipv4/netmask' with {'url': 'http://169.254.169.254/metadata/v1/interfaces/public/0/ipv4/netmask', 'headers': {'User-Agent': 'Cloud-Init/0.7.6'}, 'allow_redirects': True, 'method': 'GET', 'timeout': 10.0} configuration
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: Read from http://169.254.169.254/metadata/v1/interfaces/public/0/ipv4/netmask (200, 13b) after 1 attempts
Jun  1 13:39:39 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: [0/6] open 'http://169.254.169.254/metadata/v1/interfaces/public/0/ipv4/gateway' with {'url': 'http://169.254.169.254/metadata/v1/interfaces/public/0/ipv4/gateway', 'headers': {'User-Agent': 'Cloud-Init/0.7.6'}, 'allow_redirects': True, 'method': 'GET', 'timeout': 10.0} configuration
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: Read from http://169.254.169.254/metadata/v1/interfaces/public/0/ipv4/gateway (200, 13b) after 1 attempts
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: [0/6] open 'http://169.254.169.254/metadata/v1/interfaces/public/0/ipv4/address' with {'url': 'http://169.254.169.254/metadata/v1/interfaces/public/0/ipv4/address', 'headers': {'User-Agent': 'Cloud-Init/0.7.6'}, 'allow_redirects': True, 'method': 'GET', 'timeout': 10.0} configuration
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: Read from http://169.254.169.254/metadata/v1/interfaces/public/0/ipv4/address (200, 15b) after 1 attempts
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: [0/6] open 'http://169.254.169.254/metadata/v1/interfaces/public/0/anchor_ipv4/' with {'url': 'http://169.254.169.254/metadata/v1/interfaces/public/0/anchor_ipv4/', 'headers': {'User-Agent': 'Cloud-Init/0.7.6'}, 'allow_redirects': True, 'method': 'GET', 'timeout': 10.0} configuration
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: Read from http://169.254.169.254/metadata/v1/interfaces/public/0/anchor_ipv4/ (200, 23b) after 1 attempts
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: [0/6] open 'http://169.254.169.254/metadata/v1/interfaces/public/0/anchor_ipv4/netmask' with {'url': 'http://169.254.169.254/metadata/v1/interfaces/public/0/anchor_ipv4/netmask', 'headers': {'User-Agent': 'Cloud-Init/0.7.6'}, 'allow_redirects': True, 'method': 'GET', 'timeout': 10.0} configuration
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: Read from http://169.254.169.254/metadata/v1/interfaces/public/0/anchor_ipv4/netmask (200, 11b) after 1 attempts
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: [0/6] open 'http://169.254.169.254/metadata/v1/interfaces/public/0/anchor_ipv4/gateway' with {'url': 'http://169.254.169.254/metadata/v1/interfaces/public/0/anchor_ipv4/gateway', 'headers': {'User-Agent': 'Cloud-Init/0.7.6'}, 'allow_redirects': True, 'method': 'GET', 'timeout': 10.0} configuration
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: Read from http://169.254.169.254/metadata/v1/interfaces/public/0/anchor_ipv4/gateway (200, 9b) after 1 attempts
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: [0/6] open 'http://169.254.169.254/metadata/v1/interfaces/public/0/anchor_ipv4/address' with {'url': 'http://169.254.169.254/metadata/v1/interfaces/public/0/anchor_ipv4/address', 'headers': {'User-Agent': 'Cloud-Init/0.7.6'}, 'allow_redirects': True, 'method': 'GET', 'timeout': 10.0} configuration
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: Read from http://169.254.169.254/metadata/v1/interfaces/public/0/anchor_ipv4/address (200, 9b) after 1 attempts
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: [0/6] open 'http://169.254.169.254/metadata/v1/interfaces/public/0/mac' with {'url': 'http://169.254.169.254/metadata/v1/interfaces/public/0/mac', 'headers': {'User-Agent': 'Cloud-Init/0.7.6'}, 'allow_redirects': True, 'method': 'GET', 'timeout': 10.0} configuration
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: Read from http://169.254.169.254/metadata/v1/interfaces/public/0/mac (200, 17b) after 1 attempts
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: [0/6] open 'http://169.254.169.254/metadata/v1/interfaces/public/0/type' with {'url': 'http://169.254.169.254/metadata/v1/interfaces/public/0/type', 'headers': {'User-Agent': 'Cloud-Init/0.7.6'}, 'allow_redirects': True, 'method': 'GET', 'timeout': 10.0} configuration
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: Read from http://169.254.169.254/metadata/v1/interfaces/public/0/type (200, 6b) after 1 attempts
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: [0/6] open 'http://169.254.169.254/metadata/v1/dns/' with {'url': 'http://169.254.169.254/metadata/v1/dns/', 'headers': {'User-Agent': 'Cloud-Init/0.7.6'}, 'allow_redirects': True, 'method': 'GET', 'timeout': 10.0} configuration
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: Read from http://169.254.169.254/metadata/v1/dns/ (200, 11b) after 1 attempts
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: [0/6] open 'http://169.254.169.254/metadata/v1/dns/nameservers' with {'url': 'http://169.254.169.254/metadata/v1/dns/nameservers', 'headers': {'User-Agent': 'Cloud-Init/0.7.6'}, 'allow_redirects': True, 'method': 'GET', 'timeout': 10.0} configuration
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: Read from http://169.254.169.254/metadata/v1/dns/nameservers (200, 15b) after 1 attempts
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: [0/6] open 'http://169.254.169.254/metadata/v1/floating_ip/' with {'url': 'http://169.254.169.254/metadata/v1/floating_ip/', 'headers': {'User-Agent': 'Cloud-Init/0.7.6'}, 'allow_redirects': True, 'method': 'GET', 'timeout': 10.0} configuration
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: Read from http://169.254.169.254/metadata/v1/floating_ip/ (200, 4b) after 1 attempts
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: [0/6] open 'http://169.254.169.254/metadata/v1/floating_ip/ipv4' with {'url': 'http://169.254.169.254/metadata/v1/floating_ip/ipv4', 'headers': {'User-Agent': 'Cloud-Init/0.7.6'}, 'allow_redirects': True, 'method': 'GET', 'timeout': 10.0} configuration
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: Read from http://169.254.169.254/metadata/v1/floating_ip/ipv4 (200, 17b) after 1 attempts
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: [0/6] open 'http://169.254.169.254/metadata/v1/public-keys' with {'url': 'http://169.254.169.254/metadata/v1/public-keys', 'headers': {'User-Agent': 'Cloud-Init/0.7.6'}, 'allow_redirects': True, 'method': 'GET', 'timeout': 10.0} configuration
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: Read from http://169.254.169.254/metadata/v1/public-keys (200, 736b) after 1 attempts
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: [0/6] open 'http://169.254.169.254/metadata/v1/user-data' with {'url': 'http://169.254.169.254/metadata/v1/user-data', 'headers': {'User-Agent': 'Cloud-Init/0.7.6'}, 'allow_redirects': True, 'method': 'GET', 'timeout': 10.0} configuration
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: Read from http://169.254.169.254/metadata/v1/user-data (200, 0b) after 1 attempts
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: [0/6] open 'http://169.254.169.254/metadata/v1/region' with {'url': 'http://169.254.169.254/metadata/v1/region', 'headers': {'User-Agent': 'Cloud-Init/0.7.6'}, 'allow_redirects': True, 'method': 'GET', 'timeout': 10.0} configuration
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: Read from http://169.254.169.254/metadata/v1/region (200, 4b) after 1 attempts
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: [0/6] open 'http://169.254.169.254/metadata/v1/hostname' with {'url': 'http://169.254.169.254/metadata/v1/hostname', 'headers': {'User-Agent': 'Cloud-Init/0.7.6'}, 'allow_redirects': True, 'method': 'GET', 'timeout': 10.0} configuration
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: Read from http://169.254.169.254/metadata/v1/hostname (200, 5b) after 1 attempts
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: [0/6] open 'http://169.254.169.254/metadata/v1/vendor-data' with {'url': 'http://169.254.169.254/metadata/v1/vendor-data', 'headers': {'User-Agent': 'Cloud-Init/0.7.6'}, 'allow_redirects': True, 'method': 'GET', 'timeout': 10.0} configuration
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: Read from http://169.254.169.254/metadata/v1/vendor-data (200, 965b) after 1 attempts
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: [0/6] open 'http://169.254.169.254/metadata/v1/id' with {'url': 'http://169.254.169.254/metadata/v1/id', 'headers': {'User-Agent': 'Cloud-Init/0.7.6'}, 'allow_redirects': True, 'method': 'GET', 'timeout': 10.0} configuration
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] url_helper.py[DEBUG]: Read from http://169.254.169.254/metadata/v1/id (200, 8b) after 1 attempts
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] stages.py[INFO]: Loaded datasource DataSourceDigitalOcean - DataSourceDigitalOcean
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Reading from /proc/cmdline (quiet=False)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Read 121 bytes from /proc/cmdline
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Reading from /etc/cloud/cloud.cfg (quiet=False)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Read 127 bytes from /etc/cloud/cloud.cfg
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Attempting to load yaml from string of length 127 with allowed root types (<type 'dict'>,)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Reading from /etc/cloud/cloud.cfg.d/90_dpkg.cfg (quiet=False)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Read 95 bytes from /etc/cloud/cloud.cfg.d/90_dpkg.cfg
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Attempting to load yaml from string of length 95 with allowed root types (<type 'dict'>,)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Reading from /etc/cloud/cloud.cfg.d/30_locale.cfg (quiet=False)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Read 14 bytes from /etc/cloud/cloud.cfg.d/30_locale.cfg
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Attempting to load yaml from string of length 14 with allowed root types (<type 'dict'>,)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Reading from /etc/cloud/cloud.cfg.d/20_sshkeygen.cfg (quiet=False)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Read 52 bytes from /etc/cloud/cloud.cfg.d/20_sshkeygen.cfg
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Attempting to load yaml from string of length 52 with allowed root types (<type 'dict'>,)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Reading from /etc/cloud/cloud.cfg.d/10_mirrors.cfg (quiet=False)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Read 32 bytes from /etc/cloud/cloud.cfg.d/10_mirrors.cfg
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Attempting to load yaml from string of length 32 with allowed root types (<type 'dict'>,)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Reading from /etc/cloud/cloud.cfg.d/05_logging.cfg (quiet=False)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Read 1910 bytes from /etc/cloud/cloud.cfg.d/05_logging.cfg
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Attempting to load yaml from string of length 1910 with allowed root types (<type 'dict'>,)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Reading from /etc/cloud/cloud.cfg.d/00_debian.cfg (quiet=False)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Read 26 bytes from /etc/cloud/cloud.cfg.d/00_debian.cfg
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Attempting to load yaml from string of length 26 with allowed root types (<type 'dict'>,)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_list'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_list with attributes ['Merger'] in ['cloudinit.mergers.m_list']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_dict'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_dict with attributes ['Merger'] in ['cloudinit.mergers.m_dict']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_str'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_str with attributes ['Merger'] in ['cloudinit.mergers.m_str']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging 'dict' into 'dict' using method '_handle_unknown' of 'LookupMerger: (3)'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging using located merger 'DictMerger: (method=no_replace,recurse_str=False,recurse_dict=True,recurse_array=False,allow_delete=False)' since it had method '_on_dict'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_list'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_list with attributes ['Merger'] in ['cloudinit.mergers.m_list']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_dict'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_dict with attributes ['Merger'] in ['cloudinit.mergers.m_dict']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_str'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_str with attributes ['Merger'] in ['cloudinit.mergers.m_str']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging 'dict' into 'dict' using method '_handle_unknown' of 'LookupMerger: (3)'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging using located merger 'DictMerger: (method=no_replace,recurse_str=False,recurse_dict=True,recurse_array=False,allow_delete=False)' since it had method '_on_dict'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_list'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_list with attributes ['Merger'] in ['cloudinit.mergers.m_list']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_dict'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_dict with attributes ['Merger'] in ['cloudinit.mergers.m_dict']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_str'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_str with attributes ['Merger'] in ['cloudinit.mergers.m_str']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging 'dict' into 'dict' using method '_handle_unknown' of 'LookupMerger: (3)'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging using located merger 'DictMerger: (method=no_replace,recurse_str=False,recurse_dict=True,recurse_array=False,allow_delete=False)' since it had method '_on_dict'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_list'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_list with attributes ['Merger'] in ['cloudinit.mergers.m_list']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_dict'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_dict with attributes ['Merger'] in ['cloudinit.mergers.m_dict']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_str'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_str with attributes ['Merger'] in ['cloudinit.mergers.m_str']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging 'dict' into 'dict' using method '_handle_unknown' of 'LookupMerger: (3)'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging using located merger 'DictMerger: (method=no_replace,recurse_str=False,recurse_dict=True,recurse_array=False,allow_delete=False)' since it had method '_on_dict'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_list'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_list with attributes ['Merger'] in ['cloudinit.mergers.m_list']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_dict'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_dict with attributes ['Merger'] in ['cloudinit.mergers.m_dict']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_str'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_str with attributes ['Merger'] in ['cloudinit.mergers.m_str']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging 'dict' into 'dict' using method '_handle_unknown' of 'LookupMerger: (3)'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging using located merger 'DictMerger: (method=no_replace,recurse_str=False,recurse_dict=True,recurse_array=False,allow_delete=False)' since it had method '_on_dict'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_list'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_list with attributes ['Merger'] in ['cloudinit.mergers.m_list']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_dict'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_dict with attributes ['Merger'] in ['cloudinit.mergers.m_dict']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_str'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_str with attributes ['Merger'] in ['cloudinit.mergers.m_str']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging 'dict' into 'dict' using method '_handle_unknown' of 'LookupMerger: (3)'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging using located merger 'DictMerger: (method=no_replace,recurse_str=False,recurse_dict=True,recurse_array=False,allow_delete=False)' since it had method '_on_dict'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_list'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_list with attributes ['Merger'] in ['cloudinit.mergers.m_list']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_dict'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_dict with attributes ['Merger'] in ['cloudinit.mergers.m_dict']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_str'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_str with attributes ['Merger'] in ['cloudinit.mergers.m_str']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging 'dict' into 'dict' using method '_handle_unknown' of 'LookupMerger: (3)'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging using located merger 'DictMerger: (method=no_replace,recurse_str=False,recurse_dict=True,recurse_array=False,allow_delete=False)' since it had method '_on_dict'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_list'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_list with attributes ['Merger'] in ['cloudinit.mergers.m_list']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_dict'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_dict with attributes ['Merger'] in ['cloudinit.mergers.m_dict']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_str'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_str with attributes ['Merger'] in ['cloudinit.mergers.m_str']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging 'dict' into 'dict' using method '_handle_unknown' of 'LookupMerger: (3)'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging using located merger 'DictMerger: (method=no_replace,recurse_str=False,recurse_dict=True,recurse_array=False,allow_delete=False)' since it had method '_on_dict'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_list'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_list with attributes ['Merger'] in ['cloudinit.mergers.m_list']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_dict'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_dict with attributes ['Merger'] in ['cloudinit.mergers.m_dict']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_str'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_str with attributes ['Merger'] in ['cloudinit.mergers.m_str']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging 'dict' into 'dict' using method '_handle_unknown' of 'LookupMerger: (3)'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging using located merger 'DictMerger: (method=no_replace,recurse_str=False,recurse_dict=True,recurse_array=False,allow_delete=False)' since it had method '_on_dict'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_list'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_list with attributes ['Merger'] in ['cloudinit.mergers.m_list']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_dict'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_dict with attributes ['Merger'] in ['cloudinit.mergers.m_dict']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_str'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_str with attributes ['Merger'] in ['cloudinit.mergers.m_str']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging 'dict' into 'dict' using method '_handle_unknown' of 'LookupMerger: (3)'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging using located merger 'DictMerger: (method=no_replace,recurse_str=False,recurse_dict=True,recurse_array=False,allow_delete=False)' since it had method '_on_dict'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging 'dict' into 'dict' using method '_handle_unknown' of 'LookupMerger: (3)'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging using located merger 'DictMerger: (method=no_replace,recurse_str=False,recurse_dict=True,recurse_array=False,allow_delete=False)' since it had method '_on_dict'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_list'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_list with attributes ['Merger'] in ['cloudinit.mergers.m_list']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_dict'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_dict with attributes ['Merger'] in ['cloudinit.mergers.m_dict']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_str'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_str with attributes ['Merger'] in ['cloudinit.mergers.m_str']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging 'dict' into 'dict' using method '_handle_unknown' of 'LookupMerger: (3)'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging using located merger 'DictMerger: (method=no_replace,recurse_str=False,recurse_dict=True,recurse_array=False,allow_delete=False)' since it had method '_on_dict'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Attempting to remove /var/lib/cloud/instance
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Creating symbolic link from '/var/lib/cloud/instance' => '/var/lib/cloud/instances/16416401'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Reading from /var/lib/cloud/instances/16416401/datasource (quiet=False)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Writing to /var/lib/cloud/instances/16416401/datasource - wb: [420] 47 bytes
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Writing to /var/lib/cloud/data/previous-datasource - wb: [420] 47 bytes
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Reading from /var/lib/cloud/data/instance-id (quiet=False)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Writing to /var/lib/cloud/data/instance-id - wb: [420] 9 bytes
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Writing to /var/lib/cloud/data/previous-instance-id - wb: [420] 9 bytes
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] cloud-init[DEBUG]: init will now be targeting instance id: 16416401
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Reading from /proc/cmdline (quiet=False)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Read 121 bytes from /proc/cmdline
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Reading from /etc/cloud/cloud.cfg (quiet=False)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Read 127 bytes from /etc/cloud/cloud.cfg
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Attempting to load yaml from string of length 127 with allowed root types (<type 'dict'>,)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Reading from /etc/cloud/cloud.cfg.d/90_dpkg.cfg (quiet=False)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Read 95 bytes from /etc/cloud/cloud.cfg.d/90_dpkg.cfg
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Attempting to load yaml from string of length 95 with allowed root types (<type 'dict'>,)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Reading from /etc/cloud/cloud.cfg.d/30_locale.cfg (quiet=False)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Read 14 bytes from /etc/cloud/cloud.cfg.d/30_locale.cfg
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Attempting to load yaml from string of length 14 with allowed root types (<type 'dict'>,)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Reading from /etc/cloud/cloud.cfg.d/20_sshkeygen.cfg (quiet=False)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Read 52 bytes from /etc/cloud/cloud.cfg.d/20_sshkeygen.cfg
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Attempting to load yaml from string of length 52 with allowed root types (<type 'dict'>,)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Reading from /etc/cloud/cloud.cfg.d/10_mirrors.cfg (quiet=False)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Read 32 bytes from /etc/cloud/cloud.cfg.d/10_mirrors.cfg
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Attempting to load yaml from string of length 32 with allowed root types (<type 'dict'>,)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Reading from /etc/cloud/cloud.cfg.d/05_logging.cfg (quiet=False)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Read 1910 bytes from /etc/cloud/cloud.cfg.d/05_logging.cfg
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Attempting to load yaml from string of length 1910 with allowed root types (<type 'dict'>,)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Reading from /etc/cloud/cloud.cfg.d/00_debian.cfg (quiet=False)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Read 26 bytes from /etc/cloud/cloud.cfg.d/00_debian.cfg
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Attempting to load yaml from string of length 26 with allowed root types (<type 'dict'>,)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_list'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_list with attributes ['Merger'] in ['cloudinit.mergers.m_list']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_dict'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_dict with attributes ['Merger'] in ['cloudinit.mergers.m_dict']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_str'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_str with attributes ['Merger'] in ['cloudinit.mergers.m_str']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging 'dict' into 'dict' using method '_handle_unknown' of 'LookupMerger: (3)'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging using located merger 'DictMerger: (method=no_replace,recurse_str=False,recurse_dict=True,recurse_array=False,allow_delete=False)' since it had method '_on_dict'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_list'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_list with attributes ['Merger'] in ['cloudinit.mergers.m_list']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_dict'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_dict with attributes ['Merger'] in ['cloudinit.mergers.m_dict']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_str'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_str with attributes ['Merger'] in ['cloudinit.mergers.m_str']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging 'dict' into 'dict' using method '_handle_unknown' of 'LookupMerger: (3)'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging using located merger 'DictMerger: (method=no_replace,recurse_str=False,recurse_dict=True,recurse_array=False,allow_delete=False)' since it had method '_on_dict'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_list'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_list with attributes ['Merger'] in ['cloudinit.mergers.m_list']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_dict'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_dict with attributes ['Merger'] in ['cloudinit.mergers.m_dict']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_str'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_str with attributes ['Merger'] in ['cloudinit.mergers.m_str']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging 'dict' into 'dict' using method '_handle_unknown' of 'LookupMerger: (3)'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging using located merger 'DictMerger: (method=no_replace,recurse_str=False,recurse_dict=True,recurse_array=False,allow_delete=False)' since it had method '_on_dict'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_list'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_list with attributes ['Merger'] in ['cloudinit.mergers.m_list']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_dict'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_dict with attributes ['Merger'] in ['cloudinit.mergers.m_dict']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_str'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_str with attributes ['Merger'] in ['cloudinit.mergers.m_str']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging 'dict' into 'dict' using method '_handle_unknown' of 'LookupMerger: (3)'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging using located merger 'DictMerger: (method=no_replace,recurse_str=False,recurse_dict=True,recurse_array=False,allow_delete=False)' since it had method '_on_dict'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_list'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_list with attributes ['Merger'] in ['cloudinit.mergers.m_list']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_dict'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_dict with attributes ['Merger'] in ['cloudinit.mergers.m_dict']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_str'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_str with attributes ['Merger'] in ['cloudinit.mergers.m_str']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging 'dict' into 'dict' using method '_handle_unknown' of 'LookupMerger: (3)'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging using located merger 'DictMerger: (method=no_replace,recurse_str=False,recurse_dict=True,recurse_array=False,allow_delete=False)' since it had method '_on_dict'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_list'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_list with attributes ['Merger'] in ['cloudinit.mergers.m_list']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_dict'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_dict with attributes ['Merger'] in ['cloudinit.mergers.m_dict']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_str'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_str with attributes ['Merger'] in ['cloudinit.mergers.m_str']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging 'dict' into 'dict' using method '_handle_unknown' of 'LookupMerger: (3)'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging using located merger 'DictMerger: (method=no_replace,recurse_str=False,recurse_dict=True,recurse_array=False,allow_delete=False)' since it had method '_on_dict'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_list'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_list with attributes ['Merger'] in ['cloudinit.mergers.m_list']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_dict'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_dict with attributes ['Merger'] in ['cloudinit.mergers.m_dict']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_str'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_str with attributes ['Merger'] in ['cloudinit.mergers.m_str']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging 'dict' into 'dict' using method '_handle_unknown' of 'LookupMerger: (3)'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging using located merger 'DictMerger: (method=no_replace,recurse_str=False,recurse_dict=True,recurse_array=False,allow_delete=False)' since it had method '_on_dict'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_list'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_list with attributes ['Merger'] in ['cloudinit.mergers.m_list']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_dict'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_dict with attributes ['Merger'] in ['cloudinit.mergers.m_dict']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_str'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_str with attributes ['Merger'] in ['cloudinit.mergers.m_str']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging 'dict' into 'dict' using method '_handle_unknown' of 'LookupMerger: (3)'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging using located merger 'DictMerger: (method=no_replace,recurse_str=False,recurse_dict=True,recurse_array=False,allow_delete=False)' since it had method '_on_dict'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_list'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_list with attributes ['Merger'] in ['cloudinit.mergers.m_list']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_dict'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_dict with attributes ['Merger'] in ['cloudinit.mergers.m_dict']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_str'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_str with attributes ['Merger'] in ['cloudinit.mergers.m_str']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging 'dict' into 'dict' using method '_handle_unknown' of 'LookupMerger: (3)'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging using located merger 'DictMerger: (method=no_replace,recurse_str=False,recurse_dict=True,recurse_array=False,allow_delete=False)' since it had method '_on_dict'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_list'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_list with attributes ['Merger'] in ['cloudinit.mergers.m_list']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_dict'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_dict with attributes ['Merger'] in ['cloudinit.mergers.m_dict']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_str'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_str with attributes ['Merger'] in ['cloudinit.mergers.m_str']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging 'dict' into 'dict' using method '_handle_unknown' of 'LookupMerger: (3)'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging using located merger 'DictMerger: (method=no_replace,recurse_str=False,recurse_dict=True,recurse_array=False,allow_delete=False)' since it had method '_on_dict'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging 'dict' into 'dict' using method '_handle_unknown' of 'LookupMerger: (3)'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging using located merger 'DictMerger: (method=no_replace,recurse_str=False,recurse_dict=True,recurse_array=False,allow_delete=False)' since it had method '_on_dict'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_list'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_list with attributes ['Merger'] in ['cloudinit.mergers.m_list']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_dict'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_dict with attributes ['Merger'] in ['cloudinit.mergers.m_dict']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_str'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_str with attributes ['Merger'] in ['cloudinit.mergers.m_str']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging 'dict' into 'dict' using method '_handle_unknown' of 'LookupMerger: (3)'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging using located merger 'DictMerger: (method=no_replace,recurse_str=False,recurse_dict=True,recurse_array=False,allow_delete=False)' since it had method '_on_dict'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Writing to /var/lib/cloud/instance/obj.pkl - wb: [256] 6264 bytes
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Writing to /var/lib/cloud/instances/16416401/user-data.txt - wb: [384] 0 bytes
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Writing to /var/lib/cloud/instances/16416401/user-data.txt.i - wb: [384] 318 bytes
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Writing to /var/lib/cloud/instances/16416401/vendor-data.txt - wb: [384] 964 bytes
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Attempting to load yaml from string of length 964 with allowed root types (<type 'dict'>,)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Writing to /var/lib/cloud/instances/16416401/vendor-data.txt.i - wb: [384] 1279 bytes
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['ubuntu', 'cloudinit.distros.ubuntu'] that have attributes ['Distro']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Failed at attempted import of 'ubuntu' due to: No module named ubuntu
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found ubuntu with attributes ['Distro'] in ['cloudinit.distros.ubuntu']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] stages.py[DEBUG]: Using distro class <class 'cloudinit.distros.ubuntu.Distro'>
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Writing to /var/lib/cloud/instances/16416401/sem/consume_data - wb: [420] 19 bytes
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] helpers.py[DEBUG]: Running consume_data using lock (<FileLock using file '/var/lib/cloud/instances/16416401/sem/consume_data'>)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] stages.py[DEBUG]: Added default handler for set(['text/cloud-config-jsonp', 'text/cloud-config']) from CloudConfigPartHandler: [['text/cloud-config', 'text/cloud-config-jsonp']]
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] stages.py[DEBUG]: Added default handler for set(['text/x-shellscript']) from ShellScriptPartHandler: [['text/x-shellscript']]
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] stages.py[DEBUG]: Added default handler for set(['text/cloud-boothook']) from BootHookPartHandler: [['text/cloud-boothook']]
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] stages.py[DEBUG]: Added default handler for set(['text/upstart-job']) from UpstartJobPartHandler: [['text/upstart-job']]
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Calling handler BootHookPartHandler: [['text/cloud-boothook']] (__begin__, None, 2) with frequency once-per-instance
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Calling handler UpstartJobPartHandler: [['text/upstart-job']] (__begin__, None, 2) with frequency once-per-instance
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Calling handler CloudConfigPartHandler: [['text/cloud-config', 'text/cloud-config-jsonp']] (__begin__, None, 3) with frequency once-per-instance
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Calling handler ShellScriptPartHandler: [['text/x-shellscript']] (__begin__, None, 2) with frequency once-per-instance
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: {'Content-Type': 'text/x-not-multipart', 'Content-Disposition': 'attachment; filename="part-001"', 'MIME-Version': '1.0'}
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Empty payload of type text/x-not-multipart
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Calling handler BootHookPartHandler: [['text/cloud-boothook']] (__end__, None, 2) with frequency once-per-instance
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Calling handler UpstartJobPartHandler: [['text/upstart-job']] (__end__, None, 2) with frequency once-per-instance
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Calling handler CloudConfigPartHandler: [['text/cloud-config', 'text/cloud-config-jsonp']] (__end__, None, 3) with frequency once-per-instance
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Writing to /var/lib/cloud/instances/16416401/cloud-config.txt - wb: [384] 0 bytes
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Calling handler ShellScriptPartHandler: [['text/x-shellscript']] (__end__, None, 2) with frequency once-per-instance
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Reading from /var/lib/cloud/instance/cloud-config.txt (quiet=False)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Read 0 bytes from /var/lib/cloud/instance/cloud-config.txt
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Attempting to load yaml from string of length 0 with allowed root types (<type 'dict'>,)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: load_yaml given empty string, returning default
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_list'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_list with attributes ['Merger'] in ['cloudinit.mergers.m_list']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_dict'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_dict with attributes ['Merger'] in ['cloudinit.mergers.m_dict']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Looking for modules ['cloudinit.mergers.m_str'] that have attributes ['Merger']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] importer.py[DEBUG]: Found m_str with attributes ['Merger'] in ['cloudinit.mergers.m_str']
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging 'dict' into 'dict' using method '_handle_unknown' of 'LookupMerger: (3)'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Merging using located merger 'DictMerger: (method=no_replace,recurse_str=False,recurse_dict=True,recurse_array=False,allow_delete=False)' since it had method '_on_dict'
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] stages.py[DEBUG]: vendor data will be consumed. disabled_handlers=None
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] stages.py[DEBUG]: Added default handler for set(['text/cloud-config-jsonp', 'text/cloud-config']) from CloudConfigPartHandler: [['text/cloud-config', 'text/cloud-config-jsonp']]
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] stages.py[DEBUG]: Added default handler for set(['text/x-shellscript']) from ShellScriptPartHandler: [['text/x-shellscript']]
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] stages.py[DEBUG]: Added default handler for set(['text/cloud-boothook']) from BootHookPartHandler: [['text/cloud-boothook']]
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] stages.py[DEBUG]: Added default handler for set(['text/upstart-job']) from UpstartJobPartHandler: [['text/upstart-job']]
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Calling handler BootHookPartHandler: [['text/cloud-boothook']] (__begin__, None, 2) with frequency once-per-instance
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Calling handler UpstartJobPartHandler: [['text/upstart-job']] (__begin__, None, 2) with frequency once-per-instance
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Calling handler CloudConfigPartHandler: [['text/cloud-config', 'text/cloud-config-jsonp']] (__begin__, None, 3) with frequency once-per-instance
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Calling handler ShellScriptPartHandler: [['text/x-shellscript']] (__begin__, None, 2) with frequency once-per-instance
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: {'Content-Type': 'text/cloud-config', 'Content-Disposition': 'attachment; filename="part-001"', 'MIME-Version': '1.0'}
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] __init__.py[DEBUG]: Calling handler CloudConfigPartHandler: [['text/cloud-config', 'text/cloud-config-jsonp']] (text/cloud-config, part-001, 3) with frequency once-per-instance
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] util.py[DEBUG]: Attempting to load yaml from string of length 964 with allowed root types (<type 'dict'>,)
Jun  1 13:39:40 packer-debian-8-i386 [CLOUDINIT] cloud_config.py[DEBUG]: Merging by applying [('dict', ['replace']), ('list', []), ('str', [])]
Jun  1 13:39:40 packer-debian-8-i3