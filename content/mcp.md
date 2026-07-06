::: tag
MCP Servers & Tools
:::

::: title
Network Operations as Agent Tools
:::

::: desc
NIKA exposes network operations through MCP servers, letting any MCP-compatible agent (Claude, GPT-4, Gemini, open-source LLMs…) directly interact with the network environment.
:::

::: server1_title
Base Kathará Server
:::

::: server1_tools
- `get_reachability` — Ping all host pairs
- `iperf_test` — Bandwidth test between two hosts
- `systemctl_ops` — Start / stop / restart services
- `get_host_net_config` — Retrieve host network config
- `nft_list_ruleset` — Dump nftables ruleset
:::

::: server2_title
BMv2 P4 Server
:::

::: server2_tools
- `bmv2_get_log` — Retrieve BMv2 switch logs
- `bmv2_get_counter_arrays` — Read counter arrays
:::

::: server3_title
FRRouting Server
:::

::: server3_tools
- `frr_get_bgp_conf` — Retrieve BGP configuration
- `frr_get_ospf_conf` — Retrieve OSPF configuration
:::

::: server4_title
INT / InfluxDB Server
:::

::: server4_tools
- `influx_list_buckets` — List InfluxDB buckets
- `influx_get_measurements` — Retrieve measurements
- `influx_query_measurement` — Query telemetry data
:::

::: server5_title
Generic Server
:::

::: server5_tools
- `google_search` — Web search for context
:::

::: server6_title
Task Management Server
:::

::: server6_tools
- `list_avail_problems` — List available problems
- `get_submission_template` — Get submission template
- `submit` — Submit a solution
:::

::: note
More tools coming soon. You can also plug in any custom MCP server — browse [mcp.so](https://mcp.so/) for the community catalogue.
:::
