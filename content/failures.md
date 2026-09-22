::: tag
Failures
:::

::: title
Faults Across Network Domains
:::

::: desc
**75** registered types across nine domains. Catalog: [failure reference](https://github.com/sands-lab/nika/blob/dev/docs/operations/failures.md).
:::

::: d1_title
Link & Interface
:::

::: d1_count
6 types
:::

::: d1_body
`link_down`, flap, capacity bottleneck, packet corruption.
:::

::: d2_title
Routing & Control Plane
:::

::: d2_count
8 types
:::

::: d2_body
BGP ASN mismatch, max-prefix, OSPF adjacency, daemon crash.
:::

::: d3_title
Forwarding, Encapsulation & Policy
:::

::: d3_count
26 types
:::

::: d3_body
ACLs, static routes, SDN/P4 rules, MTU, WireGuard, NetworkPolicy.
:::

::: d4_title
Service Networking
:::

::: d4_count
6 types
:::

::: d4_body
Kubernetes ClusterIP and load-balancer faults.
:::

::: d5_title
Management & Orchestration
:::

::: d5_count
4 types
:::

::: d5_body
API-server reachability, SDN controller, southbound channels.
:::

::: d6_title
Addressing, Neighbor & Naming
:::

::: d6_count
13 types
:::

::: d6_body
IP/MAC conflicts, ARP, DHCP, DNS data and reachability.
:::

::: d7_title
Endpoint & Application
:::

::: d7_count
2 types
:::

::: d7_body
Endpoint resource contention and application delay.
:::

::: d8_title
Traffic, Queueing & Resource
:::

::: d8_count
3 types
:::

::: d8_body
Offered load, queueing, and host resource constraints.
:::

::: d9_title
Security
:::

::: d9_count
7 types
:::

::: d9_body
DoS, BGP hijack, DHCP/DNS spoofing, ARP poisoning.
:::
