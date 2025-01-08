# Serialization test
>

### Raw results

NodeJS
```
clk: ~3.09 GHz
cpu: Apple M1 Pro
runtime: node 20.12.2 (arm64-darwin)

benchmark                   avg (min … max) p75   p99    (min … top 1%)
------------------------------------------- -------------------------------
• easy
------------------------------------------- -------------------------------
typia(createIsStringify)     206.89 ns/iter 206.67 ns █▅
                    (199.86 ns … 262.59 ns) 246.42 ns ███▆▂▂▂▁▁▂▂▂▂▂▂▁▂▁▁▁▁
typia(createStringify)       181.01 ns/iter 179.13 ns █▅▂
                      (168.05 ns … 1.14 µs) 245.43 ns ███▄▃▃▂▂▁▁▁▂▂▁▁▁▁▁▁▁▁
typia(direct)                387.62 ns/iter 398.47 ns   █▃
                    (365.79 ns … 460.13 ns) 442.38 ns ▅████▇▄▅▃▄▄▄▄▃▃▂▂▂▂▁▂
bare                         372.15 ns/iter 374.90 ns ▃█▃
                    (362.14 ns … 428.54 ns) 418.25 ns ███▅▃▃▂▃▂▃▂▂▂▂▂▁▂▁▁▁▁

summary
  typia(createStringify)
   1.14x faster than typia(createIsStringify)
   2.06x faster than bare
   2.14x faster than typia(direct)

• hard
------------------------------------------- -------------------------------
typia(createIsStringify)       1.36 µs/iter   1.38 µs     ▄█▅ ▇ ▃ ▅
                        (1.29 µs … 1.47 µs)   1.43 µs ▄▂█████████▆██▄▅██▁▅▂
typia(createStringify)         1.25 µs/iter   1.27 µs     ▄▂▇█ ▂  ▂
                        (1.21 µs … 1.33 µs)   1.32 µs ▂▄▃▆██████▇███▇▁▂▅▁▂▂
typia(direct)                  3.08 µs/iter   3.10 µs       ▃▃▃█         ▃
                        (3.02 µs … 3.14 µs)   3.14 µs █▁▆▆▄▆████▄▆▆▆▁▄█▄▄█▄
bare                           1.66 µs/iter   1.69 µs      ▄▅▇  █ ▂ ▂
                        (1.61 µs … 1.74 µs)   1.73 µs ▃▇██▆███▃██▇████▆▁▁▃▃

summary
  typia(createStringify)
   1.08x faster than typia(createIsStringify)
   1.33x faster than bare
   2.46x faster than typia(direct)
```

Bun
```
clk: ~3.05 GHz
cpu: Apple M1 Pro
runtime: bun 1.1.43 (arm64-darwin)

benchmark                   avg (min … max) p75   p99    (min … top 1%)
------------------------------------------- -------------------------------
• easy
------------------------------------------- -------------------------------
typia(createIsStringify)     151.55 ns/iter 153.62 ns  ▃█
                    (141.62 ns … 423.25 ns) 177.73 ns ▄████▇▆▆▄▄▃▂▃▂▁▁▁▁▁▁▁
typia(createStringify)       154.30 ns/iter 156.09 ns  █▇▂▂
                    (145.37 ns … 411.41 ns) 181.72 ns ▂████▆▆▅▄▃▂▃▂▁▁▁▁▂▁▁▁
typia(direct)                162.82 ns/iter 163.68 ns  █▄
                    (151.43 ns … 435.99 ns) 204.61 ns ▄██▇▅▄▄▂▂▂▂▂▁▂▁▁▁▁▁▁▁
bare                          85.30 ns/iter  87.67 ns  ▅█▆▂
                     (75.20 ns … 175.22 ns) 121.69 ns ▂████▇▅▄▄▃▃▂▁▂▂▁▁▁▁▁▁

summary
  bare
   1.78x faster than typia(createIsStringify)
   1.81x faster than typia(createStringify)
   1.91x faster than typia(direct)

• hard
------------------------------------------- -------------------------------
typia(createIsStringify)       1.83 µs/iter   1.97 µs  █▃
                        (1.64 µs … 2.86 µs)   2.50 µs ▇██▇▂▃▄▃▄▅▆▂▁▁▁▁▃▁▁▁▂
typia(createStringify)         1.64 µs/iter   1.63 µs  ▅▆█▆
                        (1.54 µs … 1.92 µs)   1.92 µs ▅████▅▃▃▂▂▁▃▁▁▂▃▃▃▃▂▄
typia(direct)                  1.68 µs/iter   1.67 µs     ██
                        (1.54 µs … 2.00 µs)   1.99 µs ▂▂▄▆███▃▁▁▂▁▁▁▂▁▄▁▄▂▂
bare                         455.58 ns/iter 466.97 ns  █▆
                    (416.95 ns … 709.90 ns) 693.68 ns ████▇▄▃▂▂▁▁▁▁▁▁▁▁▁▁▁▁

summary
  bare
   3.6x faster than typia(createStringify)
   3.69x faster than typia(direct)
   4.03x faster than typia(createIsStringify)
```

#### Starting

To install dependencies:

```bash
bun install
```

To run:

```bash
bun start
```
or
```bash
yarn start:node
```
