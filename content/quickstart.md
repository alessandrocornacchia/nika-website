::: tag
Quick Start
:::

::: title
Up and Running in Minutes
:::

::: desc
Prerequisites: Linux, Python ≥ 3.12, `curl`, and `sudo`.
:::

::: step1_title
Install
:::

::: step1_body
Clone the repository and run `./scripts/install.sh`. It installs Docker (if needed), uv, Kathará, Containerlab, and Python dependencies, then creates `.env` and `config/nika.yaml` from the examples when missing.
:::

::: step2_title
Configure
:::

::: step2_body
Put API keys in `.env`. In `config/nika.yaml`, set `agent.type`, `provider`, and `model`. Run `uv run nika config show` to confirm.
:::

::: step3_title
Run a benchmark
:::

::: step3_body
Run a frozen release, then summarize the scores.
:::

::: step4_title
Optional: smoke one incident
:::

::: step4_body
Run a single problem end-to-end, or deploy a lab yourself and drive it with the CLI.
:::
