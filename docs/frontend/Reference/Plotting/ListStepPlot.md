---
env:
  - Wolfram Kernel
update: 
needsContainer: 
registered: true
origin: https://reference.wolfram.com/language/ref/ListStepPlot.html
---
```mathematica
ListStepPlot[{y1, y2, ...}]
```
plots the values $y_1$, $y_2$ ... in steps 
## Examples
Using $x$ and $y$ coordinates
```mathematica
ListStepPlot[Table[{Prime[n], EulerPhi[n]}, {n, 50}]]
```

<Wl data={`"1:eJzVmD1sHEUUxzfmI04iQaJEyBKRMJJBJpVjRzZFnD1/JJcEOz7uThEYJHt9Nz4PXu8us3sBhwIXFNQoCh+NLVFBQUkbd3S0EVWMUEB0FGlASmBm3ryZnWH3ZLtA4iTv29/+35t5M7vzZtcvr8T11T7P89J+fqiyIFmjrRSuPM0PczTNVp+yyLPoyL49vR6eksThapew9yeP3/86eeizMfn7xZyA3zF+mKWMtDJ6i0AC4lItplHWoLeJGU89yGgcBSEVTvQqP0ALUqtOz8RhzFhy97OHQ3fu++z83d8//3Riz2c/fPLFG99+/6sPbZ/ih6mVNA67GWny2VmPSJqyr74Uvz/9/AREhIiu2/xPWPWrgPnD//Fv8TuqGWy/5t+kftrRz1SwHdBf1AzmrOZHUn/F0V9V9qTSX9MM9pz2/0vqI078eWUHlD6qGeyYbg/0caf9CSf+ohM/6cRfcuJ9ZYcqj4X88bRmabamtT/os3b8FvKw0i9rBh15QOlVO78t5EGlX9cM+nVHn3d05BGl39AMOvJA5YnQ79Xs/neRR5X+pmbQkQdB9+t2/xXkYRXfsMe/izyk9KZm0JHHVfs3NUP7yNj/W07/yBeU/rZm0JExP8PQPzKOf9EZ/6Id779jx1eQLyr9Xc2gI6v87y3Z+e8iX6rIx3NpWbM0y8gjoL8UaIZmkC+oeMMQH9jx2yt2/A7y66A/MCzNHvKwim/Z499Bnlb9tzVD/8ijqn3D0D6y6n+b2P3vIKv8l1bt/JeRZ1W8YYhHVvk/6Nj57yFfVvO7plmaQWQ1v9uGoX1knD/D0D7yuMr/Pc2QP3JVxa9rhnhkHH/ojB9Z5b9tGPJDVvnuGXZ2Ya8H7X+Htqnv31rB7nqUHxaSoEWzTSrahqvPeGrPlZveqFe86YHtd9hsamDOOmw2LbDnHN1sSmDHHP8JR590dLOpSJPbRIDNpgFsNglgsykAu5uCKfrApshLkyvqwKaIS5Mr2qCbIg1sijL4myIMbIoucHlRBV609VzRBDZFEvxNUZQmVwTBrbzISZMratLkihjopmhBfHlRAn9ThMC/vMhAvCkqkG950QB/UySgfVMUQDdFAPTyRX6ARX3aK1yq9W5I0ufF4GiahMHmlW7UEq+58q32WptEGV+n/6n7CX4ylSa8ZMgXblChPHxAmJSrcchjpUxFGXRaECdTHxLnw0OeNFmX6BMn7JgKmwtWSFgQeyOOiD5xYo+r2AVGOzSyg2WVg1Inr59QQbOEzwhpH3R+xFRcYcEGcW6+nbD0CsKUmLODeOhByZ4KZmT/87Pv+ZNdNfknkfvFaDclb1M3izf47W/ZdBhPfeurjLbFV1fRY9Mr9efysY1sMyRFW18fXuJfxZtz5BYJGSxi/oUIX38/+QVJXdsIOkR8htJHR/D50Q7P8pN5kq3FbWfLttwaYuUvJBnd4M3UwjibD9g6X0gly+Cg7i/wk5k4Zm0aBRlJm3Ecimj+DJfdRRlW8NDDtIknX18peKMoXhm1gOXeRho8bfhKF4fDxPV57mzLeZmJE0raN4OwS/4fWcP/MrhDPYg6PSuGLFDwTPK3xlKNb1JOD6fyPcyENElo1CmrsSfzzrWgzZ+aTq+sYJTiQW+0gpC02Udnvqv+fPuOXy4cMh4W4TfuIhS1saAm9aot/wDiEgta"`}>{`ListStepPlot[Table[{Prime[n], EulerPhi[n]}, {n, 50}], ImageSize->500]`}</Wl>