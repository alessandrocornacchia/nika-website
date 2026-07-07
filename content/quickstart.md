::: tag
Quick Start
:::

::: title
Up and Running in Minutes
:::

::: desc
Requires [Kathará](https://www.kathara.org/) (Docker-based) and Python ≥ 3.12.
:::

::: step1_title
Install
:::

::: step1_body
Clone the repository, sync dependencies with `uv`, and activate the virtual environment.
:::

::: step2_title
Configure
:::

::: step2_body
Copy `.env.example` to `.env` and fill in your API keys. NIKA ships no hard-coded defaults: every run needs a configured `.env` or explicit CLI flags.
:::

::: step3_title
Deploy & Inject
:::

::: step3_body
List scenarios, deploy one (each run creates a session), then inject a fault with its parameters.
:::

::: step4_title
Run an Agent & Evaluate
:::

::: step4_body
Run any agent against the session, then close it and evaluate with numeric metrics, an LLM judge, and a CSV summary.
:::
