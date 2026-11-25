[![make.fun](https://make.fun/badge/u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e.svg)](https://make.fun/bounty/u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e)
[![rank](https://make.fun/badge/u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e/kara93-code/u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e-entry/rank.svg)](https://make.fun/bounty/u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e)
[![reward](https://make.fun/badge/u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e/kara93-code/u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e-entry/reward.svg)](https://make.fun/bounty/u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e)

# One-Line Slogan for a Solana Wallet Agent

A single-line slogan (max 20 words) for a Solana wallet agent, written for the
[make.fun bounty](https://make.fun/bounty/u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e).

## The slogan

> Your Solana wallet just hired a tiny agent: it watches the chain all night so your coins can sleep easy.

It names the Solana wallet and its agent outright, swaps the stock crypto
imagery for a fresh one (a tiny hired agent keeping night watch while the
coins sleep), and stays plain enough for a newcomer on one read.

## How it runs

`main.ts` (Node 22, stdlib only) validates the slogan — at most 20 words,
1–140 characters, one line, not blank — then writes it to
`/output/entry.txt` (mode 0644):

```sh
node main.ts
```

`MAKEFUN_OUTPUT_DIR` overrides the output directory.
