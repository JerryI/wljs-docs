---
env:
  - Wolfram Kernel
---
Holds (or offloads) an expression to be evaluated on frontend (WLJS)

```mathematica
Offload[expr_]
```

It has `HoldFirst` attribute. 

:::info
Please, see the tutorial [Dynamics](../../Tutorial/Dynamics.md)
:::
## Examples
### Dynamics
Typical example for the dynamic evaluation

```mathematica
pts = RandomReal[{-1,1}, {64, 2}];
Graphics[{PointSize[0.02], Point[pts // Offload]}, ImageSize->500]
```

<Wl data={`"1:eJxFlG1MkwcUhcuEiAYYKRjrcLOdC+JWGTIEnOh9h0yLor52oDBF22ErZSi1BUQ+tk7UIKg4lckQocxZGjCMGagE0Vv50DoQmQUpUMZLKV+VUiTV6EBcGVn24z43557k/Lg/DuubBK7wHRqNJnW0YbOEL44VxUjnLvY2hImkiUK7WbXABjJBdDjxK1GqQJLmXrG5P/USzHkO/3lzcr4NO4TC+AT+AcFsEmGb2a2rXn939UoLpgdluzm4DqOcXVV6f00HMjJ3Cu5SevCLWjHPk08hU7Lmhguhxon0nphzfX0QUnKhvXRsHGVVp1KHWEogpuo7Jv0HYentsqUzDCNQmzP1ea/uIuEd++H2uDJMr1hak7XJCIzCI2e6JD1IcioWFqiakTw26BSibQUr/bosJ8CEVbcsmkj6CIo14aVvr1gg8M38W4+znoHXTI0ieUyPBw6GK2bchsEnsmkDs3MU61YcYg09N4L6B3/5n2ll8JF7dMJw2SjYl7DfLbAfwfjUAJdaOyOSdB3VONkCMv/mmNy6QhAXGLaofFtQz+ULYrZTwOtc9PlBXivIQjH372QdED9PT+eF1qI64r2IFy7dwMzYIyuLVwFzHb0rt7ISqKnLk0t2jyOb9F4Y97EB5K/3scxbH4P8dGO9bqof9IwXBRvqh2D6RF2S5zYjyF7+WP1F43V0zL96okj7FIhdVbdP/9KCzFVexQxePRJOR1UYpQWfxVnlXWcprMncKGkQasHqG1A5s8z2j7zv9gQKu8Hve2nvdZEZs46HHBNMd2HsyQCtCzWGZPShhiSnJoxNLlwe6qQFgntpe6esDXlcx8PV/XrgsJujsdIArnzJ3ovSFqQR5zMuDyYjh7tv3U85WgjM5g04rh+Dmqa2BYvemJDc2qdXzTwC2ieTmZk9CvB7fWQR02EYbyijL9zkmiCIc2crO8mEuicTbtphPbAjB4MnbfntpdYn/NoR1DyLdjAW96IurrrqOU8Lmgu+fwWXPEW9dveOm9NmEBcfv+Z+5AH4jW8zsFOG0fXlt7RHud2gbDKbxDmD6HPOXvi2tgFIupL0CRvANrpmwzzPIWj78g/2JlYzuPebgoMnKBBnn1npEGdEMSdnRxGjDzX3ospij/Ygxc+YH/BBLRDNqxI6oksg30NxceqZBYJUjBPlOw3Aac1yTomnMGVtL0OaPQqFF81XPJYbMT/kmkdH2ghOvBxtSyUH8FflaLjy9wE4Q98fxPEwQGTjp012+X0QdqrYqqFGkEocD5SwHgLp/Nudz16pseXcTOKuLWZU1i33GI8dA7k4deCpqQ/ktPueLPEIqrklDbnOveB1/6qbQDqI5xVuzt6KXrT3km0kt5lRnmtlto53As9O/iLMD5HwL9pZEKGA8HuEWp1owMqz5YVuex9i4+iEcbXKjOra9yeWXLHgtGj/yWV+FtTpvYvWLu7GNt+bdXnpFnBUyQ6MNRuQSkmsL/5aDeSDS0uMp9uBaDlmF2Jtx/9rhZsUL/i3UUIP8Q8KZhtFZLVVxz/EjEZe"`}>{`Graphics[{PointSize[0.02], Point[RandomReal[{-1,1}, {64, 2}] // Offload]}, ImageSize->500]`}</Wl>

And then, change the variable from the separate task
```mathematica
task = SetInterval[With[{},
  pts = (# + 0.001 Sum[
    (i - #)/(Norm[i - #]^3 + 0.1) - (i - #)/(Norm[i - #]^5 + 0.1)
  , {i, pts}]) &/@ pts;
], 100]
```

Don't forget to remove it afterwards
```mathematica
TaskRemove[task]
```

### Force WL Kernel to offload an expression 
Looking back to the previous example, the function  [`RandomReal`](../WLJS/RandomReal.md) implemented on both sides. If you offload it to the `Point` expression

```mathematica
Graphics[{PointSize[0.02], Point[RandomReal[{-1,1}, {64, 2}] // Offload]}]
```

Each time you load a notebook the distribution of the point will be different, since it reevaluate it on frontend's side each time.

## Dev notes
The actual implementation of the expression is extremely simple
```mathematica
SetAttributes[Offload, HoldFirst]
```

```js
core.Offload = async (args, env) => {
	return await intepretate(args[0], env)
}
core.Offload.update = core.Offload
core.Offload.destroy = core.Offload
```

The difference from `Hold` is that it will not be affected by `ReleaseHold`.