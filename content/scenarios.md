::: tag
Network Scenarios
:::

::: title
Live Networks and Workloads
:::

::: desc
Each incident runs on a concrete topology with realistic services. Catalog: [network scenario reference](https://github.com/sands-lab/nika/blob/dev/docs/operations/network-scenarios.md).
:::

::: card1_title
Data Center Clos
:::

::: card1_body
FRR eBGP Clos (`dc_clos`) on Kathará, or Nokia SR Linux Clos (`min3clos`) on Containerlab.
:::

::: card2_title
Campus LAN
:::

::: card2_body
Hierarchical campus with OSPF, DHCP, DNS, and a server farm (`campus_lan`).
:::

::: card3_title
Enterprise WAN
:::

::: card3_body
Multi-site hub-and-spoke WAN with provider underlay, WireGuard, eBGP overlay, and per-role VRFs (`enterprise_branch`).
:::

::: card4_title
ISP Backbone
:::

::: card4_body
SNDlib graphs such as Abilene and France (`isp_*`), on Kathará (FRR) or Containerlab (SR Linux), with optional IGP and BGP presets.
:::

::: card5_title
SDN and P4 Fabrics
:::

::: card5_body
ONOS + OVS L3 Clos (`sdn_l3_clos`), and BMv2 fabrics under P4Runtime (`p4_dc_fabric`, `p4_dc_gateway` with INT-MX).
:::

::: card6_title
Kubernetes Networking
:::

::: card6_body
k3s labs for multi-tenant services (`k8s_lab`) and simulated llm-d inference routing (`llmd_lab`).
:::
