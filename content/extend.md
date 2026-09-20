::: tag
Define a Task
:::

::: title
Define a New Task in Pure YAML
:::

::: desc
A benchmark test is just a short, declarative yaml definition. Choose a network, the size to run it at, the fault to introduce, and where it happens, NIKA takes care of the rest.
:::

::: anatomy_title
Fields in a case row
:::

::: field1_name
scenario
:::

::: field1_body
Registered network ID, such as `dc_clos` or `campus_lan`.
:::

::: field2_name
topo_size
:::

::: field2_body
`s`, `m`, or `l` when the scenario is sized; omit for fixed labs.
:::

::: field3_name
problem
:::

::: field3_body
Registered fault type, such as `link_down`.
:::

::: field4_name
inject
:::

::: field4_body
Fault parameters (host, interface, and other targets) for that case.
:::

::: note
Want a brand-new network or fault of your own? The [authoring guide](https://github.com/sands-lab/nika/blob/dev/docs/development/creating-benchmark-tasks.md) walks through adding both.
:::
