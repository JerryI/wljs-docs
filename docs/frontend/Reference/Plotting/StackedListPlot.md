---
env:
  - Wolfram Kernel
update: 
needsContainer: 
registered: true
origin: https://reference.wolfram.com/language/ref/StackedListPlot.html
---
```mathematica
StackedListPlot[{data1, data2, ...}]
```

plots lines for each of the $data_i$, with the $i^{th}$ curve being the accumulation of values in $data_1$ through $data_i$
## Example
Plot a stacked list of $y$ values
```mathematica
StackedListPlot[{{3, 2, 1, 6, 4, 7, 7, 2, 3, 1}, {7, 8, 8, 3, 5, 9, 10, 3, 10, 10}, {10, 2, 4, 8, 4, 10, 8, 4, 5, 3}}]
```

<Wl data={`"1:eJztWE2IFEcU7vUvuiZmjIMYyCHKoiJBnJ79FbR3M+tOlqzuMLPJIZ56p2tnK9Z0daq71dGb5BACgRDEJF7Fg4ISSMgh4EUEzSlHMYcYETckKCh48eBP/XVPd21PuzvsLruQhnmvqt579d5879Xrmtk+ictTqzRNc9dTUiSmMw2r7tRqtrKGkjHoekIezrTZsrcjtgVcdxA4CZjgIP0wLp7HhuDrB+WCwoP1QC8j59skzw4mr7/Xgr+v7L9D8dOl+At4sK4peoFdsE9GmWeVeRDfPiWunBKfardH8btTibNbiW+3El9gH8QX+Msq8iC+/Up8A0p8OxSuK/F9oMQXPCGOWlz+f/7j8a38/Csd4h2tdb9YPVvGOs8hqwZGMKmLnTZQMgwJqHrwOBAmTKlc/LCAESbEOffdg66ztw2SO/fv91/1/W2Qm1/+8PHlX2eMqQ6m/AYl445ZhV6DnP+RPb9LyVtas1MVCfYdsRwGFJqXMGrUsK2I34zORpksN8oizkumc5bbx0UDnPZz2sdpL6c9nHZzmudUV0BajNmCAD924+g/d/c+NMiL04//vPjNfYP8fP7qrt/2Xl9s4LMJwHPkIih2R9DtjaDeL7MhU8OYLlhOLvYL1idYr2A9gnULlhdMJji3nJKizXz2i/bonkH8K9fGP9k+Y5B3v7321/Mnt5Y2KQKYGEz5GIQ9MXj7YtAPRNOSl0mSi0JFFwa6MNfFZrrYWheOdOFWT8/OukU/amn3pTiCa9usFD5j5CMfkC8OdN6+4DwwSJ4/95sDoRevn45gqYSh7VXgKdC8/5VND2LbRJDlHE5T1Taa72ZKhiZdjHwPTNDKOmYD15WF98yIAmADfkvs1FbGLTEtB5nM54fOvHi4VDl4XR9eoBwsv5tQWg5++nrXH2dy15cqB69ruwuUg2V/29O0ufa++GxLsl3ZR4D/oByGroPMxohvV1k2OPijFrA9+h5bUvWNdDDkOrRueF0IKevcJXwCEC4uYkRtuRi+pI+yAxsMnQRuHB0+mCA+CAeK2QZpNmZOApRgewTbIBwotp3SdpzAGrTjxmQLz+R/BmRMyDZKw2FAUQHWfDFicIwQsw6UAogHzbVM5ILmaD4a4RfjnhJQmTtGc8aQu5qgp9dNdcVT5Xu4TkugGp+1oxmmv0igxRpEUumkhb4palvxGijS8Jo9MLxe0ktgYwwcB4iIQ05f6qJR3TESghqtmzXAOiZ82hHUT6jArleHgTeNrVb/IjG1CivBcceDdbpNCWHvsEmO0cPU4ijMV30rHRQwJha0TQ+4ExgjZk1ruFUWuVlC0QvYWOWHK/EdQvnsk1EySeTCV6FhQzbjpB27VZqKNselgB0IrE9N5IOVEbV47VKFsmnXUjtG2KlkXXYpLx/ewKRs/6DiZXPUSwFBx4F2rVWvzUSVS6ZFK6eWFpn4pqzYK1UTAYuczl4t3jt11mgtaNNeHMRL6kFk/TGhL6X1l1eVBfpb"`}>{`StackedListPlot[{{3, 2, 1, 6, 4, 7, 7, 2, 3, 1}, {7, 8, 8, 3, 5, 9, 10, 3, 10, 10}, {10, 2, 4, 8, 4, 10, 8, 4, 5, 3}}, ImageSize->500]`}</Wl>