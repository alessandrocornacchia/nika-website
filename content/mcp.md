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
Base Host Probes
:::

::: server1_tools
- `ping_pair`: ping a host pair
- `traceroute`: trace a path
- `iperf_test`: bandwidth between hosts
- `get_host_net_config`: host network config
- `systemctl_ops`: start, stop, or restart services
:::

::: server2_title
Pingmesh ([Guo et al., SIGCOMM '15](https://doi.org/10.1145/2785956.2787496))
:::

::: server2_tools
- `run_pingmesh_snapshot`: reachability, loss, and RTT snapshot
:::

::: server3_title
Packet Capture
:::

::: server3_tools
- `packet_capture_start`: start a bounded capture
- `packet_capture_stop`: stop and return the pcap path
- `packet_capture_inspect`: summary, packets, or protocol views
:::

::: server4_title
INT Telemetry
:::

::: server4_tools
- `int_query_telemetry`: INT-MX hop traces
:::

::: server5_title
Routing CLIs
:::

::: server5_tools
- `frr_get_bgp_conf`: FRR BGP (Kathará)
- `frr_get_ospf_conf`: FRR OSPF (Kathará)
- `srl_show_bgp_summary`: SR Linux BGP (Containerlab)
- `srl_show_ip_route`: SR Linux routes (Containerlab)
- `iosxr_get_bgp_conf`: Cisco XRd BGP
- `iosxr_show_route`: Cisco XRd routes
:::

::: server6_title
Task Submission
:::

::: server6_tools
- `submit`: anomaly decision and root-cause IDs
:::

::: note
More tools coming soon. You can also plug in any custom MCP server; browse [mcp.so](https://mcp.so/) for the community catalogue.
:::
