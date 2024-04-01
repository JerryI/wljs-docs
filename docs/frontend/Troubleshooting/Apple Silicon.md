> App is damaged, please, move it to the trash bin

__If it is your case__ something went wrong with our notarization process in Apple

There is a few options for Mac M1/M2 users on how to overcome this issue

## Running from the browser
In principle, once you have Wolfram Engine installed and activated, it is possible to run WLJS Notebook from the terminal like Jupyter Notebook

1. [Clone repository using](https://github.com/JerryI/wolfram-js-frontend) `git` or download `zip` archive. Here is a [__direct link__](https://github.com/JerryI/wolfram-js-frontend/archive/refs/heads/default.zip)
2. Unzip the file and open your `Terminal` app in this folder
3. Run the command

```bash
wolframscript -f Scripts/start.wls
```

4. Once a message has popped up

```mathematica
Open http://127.0.0.1:20560 in your browser
```

open your browser using the corresponding link

## Bypassing Gatekeeper
This is a common solution among most Electron developers, who do not have a paid license form Apple. 

1. Install a Desktop app normally from [instruction](frontend/instruction.md)
2. Open your terminal app and run the command

```bash
xattr -cr "<installation location of WLJS Notebook>.app"
```

Then it should work like normal Desktop app

## Building from source
You can also build a copy of an application by yourself. You will need to install
- *Node JS*
- _Xcode Command Line_ Tools (possible, may be not necessary)

1. [Clone repository using](https://github.com/JerryI/wolfram-js-frontend) `git` or download `zip` archive. Here is a [__direct link__](https://github.com/JerryI/wolfram-js-frontend/archive/refs/heads/default.zip)
2. Unzip the file and open your `Terminal` app in this folder
3. Run the command

```bash
npm i
```

4. Build the binary

```bash
npm run dist
```

5. Locate `.dmg` file in the directory `./dist/` and install it from there like a normal App

