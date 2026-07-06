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
Anatomy of a test
:::

::: field1_name
scenario
:::

::: field1_body
Which network to run the test on.
:::

::: field2_name
topo_size
:::

::: field2_body
How large to make it.
:::

::: field3_name
problem
:::

::: field3_body
The fault to introduce.
:::

::: field4_name
inject
:::

::: field4_body
Where the fault happens.
:::

::: note
Want a brand-new network or fault of your own? The [authoring guide](https://github.com/sands-lab/nika/blob/main/docs/creating-benchmark-tasks.md) walks through adding both.
:::
