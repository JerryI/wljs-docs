# Гироскоп в презентации или зачем брать с собой JoyCon на большую научную конференцию

## PDF-а достаточно?

Анимации и _свистоперделки_, особенно в том виде, в котором они были популярны в PowerPoint 15–20 лет назад, значительно отошли на второй план. Добавьте к этому проблемы совместимости между LibreOffice и MS Office (даже между версиями для Windows и Mac), наличие или отсутствие нужных шрифтов — и желание делать что-то необычное на “сцене” пропадёт.

Обратите внимание на современные технические доклады: зачастую это просто PDF-документ, состоящий из страниц с векторной и растровой графикой, и иногда GIF-анимациями, которые кушают мегабайты (например, как эта статья), как ни в себя.

### Нереализованный потенциал

Стоит разделять декоративные _свистоперделки_ от тех, которые несут дополнительную информацию в медиа-формате. К примеру, обратите внимание на спецификацию [ECMA-363](https://en.wikipedia.org/wiki/Universal_3D)

![PDF Документ с 3D моделью внутри / https://tetra4d.com/wp-content/uploads/2024/10/3dpdf-Aero-Turbine-V03042024.pdf](https://habrastorage.org/getpro/habr/upload_files/6eb/0f8/c94/6eb0f8c944210d55877d5ee5a62b08f3.png "PDF Документ с 3D моделью внутри / https://tetra4d.com/wp-content/uploads/2024/10/3dpdf-Aero-Turbine-V03042024.pdf")

PDF Документ с 3D моделью внутри / [https://tetra4d.com/wp-content/uploads/2024/10/3dpdf-Aero-Turbine-V03042024.pdf](https://tetra4d.com/wp-content/uploads/2024/10/3dpdf-Aero-Turbine-V03042024.pdf)

3D модель в PDF документе просто дополняет представление. Вы наблюдаете объект с разных углов / срезов, и это никак не может соревноваться с GIF или чем-то подобным.

Очень обидно, что такая _фича_ практически нигде, кроме Adobe Acrobat, не поддерживается и, вероятно, не будет. Складывается впечатление, что мы совершили скачок когда-то в прошлом, а теперь снова вернулись к статическим слайдам.

## Большая научная конференция DPG

[**DPG-Frühjahrstagung**](https://www.dpg-physik.de/aktivitaeten-und-programme/tagungen/fruehjahrstagungen/2025) — это очень крупная европейская конференции по физике, организуемые Немецким физическим общестом (DPG). Ежегодно они собирают более ![10^4](https://habrastorage.org/getpro/habr/upload_files/9ee/912/b60/9ee912b6015c34ce7bc0c986be4efeeb.svg) ученых и проходят в городах Германии, охватывая огромные области физики

![Весенняя конференция (Конденсированная материя)](https://habrastorage.org/getpro/habr/upload_files/7a0/e10/7cd/7a0e107cd63770f544a8fc3b52c0a4c3.png "Весенняя конференция (Конденсированная материя)")

Весенняя конференция (Конденсированная материя)

![DPG2025 (Весенняя встреча) проходила в замечательном городе Регенсбург / REGENSBURG.MAPS](https://habrastorage.org/getpro/habr/upload_files/86d/c55/65d/86dc5565d232caf96a934d6a6ab3ac9d.png "DPG2025 (Весенняя встреча) проходила в замечательном городе Регенсбург / REGENSBURG.MAPS")

DPG2025 (Весенняя встреча) проходила в замечательном городе Регенсбург / REGENSBURG.MAPS

Там так много докладов, и длится она почти неделю, что под конец становится плохо. Тем не менее это не умаляет её значения как платформы для установления новых контактов, тренировки выступления с докладами, а также верного способа узнать _что сейчас на рынке, какие поезда уже ушли, а какие только отправляются_.

Участники пленарных сессий — магистранты, PhD-студенты (большинство), а реже — постдоки.

Такая большая и доступная площадка - отличная мотивация попробовать что-то новое 💡 _даже если что-то пойдет не так_.

## Что за JoyCon

Наверняка читатель видел такие штуки

![Logitech PPT Clicker / Logitech.com](https://habrastorage.org/getpro/habr/upload_files/244/194/9ec/2441949ec34cfca9d73259f889b4e409.png "Logitech PPT Clicker / Logitech.com")

Logitech PPT Clicker / Logitech.com

Такое устройство выполняет роль переключателя слайдов, а иногда и лазерной указки, подключаясь по Bluetooth или через _донгл_. В любом случае, это своего рода контроллер с кнопками. Контроллеры бывают и по-интереснее - например, такой, как у портативной приставки Nintendo Switch из 2017-ого

![JoyCon (R) / Curved.com](https://habrastorage.org/getpro/habr/upload_files/7b1/fe1/ad8/7b1fe1ad8fda778d8eed14f8294e12f3.png "JoyCon (R) / Curved.com")

JoyCon (R) / Curved.com

Размером он не сильно отличается, но имеет дополнительные _плюшки_

- Аналоговый стик 🕹️
    
- 11 кнопок ☎️
    
- IR камера 📸 (сложно использовать, нет хороших доков по API)
    
- Полноценный IMU 🌐 (Inertial Measurements Unit) aka гироскоп с акселерометром
    
- Bluetooth связь; распознается как обычный HID
    

Кнопки действительно можно привязать к PowerPoint или использовать стик для управления слайдами, эмулируя нажатия мыши или клавиатуры, как это реализовано в этих проектах

- [Hackster: Right Joy-con Controller as a Presentation Remote](https://www.hackster.io/leo49/right-joy-con-controller-as-a-presentation-remote-5810e4) (Python)
    
- [Medium: Nintendo Switch Joy-Con Presentation Remote](https://medium.com/@mimming/nintendo-switch-joy-con-presentation-remote-5a7e08e7ad11) (USB Override MacOS)
    

Мне показалось, что было бы здорово как-то использовать IMU и аналоговый стик. Но для этого нужно выйти за пределы PowerPoint и PDF 🧙🏼‍♂️

## Кладем слайды в браузер

Идея ["Современного формата презентаций"](https://habr.com/ru/articles/414757/) не нова,

не стоит забывать, что такой подход подойдет не всем. Перенеся показ и создание презентаций в браузер, мы автоматически получаем доступ ко всем возможностям современного веба: поддержке периферийных устройств, JavaScript, магии анимаций на CSS и многому другому, включая видео. Важно отметить, что всё это **по умолчанию кроссплатформенно** и будет работать почти везде.

К примеру, можно создавать слайды в Markdown с помощью простого фреймворка (хотя, скорее, это небольшая библиотека) — [RevealJS](https://revealjs.com/markdown/)

У _RevealJS_ довольно простое API, поэтому программное управление слайдами с помощью команд JavaScript реализуется довольно легко

```
setTimeout(() =>{
  Reveal.navigateNext(1); // переключить слайд
}, 1000)
```

У такого подхода есть большие минусы. Требуется интернет, а если хочется обойтись без него, придётся использовать бандлеры и встраивать все JavaScript-библиотеки в один HTML-файл, к примеру. Либо запускать локальный веб-сервер.

### Вариант с Jupyter Notebook

Если вам нравится Python и IPYNB, тогда берите nbconvert — он сконвертирует ваш блокнот напрямую в презентацию RevealJS, и вы даже этого не заметите! Или, даже проще, используйте расширение для Jupyter — [RISE](https://github.com/damianavila/RISE)

![Create Presentation from Jupyter Notebook / https://mljar.com/blog/jupyter-notebook-presentation/](https://habrastorage.org/getpro/habr/upload_files/0a9/3cd/faa/0a93cdfaaed6da4f1039fd983c7c5cc3.png "Create Presentation from Jupyter Notebook / https://mljar.com/blog/jupyter-notebook-presentation/")

Create Presentation from Jupyter Notebook / [https://mljar.com/blog/jupyter-notebook-presentation/](https://mljar.com/blog/jupyter-notebook-presentation/)

В любом случае, идея остаётся простой — мы должны как-то попасть в среду веб-браузеров, чтобы воспользоваться всеми возможностями JoyCon.

### Вариант с WLJS Notebook

Моё отношение к [WLJS](https://wljs.io) здесь будет несколько смещенным, поэтому сразу извиняюсь, ведь я и [@KirillBelovTest](/users/kirillbelovtest) - его разработчики 🙂 Эта IDE с блокнотным интерфейсом теснее интегрирована с веб-средой, поскольку слайды туда не экспортируются, а в прямом смысле исполняются и являются всего лишь ещё одним типом выходных ячеек, наряду с привычным Markdown

![WLJS Notebook / https://wljs.io](https://habrastorage.org/getpro/habr/upload_files/af2/423/7c5/af24237c5b944029dd1cc2282caa11fe.png "WLJS Notebook / https://wljs.io")

WLJS Notebook / [https://wljs.io](https://wljs.io)

Мы уже писали про то, [как делать слайды там](https://habr.com/ru/articles/853496/). Под капотом все тот же RevealJS с несколькими отличиями:

1. работает оффлайн
    
2. можно внедрять интерактивные и элементы и компоненты, подобно LaTeX Beamer
    

## Разбираемся с JoyCon

Итак, проще всего будет воспользоваться уже готовой библиотекой [joy-con-webhid](https://github.com/tomayac/joy-con-webhid). Ведь зачем тратить время на то, чтобы изобретать велосипед, если люди уже хорошо постарались и сделали всё за нас

```
npm install joy-con-webhid --prefix .
```

> Все последующие примеры я буду приводить из WLJS Notebook. Однако примерно то же самое вы сможете сделать, используя Python + FAST API для связи с JavaScript или что-то подобное, либо вообще обойтись только JS. Онлайн-версия блокнота доступна [здесь](https://jerryi.github.io/wljs-demo/PresenterJoyCon.html).

Для начала прослушаем, что в принципе летит к нам с порта контроллера

Скрытый текст

```
.esm

import { connectJoyCon, connectedJoyCons } from 'joy-con-webhid';

// Create connect button
const connectButton = document.createElement('button');
connectButton.className = 'relative cursor-pointer rounded-md h-6 pl-3 pr-2 text-left text-gray-500 focus:outline-none ring-1 sm:text-xs sm:leading-6 bg-gray-100';
connectButton.innerText = "Connect";

let connectionState = "Connect";
let isJoyConConnected = false;
let lastUpdateTime = performance.now();
let isAllowedToConnect = false;

// main handler function (warning! called at 60FPS)
function handleJoyConInput(detail) {
  const currentTime = performance.now();
  if (currentTime - lastUpdateTime > 50) { // slow down
    lastUpdateTime = currentTime;

    console.log(detail);
  }
}

// JoyCon periodically goes to sleep, we need to wake it up
const connectionCheckInterval = setInterval(async () => {
  if (!isAllowedToConnect) return;

  const connectedDevices = connectedJoyCons.values();
  isJoyConConnected = false;

  for (const joyCon of connectedDevices) {
    isJoyConConnected = true;
    if (joyCon.eventListenerAttached) continue;

    await joyCon.open();
    await joyCon.enableStandardFullMode();
    await joyCon.enableIMUMode();
    await joyCon.enableVibration();
    await joyCon.rumble(600, 600, 0.5);

    joyCon.addEventListener('hidinput', ({ detail }) => handleJoyConInput(detail));
    joyCon.eventListenerAttached = true;
  }

  updateConnectionState();
}, 2000);

// Update button state
function updateConnectionState() {
  if (isJoyConConnected && connectionState !== "Connected") {
    connectionState = "Connected";
    connectButton.innerText = connectionState;
    connectButton.style.background = '#d8ffd8';
  } else if (!isJoyConConnected && connectionState !== "Connect") {
    connectionState = "Connect";
    connectButton.innerText = connectionState;
    connectButton.style.background = '';
  }
}

// Handle click event
connectButton.addEventListener('click', async () => {
  isAllowedToConnect = true;
  if (!isJoyConConnected) {
    await connectJoyCon();
  }
});

// Just decorations
const container = document.createElement('div');
container.innerHTML = `<small>Presenter controller</small>`;
container.appendChild(connectButton);
container.className = 'flex flex-col gap-y-2 bg-white rounded-md shadow-md';

// Return DOM element to the page
this.return(container);

// When a cell got removed
this.ondestroy(() => {
  cancelInterval(connectionCheckInterval);
});
```

Самая главная функция здесь следующая

```
function handleJoyConInput(detail) {
  const currentTime = performance.now();
  if (currentTime - lastUpdateTime > 50) { // slow down
    lastUpdateTime = currentTime;

    console.log(detail); //output to the console
  }
}
```

Выглядит, как будто нужно делать много шагов. На самом деле, большая часть этого кода занимается подключением контроллера и рисованием одной большой кнопки “Connect”. Не обращайте слишком много внимания на специальные методы — их легко можно заменить на те, что доступны в вашей конкретной среде:

- `this.return(dom)` передает `DOMElement` для встраивания на страницу
    
- `this.ondestroy(function)` вызывает `function` если ячейку удалили, чтобы почистить таймеры и т.п.
    
- первая строчка `.esm` это способ указания подтипа ячейки Javascript в WLJS Notebook, которой нужен предварительный _бандлинг_.
    

Если мы запустим эту большую ячейку с кодом, увидим следующее

![Выходной элемент DOM](https://habrastorage.org/getpro/habr/upload_files/7fb/252/570/7fb252570b46188a539937c6896d7ff3.png "Выходной элемент DOM")

Выходной элемент DOM

Затем следует:

1. Отключить контроллер от Nintendo Switch (System → Controllers → Disconnect).

2. Спарить JoyCon (R) с ПК, удерживая мелкую кнопку сбоку.

3. Нажать “Connect” на нашем presenter controller.

Открыв консоль браузера, мы увидим следующие сообщения:

```
{
    "buttonStatus": {
        "y": false,
        "x": false,
        "b": false,
        "a": false,
        "r": false,
        "zr": false,
        "sr": false,
        "sl": false,
        "plus": false,
        "rightStick": false,
        "home": false,
    },
    "analogStickRight": {
        "horizontal": "0.1",
        "vertical": "0.3"
    },
    "actualAccelerometer": {
        "x": 0,
        "y": 0,
        "z": 0
    },
    "actualGyroscope": {
        "dps": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "rps": {
            "x": 0,
            "y": 0,
            "z": 0
        }
    }
}
```

Довольно много всего! Попробуем использовать это на благо нашей презентации 💡

### Кнопки и пуговицы

Для начала можно использовать две кнопки для переключения слайдов

![Первая партия кнопок](https://habrastorage.org/getpro/habr/upload_files/94b/dd9/905/94bdd9905512c1d438c81125ee9b0769.png "Первая партия кнопок")

Первая партия кнопок

В среде WLJS можно управлять слайдами программно через функцию-прослойку на языке Wolfram, которая вызывает API на стороне RevealJS

```
FrontSlidesSelected["navigateNext", 1] // FrontSubmit
```

Остается лишь дёргать эту функцию в нужный момент по щелчку кнопки (или пуговицы). Для этого нужно пересылать события на сторону Wolfram машины из мира Javascript, где мы уже можем делать с ними всё, что захочется. Получается такая диаграмма:

![Схема работы WLJS в режиме презентации](https://habrastorage.org/getpro/habr/upload_files/0af/c7d/235/0afc7d2352388733a65e17924281aea7.png "Схема работы WLJS в режиме презентации")

Схема работы WLJS в режиме презентации

Вернёмся обратно к ячейке с кодом и **модифицируем обработчик**

Скрытый текст

```
//....
//.......
const buttonStates = { //all buttons states on JoyCon (R)
  a: false, b: false, home: false, plus: false, r: false, sl: false, sr: false,
  x: false, y: false, zr: false
};

const joystickPosition = [0.0, 0.0];
let restingJoystick = [0.0, 0.0];
let isCalibrated = false;


function handleJoyConInput(detail) {
  if (!isCalibrated) { //calibration
    restingJoystick = [Number(detail.analogStickRight.horizontal), Number(detail.analogStickRight.vertical)];
    isCalibrated = true;
    return;
  }

  const currentTime = performance.now();
  if (currentTime - lastUpdateTime > 50) {
    lastUpdateTime = currentTime;

    let buttonPressed = false;
    let joystickMoved = false;

    for (const key of Object.keys(buttonStates)) {
      if (!buttonStates[key] && detail.buttonStatus[key]) buttonPressed = true;
      buttonStates[key] = detail.buttonStatus[key];
    }

    const verticalOffset = Number(detail.analogStickRight.vertical) - restingJoystick[1];
    const horizontalOffset = Number(detail.analogStickRight.horizontal) - restingJoystick[0];

    if (Math.abs(verticalOffset) > 0.1 || Math.abs(horizontalOffset) > 0.1) {
      joystickMoved = true;
    }

    joystickPosition[0] = horizontalOffset;
    joystickPosition[1] = -verticalOffset;

    if (buttonPressed) {
      for (const key of Object.keys(buttonStates)) {
        if (buttonStates[key]) {
          server.kernel.io.fire('JoyCon', true, key);
          break;
        }
      }
    }

    if (joystickMoved) {
      server.kernel.io.fire('JoyCon', joystickPosition, 'Stick');
    }
  }
}
//.......
//..
```

Как можно заметить, мы добавили здесь несколько пунктов

- **калибровку стика** - аналоговые стики _дрифтят_, поэтому его цифровое положение никогда не нуль
    
- **состояние всех кнопок** - зачем нам долбить в дверь каждый раз, если постучать лишь при изменении состояния. Это снизит стресс системы
    
- **отправку состояний в пул событий** - сугубо вещь WLJS, где мы пересылаем данные в машину Wolfram (или Питон если вы в Jupyter)
    

_Последний пункт_ выглядит так (замените на эквивалент в вашей среде)

```
server.kernel.io.fire(String name, Object state, String pattern);
```

Тогда на стороне Wolfram мы можем легко подписаться на эти события как

```
EventHandler["name", {
  "pattern" -> Function[state,
    Print[state];
  ]
}]
```

Это довольно удобно, так как в качестве паттерна Javascript пересылает названия нажатых кнопок. В этом случае можно сразу подписаться на переключение слайдов, например, так:

• **ZR** — следующий слайд

• **Y** — назад

Таким образом, программное управление слайдами становится интуитивно понятным

```
EventHandler["JoyCon", {
  "zr" -> (FrontSubmit[FrontSlidesSelected["navigateNext", 1]]&),
  "y" -> (FrontSubmit[FrontSlidesSelected["navigatePrev", 1]]&),
  "Stick" -> Print
}];
```

#### Испытаем на практике

Составим простенькую презентацию

```
.slide

# Слайд 1

__Привет Хабр!__


---


![](https://upload.wikimedia.org/wikipedia/en/7/7d/Lenna_%28test_image%29.png)
```

Теперь подключим **JoyCon** к ПК и подсоединим его к нашему Javascript скрипту, нажав на кнопку _Connect_.

Если у вас нет Node для бандлинга

Если у Вас нет NodeJS для компиляции (бандлинга) Javascript, то ниже приведен сжатый код группы готовых ячеек, который вы можете просто вставить в любую пустую ячейку в блокноте. Тогда они распакуются.

```
jsfc4uri1%3AeJztfWtz28aWoGtmdqdq99NU7Q9oa3ZiUiJpAqRkmYqccWTnxlNx4vXjfvGqHJBoSkhAgAJAiaSj%2FRf7af%2FsnnO6G%2BhuNEjKj3vvVN1UTAHd531Ovx%2B4P05fT%2F%2Fh3r17%2BT%2FBz09RXkz%2FEd%2F%2BO%2Fw8zfN0EgVFlCYVyOtFzN%2Fgw7OgCN78v3%2B5d6%2FH89n%2F7nt%2BNJunWcE%2BskmaJHxS%2FEe6OkuTjnrloUjI2S2bZumMPfgtXXUhs3vDx5dR%2BOAEieC%2Fhw%2FZWcaDgrMgCVlerGLOikuuCIE4bLwoijRBYEjMC5X1PSWzUxamk8WMJ0VvQoSexxzfWg8E3oP2iUStkHqTOMjzn4MZB%2FQHGY9B72vgucjyNOvO0ygpeMaydJGEPOzOQnbZPWLzuDtg86zrs4Ivi27Mp4V4usiCVfew32dTECQfpYsijhLeTdKEsyxKLroey2cjAl3m%2BBjzIMT0Iza%2BENhev%2F%2FAIWYEL9lbQAQx985E1l5pupgXmpneFGhEGw5holw440z5BqCmQZzzEgKsUbybh0DgbUQ2mfNsmmazIJnwXpLetNolU%2BECYVpimQP4R8xhLBgJuh02Lp8u0xkvX%2BYx2Ee9ZOVTHlePZaoguSxzVuXTWsEgyK0lGcRZXkST31%2BleUTRc8re93v9DoOf81LhjANQcvEfEtgNFOVnQRyNs8Blsmi2eJ4E49iVlT%2BN4%2FSGh29TaXIDREa9wGYvXr5jszTkLJqyQKAJZTLeE25DiFMW5KtkwlpBdpF3GE%2Bu2%2Bz0ibK7IUtwE0QgA0bwPOPoIUJ63z8XeCem1UCSHxaJKGhFyi6hFIJUwLkLrIHMfFEg2FTBCAApGea2QmASxe1SmClr3ddNV%2BYwl9l%2FXszGPJNEekESxOnFG8x8HV1cFr3LNIvWaVIEcbvDtsBe8wxeAFK4EBlaLiyyBT%2BphCkWWSJfb5U9GJOVzCLLoBbZWB6Esjpk1y5KT9hhHwzAwMwilXEQcwWps1wJUit9GsWTSi4A5KrkvQJL5lboKQhVAl6m1xaEggJVQGxS83e%2BYumU%2FTL%2BDcK0B295Sy%2Fbbc150rV69ntAOGfffMOkS6q8hchr1%2BQ1XMBYndppI7ES7VZXRuihfP%2FLdJpzLG%2B7xgq4zIrK917FSRCvgnBX8lrYOhjIOqYMUjDry6C47AXjvGUq0oYA6vc89scfrISwpZEwhqfsGDCsbpjPri9BOIC3eZw0gnsI3jWlrmlXVVCGlDnPABGiLkt43IvS3jTKeOuBqFwedHRQxh48nUx4zKEzwaFqezBSMXsdxAuel56YFIsgNkDbHYPMn1ZZmk%2FSOd9MogTrhfO8XVG47bAHUCM%2FaLvNidoaIW8o%2FKkFT6erlRULZrtBMQw6yLp9YiKOoef0u5F2q6ncqKkRZndyrR1HYFUqPrZd5Z%2BSM9Sjr3gWpSFGW7xik0sO7Qjatex5qsYrr%2FUYgc8Zwr%2FAxhGcDpEL0areWrKJNVpW0ZjZ7XlbbzyMVkMJ8YxfRxPqG9k9YhVtZROysXcmYLS4%2BY2AMXRsXpr9XTSNKkA6D%2FJ70B4lBY4FOPQ1nxZFACYFXwJ1qLMWZsMh%2BhYSEcpG0qrcZeRxKu0QqkkYZOEPizh%2BCX2czdBQqrYD%2FZkac3BkE1gGFXPMW0d96M3RT7932DaUkIBBGD7XVW89gHEJ9XcgPFsfZSvEbikcGns97ROLrNOcpvm1YrSgZv%2FM7MRL1aCm8fv9fiV81YcQNQF794KNA2xW4VkbL%2BVIxOi0NbDRo7weMtCs26OL%2B6fV%2BIKHe1rENY9DAO7EgnKMbiz8BgwaHvbGweT3Cxqc4ejtX8Pj6TQ8fqCMyziUHVVw76jTbhp9XX0e6FGi13s%2Fiq659P0kxg40RVt93FiPbQKHwHbVca7hihaublNqlhLlz5gIKEun0MIePmLlEsAYOdsweg%2Bj62roLqCFhX98%2B%2FInwPv123wGTcATbGc5jdcRLktjaPi%2FfSjyfrXwgznUWeHZZRSHLcNiNiNjfmAa8yXDn%2B4kjdlFMO%2Buuj4O3W8uIwgMbZogvwzC9AaeqvmN4jLKe6K1aJX022Z2Cvg5iL5qGY6Z4HAjLpunhkZMVhbtE8e0zdvVnL%2F5L%2FBAdZYF8M84rxPl8zhYvflv8DyByncWZVma3WlW6H%2F833v3IDoTwP4AA1nIyx%2Bakz0PQwjDh7MgvLiBIOz9lht100uZ3sqD2RxaAalWh6VzzK%2BaNfkOHlFP0Cv%2BeHuit7%2BCxg8ZvwIwjw%2FYQ2aSldA0koIavCLWo1eg2O8NNaAoiaATHImxiwIN0xeQHGF6IOYYTkWJYd%2BJppuN9AKEdK76KFCHXXnwF1qlK1%2F%2BHeBfDTDjk2j%2BxlCjVAITJGhpPmXWpz%2B%2BfiNaB2hHWxfLDrtYwb81FHl4DuA5WGtltmT1MwxrjeFjDlLlIGnuw7%2BBkXX1LC1QB%2Fjjiz8D8WdogF37V0ADfj369ekXIK%2BHlD6k9CGlH9PzMT5f9TH3ysOUK8K6GlxV%2FIk32qp3yPZZqwuG3GcXSxhdgSnhaYVPA3xatw0kv0ICJxDOgcRZlzgrE2dg4xB1T%2BAcSJyliTO0cQjSK7F9C4eq1VawpODpY8sUrLTntXg2xwGlx4AXou6Dc4ELIO7jzwGi7ZOj9%2FdZF6TRuvQIfurwOSP0hpx1Uw76GIRApa76Zrqn0j0z3Vfpvpk%2BUOkDPX1I9Ic1%2BkOiP6zRHxL9YY3%2BMcEf1%2BCPCf7YhscohHTyoMEYAxMzPJvSldDsqqYahi9mDGzdcuRACu4L7ANhHulNlYMMu8Kg6F2dgCcIkCzIpSvsKAkIo0kiIq8vAqQrsA6EWSSP6k3KIggHa51jaVxJVwrd14T269JIjr7g4RscfYOjX%2BM4KN0s9dSMUWrpS64iz7cNZZSXHIWFnwO03z7%2BHKBe%2B%2FhzgPzgaeAqOYjoLgVIqCHHb8wZNOWIKq57KlomlNXK9PVMz8oc6Jm%2BlTnUM6tYLEf24MiDUynAvt0GVdWcp6D8TVC%2BghpsghooqOEGKMOBslCqapUCSYaRqpSvHA68anDfVYPzrhpcd%2BV03K3VHk%2ByNM8%2FzDPoCU2KVtX2dtgYnsfwPF4bM%2BLYM2QfcaGDqvExNkpUjSPsaiSfsaGjCn8MlNYj%2BYzlS2At2W2DQBx6ZNnT5AL6ZT9k6ezFbPE6CA3BZvA8g%2BfZ2hz%2BQH9qHhWTS5zgE7OPMJ73CZVe86sMNKy1PVUTJ2gUsznWV82GgQYfx%2BkOPL%2BGJ2E7RLW3lH9X8u%2FapoHDAaChSY9UJbxfh59kCnqS5i3EtiHyuYLIo6RF9qmBZDqIi8gKbTpDywHDLhgei2VmAS0JCP1cCiTYga0JF%2FjsozwHgsBEvNpz12Kt0fLh6rID9NsntTCU4B3h%2BY4wYFNoFen%2FWkCHM0vgxW9pgVaLo8lKt6sG2VPy7VcTNZolV7old0abzJu4iXh285o38dqAZMaLjkSGczPKmhi5cErP3IyEh0G5fbTnQel%2F%2BIGAhgok1%2FO7KiBk%2FmqkJVT4E5W%2F1unniJ%2Fr4E0xgAOkXWsTjuOtO9VHlukiHA9ZURfUyrzeZkRXvRtQgP4c4J%2BleFuKt5V4W4m3tXhzdJ%2BpUyhpOVuSU0Xb2Z6cKl7OVuVU8a7nGsNPewpx4yiwYQioW7fDQh4XAS4zvuETo1Gyx6A6IA6Sm9prMVdUCm2uHm6IlHqP5GsOUC%2BB8eXKSMK%2BLMpDf1fy71qMYkX6WPxi2pCeh2OR7x7rQrp8868sIcVAt08D3b4c%2Bg7Koa9HKR6liGEwETQGw2jmmRg5XqdRCENG8MlsZSes7QRtsDnTBpszNdjU3XWniQWjz60tq%2BtdzL8P4P%2BWBvCGJNTLmC1Vx2K2Un2KmVOSWaMks0ZJZhunEjAy5WQCSWJnr4zslZ29NrLXZrZXEfdcxL%2FqNAZVA7p0NpqGWMNunozoi8mIvi2f5FbnhFVMmWHwaJzX8AQpr0bKE6S8GqnGmRChpEPBpimSy6Xq%2B5INuioKaKx%2FoJwuR34CTk4siBkCAeprCWs1TyCgUVT1PDBZY6zJmJTsBDVNkLUafsrwIl5dCScEkRJcabM7mgyrOl9sYcqOIY6sLpHuJRbKSwS%2FNBbtsSWijReloGpGRgqhSjCJrQs6UAOOymJ%2BabEqU0guRbam5saqQKHMZs66yjFmc%2FpSWMxryYkgOWvTJ9sFy3blLQHRL%2BUj0GDVJoTxWhWWFtkM%2FmK13VVORXEFLYJsSU7Ip00%2Bx8xWV%2BLKeBJEvbZOlUoAIZr0%2BnLmAZPRlzJzWROLVDsgVXUCUloxv4dCExmjERUzfGIWbbO5%2BpvNNVTVXguZlTNw8lEYDJubygaDzzRsZYmKZv%2BT7dqq3NQV8VV306db2VdFaKuZBzuY2d%2FFzBB4w3FZY7gN9BlW93RPfr7V%2B5rV%2FS9l9YGIbW%2Br0f1NRtdN2VyGP6dm6GtU%2Fc%2BuGbwvY72%2FT2mzv09p%2F0WmtMuZJ7F7aOQYEXZoUA%2BjQV5UczIt1%2FT2zYjhqHcJfzyai8KR7XqEEpQzS%2FJJ3%2FOydVfBPMhyLrcUXAcZw1MZakcBGDjhN9UGA09OMSNchtt0dwIMQj%2FkOH%2FqHffZQ9E%2Fe%2FWC8svpF9yF9WYxawVZhgPiCCwB1uClIeSRg0WsNtJqG%2FpoOyDu5yPk%2Bsyp2AuOk0SSaoswzHGogrpfjvetYSfyZqflQzUt8F3JYaRyD1SSXajMwNAUujWsMeNB0jK1kShop5dlbodJVXDPi6bUbc22Ok7NuMJOMU8uCpwxJzDQkCWLOAb1%2BqAYpfUEyIkhkUT7rtmFDxXMiP0c%2FOwQcBLEk0UMwN8HBWCtfuLXPFaaaQEQY7rknt%2FQnLKAet%2FXd%2FJOQBB2PKqcR3i4%2FWwKCu1ptaC5aZfwhi68GQ%2BjxWwLpu%2FCjNObLWieC22SRbQbfAtu34XLZ%2FNi1YwY8mkAUefkehlkF1Fyseesxirr36qifVbuF8N9UkDiI6jD9n7Cg11yD%2FFeBwzD9mhTv5Y2gLRXWapR2JOVF9IdR0FOc0mPDsu0Nc%2FS71U6pFU5ORiKq4HfqxcQb75ZuRTp82rKvIWHRf5MO4hxIk7uUe%2BwQN%2Fx3mFyuexFaJWSJL0BVs8gWI1jLCIzxBqiot8rohnPC2jBoHi0ELPrzMUiglutRtU%2BJheNU2R%2BYgpDjaC2lqgrgbPp%2BwybQTN55U5eU3K7LkEQzy9x3YF65soN1JurAR1UFqX5%2BLDQz%2FmQuPeteVKNhtxPRt43qVOOTnwpiGNvE6UaK4lqBpDR8ZBsVVX5Gu2LYDZrYCuydL6rnfgiVNfF2O4YkNVGVbBRu3LsPT7GgOl6ThvvYzvarhpSSBgO%2Buzf2ON%2Bu1ekP0RLHraO2hBNDbgO1MGRgduhbuHIIYLsLpoSmKhktJ11EibeRNFSRENogL91NDFGFaD1tK6s4n2DpVusUsGvUdiWS8qioUhvaWStVpRFE0C9lZG1XlMWDYF6akLH9n9L9ZH29YV2GrwphjihrMjcgJWXOO%2B%2Fwmn1Nc6y39y0nQ6sCMvFa1wxNQjTCoAUHYg4fblRvpUkc1AaB%2BXrKgEPnAI2OEnzDJY5qpVjV2WM1Uk9woztmVU3treQC3pAsrcUtT7uYKC%2Fa8EE0%2BnvSv5d11aQDZJWh90q33rf%2BPO4q66iQdHF3DalPMEljnqYfSnZbY74jey34zbkP8OrgOuNF9Op2mJdSkDjhB%2FiNChaLX845N0j8DXSQGleJIV31OqL81GGo93CPeMXGef5K5694SBN%2BKUFhB7CkdcffIaEr%2Fl1Gi9ot%2FJXk9I7egx2fPTJUhItcXbpRTJNoZTeoAgdBvEWWGKOV%2BKguYTp5TFgtbzDDvMOoXh6ntmTmUbZ7CbI%2BMvgtzT7M89y4Pc6QEWJkEQHQb22OoxZQ42SDagwhvVrqAX0IuugMM4dmNLNgsnTMMTjgXXoIcjUbwIH2PeKpUGkB%2BPJ58HkstVK6FyqfopAB%2B3NF%2FmlhAHvvCnwegJwZLln69Zknc%2BjszROsxfJu9yhmgdm8HwTpRxqfmQfwFujmsV9qF4%2FXPKlO0eZX1p%2BBGRm6MRRk087bIaeGjU67rZDjhlZ3f330lvgxPOOZqKRbq7fUmhv9kZ7IJhhilHNMnRs9hQ3699aVV%2FTKJnCn85lvOZ4l8aLZxtLQKRDauY1SwSFtLJvaKXbohkkmyTETR%2FZRsmwi581SkQlxSERpdsSEakmSYzh9cbKQgNslIuKpUMumU7DxVHD2N4Gr%2BmhS9CkTnUab2vtNzFAP00lW0STZqPNtTP4m22uAW6KBaeAnktAnWKzDXF6tfjCYg467Mglpkxfjdj3aRrjlJTHvlG47wfnbZrfVHm%2BnTeu8oZ2XlDlHdt5WZV3VENca7meX8MN05vELe4hZi%2FmbnkpkzptbpkpHzuUbrFFdoPYlLmOm8Sm7FzX6shUCjcyOfMEpkZ44DdjDmrqQjOCl9O4bDXEfHF3jctaw9JadITdbbKhMpkFc2zDiAtznBpS%2FiSYQ%2FngDWoKEDkT9qcsmjfZGQA%2FpcQ9rW662FjQtBsxNpWzYUM5G9aE0wjuIBvO4TXIRxsAy%2Bstqj7l%2B6Nz9gdTSO8fnYOxvMM2%2B%2FZbdixFMdBa2kUcOAP2%2BDGu3dHqo191fcuOKW0ylLdkILbG58kTNgTWKuX4HHkOkVBXrYjpmOUVIThV6Pu4eNTIteYMmtxscshRhz12OUSmV%2Fp2KoGa3YSsdnAVza3e1VePDV95%2Fb%2BQs5CR5S3P%2B5ruEhPPTf56bHSnw3rGHT1G3Jpc9kMUF1t6glMCaRTXWdjrJV1QaRJDXACRbhbkWgI190SgT%2BS5%2ByIixxZKUWwM6G314YZ60IMKz3MaR%2BbUXNZcB75ZjCfpbBYk4ZbxRK4BNkuGw9FDp2Qix5ZMp7pdRBh7xCtkt6OkJXyzwG5hNwlaEm12rTY5vrl7acyj03CdDnZtcLtbXpUD9Eb2ZJiTSBuHuatGTjhP8shtGZmzAycBSpzWjZweAZCzDSlzduAkQNu4I6DDNljQB5F8p15lznZuEnSzBX0QyXfqVebswEmAbragD3X3wDmGL3N24CRAt1twACINnHqVOdu5SdDNFhyASEOnXmXODpwE6GYLDmE4OXTW7WXOdk4SlCx4bte%2BeiFvqjXK%2B8M21xjl2hzVFu8bShWo7TttV%2BaE83zkmpl2EsLhioB3zhO7cUQkOUMW53LcMw8qZzfxJPidxFM4G8SDKtJ31rNlzo7iCfC7iSdxIIo6rMG9A5z%2FcNqvzNlNQAl%2BJwEVTrP9BqDCwGm%2FMmdH8QT43cSTOBvEg%2Fp74GwEypwdxRPgdxNP4mxy7xDHs077lTm7CSjB7ySgwmm23xBUGDrtV%2BbsKJ4Av5t4EmeDeNC4DJ0tVJmzo3gC%2FG7iSRxwr9UIVPX2ph1hT%2Bu3UZp7LXKrOeBxMM95KO%2BBPeRdukbDwDC3sal%2BZ40PdZHBYPqKndiYZ1KbBfNW64IWjC5wIxoOTTUpjEU8at7vRNDbRnB9R4L%2BZoL1kVLNMNv9VTbdrcrLu%2Fipgm720Z%2BM9p7U1dBqzuiwjSDedhA02LlIEndG6%2Ba%2B3mBKa%2BVX3FBh6UCXSq8c6d65uKXCTvfPnVsnSKbXUXJxVnXEnN0lXK%2Bc0KXeDY3BccNyk8rIiyyIkpG54K1oiCVv7MwicH1Fu7a2J6SpFMJ%2Fu%2BxalosvUmNt%2B7KZwcprv0NaJjcuhxNb9vg0SvgbTsPYNCueInh5n%2Fcp3mNZjXQ7jC%2FndHmfAO7Qelu6KJ7jpW8veZ4HF3TPoUzu7cnbLyV7n17Qcq%2BgLEU5VzemZjxP42u80p3%2FRrej6qvP1SIhkMTdLnjn6lvxat53J%2FZ3EqdexmfpNTcvMdyjBcuMZN%2FriKtftQVU85QECtJCWUm5lkNT7aISaH0O%2BaB6l8tuFgO0J124aAuN23kooyeEAy1xnyB0q8wLeq2j0cYlu9KfYnID5X4XJcXxU9yNLGmHVYjqqmpbyfFS4I7YSX2uXS4MyFkE4xDT%2B64bhpEFEsG50XOxmdzYM9KoiPu%2B4C%2FmzknMg0zFTBlKxqGiKqbKaDzUrpS5LZ%2BUSLU7MneWR9x3qejkZeHDdUzLc%2B%2F76r6a%2Bv%2B9Xq8qm%2BeNWzCwEiqFwAty36b95aBPlzJsKPxGyR%2Bx99gPPD63qwAcQ3vDERvgONdkTPftQj308uwdVo6%2B792ZJc4RulkORszzjzuC93A7c8%2F3vLvzx7HDgO4X8prd8GX%2F94eDZiM7rAxtzPNlgToePr6rfsePG1kd4wrAEbD0af9LvfIbsT36NAk2pklaQC2ySEKq8F3i8esXyQ%2F4%2FYMCWqVpdHF4dldZH%2FsddgTuwOESPRlGw8bZx3E85B3Cw%2BFQy%2FXoH%2F7QUB8fjnB%2Bq4QZNvjCG2IAHhHxQ0W40WSP%2Fbp38iLI0AA8S4L4VRpjSB4%2BvbPuQkYRhn6zAH1dAFHJ1Auh6gpsBKPi4oTU420TQN3jTmi3gQxQ41MjW3tGkDaxe0SToMAdWyFVqTndnNFh43pnaCJbzqBH79ligutEgeyMswM2lo%2Blk6HyLpBY30wZd1hggapdM5pKKJ247Rj40oXB4FhoSsKcUcPyNsjAmIaIUiTVmytb1XwxhwaoamHoVmABRcGGD2ZmtaWc%2BsLlMYsRHXvqqK3ZfbWVul%2Fuhu7bVzmJTpy4zV27Qh5vN9HkoOverRt9RAzYQJoetw6Ftja8BPtB3rMuikhvHMHYHDOqZlIXHuz8ml%2BBMQptP2ntKB1UgeYeuuq8qb3ShIMz3%2F4MiOyc7d6mW%2Fjl1ki9C626K3afUoqcVAqJ7ry4d34kg4LSb21caW9np0vgRYAHptbJm5%2BECDnuq9K49HC4tQ0ERl0GiNStFTq53GrPJHA9MnaQ9tbumOmxpnXOTO%2FXemo02KxtmjcObdohZ%2BwJ%2FKRoO6ui7bj%2FyeF29gXD7Xtz76QWcMauyjuFnMSkLZXkRp2JM%2Bx0Xo2BZwI1hd64gdcOwbej3H%2BlAJSf2IhwB%2BSPL56JT2d8ZpWHOxwHX67a%2B2LmcCle%2B7bI5%2BsOA6T%2FFLqXX0r5TJWPaID2N64ydAu%2FtM6fXtX%2BRd2sfevmM5V%2B5G91NAxN0DRHQ%2Fvtr%2BHsL6v5Fnf%2FbWguXK7mwJu%2BrqLyNe4bqL178z20DOqzc1LCmkUX%2BRiMoeszwVMyNJTFGf6erlPem2JXvCWOGGXVhCeeffGP2%2By%2BuHihtBaOI4DDlnGDPomGswH2NJp33tYb77sT8O9CoI4%2B%2BFz%2BQ53ArcNj8rtVcXqDt8UseDJZddhldHGpveJlMlGxCHnNhzD8pCP24uwebWbHQ01L8hIdeoUU8ZFBSNWg2gLsZFshO3IXIUvNxxUhmkqmbwlWV%2F7QLRhTMVqezS1dh%2F3e8aPD4%2BNDKHz%2BUc8%2FPvIG2pQ8bQWucC3LHHu9R4feI9w45h%2F6vcNHvn90VCETolCfvtaDe%2BblYeA4vfBbkL9P31DE%2B5YeH%2BEKo3Zj7FRdUuDEjXXco6FlJ%2BEWIXPpPlHR2Lo9nc2NUkOo9q2sBGYYVfvgFWJ8i7J4j5xIrUpqBN3HaxtQ14Ev1X7IWrgvmsDm6Q1C4UoYauZtYugPnPw2s8Mf36b6KVLjdRBd5g%2BP7AKmIk6TRriQSLfJb4eWw%2BZBFhV4IF6g%2FRvzDafI7CeWW7rd2PBfJYBkLv4%2BeaLZUSQdnOpBs4GFAP%2FjFPR%2BdHRc50QFjr7GCdH8DfMPD82y6Iss4skw4p%2BANMcC0iq2g3OSGOGU3E2gw3PUQECZTGldij6hROEKf76FQsWigwNDLaKCZ3gj%2BvQrKUFvdQ2%2FTsOb8%2BKn58%2FEF%2FGSWsX68y8fXr97%2Bf1Pz5u7h3bvwuyADLEx2LHz4Gh4oA9SirBx1aiukqGNmDTkIX0bEKPIw1MLiUsu3SAGmpMXfn1tC7dvTtn%2FaQl%2B7A%2FBeAguTpzj5rtxx1nv33fmbk2w1sxBUn2OUOaspVosLgXD0vCRYhyXykXHqSMn0KACPBWf8zMqg%2FvGJgj8r%2Bl%2Bbdki1%2BbLW3ZIKc54UsxRStQSs90nuORLufWeoGhHCZ7gpi4GPjgPlAul58Hkdy7OsRiHjkeuU9DCPpJdW5uoUZdmKQUMs9CNUkeDkTkppTGGgiPeOsZBt5HjoKspQUc%2FIjOqH4OzocX5lZFxaqZRJ%2FzP%2FvjuraXVYDCyUobHO%2BlJx6lH%2BjluW1Z9dmzkOGZtw5unhkfOk8w1HnVrO8%2FtbrD6T3TU1HnIbwPWa3GA1X3gzMZTB3xG1jGjjZ7DEqqNgBxbPppcE1Sh5Agh%2FRjNyHGwpxm%2BPM1SQ6sO29jY1ez8qHYpx0b1bzfaYnhcs0XDKRnXMRuT8YmLjrF33t50vwN%2BNqfvM2%2Ff%2FGfsqNP30l33gEa77SYffgHyYTN5sGKd%2FKatpoJyQJTfB71lD7JxoXOlHtb4cN7A7qq8sYeZn2BpgQnoRIUKpF5139HJbkVBl1K71Y7I1rQaCV7W1kJcRA9REHTqrcr%2BJYugQaWZpJF1j561ikqITWo4yFX6W4T127nKR6BQvXRo3%2BAZYhr7Hncvao0Nxq3edRD27VWl%2B7se3nliFEqx1prxCY%2Bu9WJfw3Ws6Wo89Gbkux4tmDSzMRoYB4Gm5WOFT70FWqqR2HYnrK6OpofVTQyjfB5Ar0LQw%2B7Q2SIv0pl4N9cfGxZfG9gbahr63U0EaxWqcUHOEMPeoSCPfZu7FOTmBSnNDhsUnBOOzW6p0OWKnXK21ur3qlW7DUCrXYDGuwAFuwDhVQ%2B7wGW7AK13gsJbH3ZiWV4zcXKXIFKftjcCSFbHW0JHHUH%2FG4ydxXwXk%2BEdKLvAxeq%2Bgl1csAsg3SiyE%2Bed4mgnKHk7yK76%2FoUi6U%2B4oB7EZ%2BUNXH%2FFePoqSuK%2FXba3RUnIl%2FX9%2FjwU%2BmOH8eE%2B%2B%2FcPH169e%2F38wwe2%2F1DeTD5vVVeSC9W12%2BAw8YKrvU84X994YCAp95PlPRLml6llSrrqlj0xJ57lboTENLciRLfKmVQkgoKQW%2FDUNHIVGUEYPlP73LacdYhwPk1T0%2BKIQGnMcaK49euPYIXStiP2Pz9G4S382j07Y8qiDvBzMOO3v2oMDF%2FRVsEo7JgrdEI6JVvbUlfsj%2FlaGkOIfXWlRYUCeuuqJcF1dIHD5R5EumMnjaQCxUlq%2FLGc9dK1LoPB3EDa3olHpTywaWCgm9%2FFI0wnixmetaiTf%2FbLS6y%2BMC0NQh5WurhO5VDU49dlRGyYspcezcutkgqjvMixMTLUvKTbVuVupNuqupBWKbeqNootJq7ktRWgfZhmLyCOvGH%2FqDoEX2Qre478vZDgvEHdTN%2BZCY5RbLR9U2Km067om%2Bc6t5gARsU0Uchxw7s1pY8FhtJFbi%2BBcO8w8TyTB4PcjZhRwDcVXpzx%2FE1ZW1sMpxM2VmF0Xf5b4ULVX%2FXfa1qWy3BNRB9b%2B3nrBZ0g9%2BTF9qz1ur1n2N8hiZw9M0SxV7TJnQK3Sa1aj8DdoAtHC0xzc7GRs2m7QzN8fQtZM2y5%2Fchs3wSMVhPKjsC3eQE9iCdW6IjpTmyBVT0zgZF8wZ%2FHfCbGegSwJ5gYSD3qLgmXsb2Mx0EB%2FRz8UEeeZt15GiV45pdWN3nYnYXssnvE5nF3wOZZ12cF9LO62OETTxdZsOoe9vtsCoLko3RRxFHCu0macJqc6Hosn40IdJnjYyw%2Btww0xxcC2%2Bv39xxiRvCSvQVEFFNODO%2FZRSgSfVDuhIlyEWhnquUBqGkAoV5C4KyN%2BP6MPH8L%2FcEpnlVIJvpnDehTDGWHV2yUl%2F4dCYod8To2X8UFfHqKuPpPT8nMV7x10Hi38pfm68p8XStos775TQbyqzSP5HHO99V6o%2BhNAEByoSK%2BDhDlZ0FMM9kOM0azxXOKbUdW%2FjSO0xsevk2lGwyQSZrxnvASlIuqKgyyixzq0uRarw0NNqJkUbDOoQjhehoi0TlixNNKUnk4%2BBJKacwlO%2ByVt0SP3LhN%2Fb6uqtFxrZnoZ7r%2BWBLp2esFverOtHaHbYFVd6q1qwVey%2BTaN5ut5uxWb3rlB3c2xrPxpR%2BC7NpF4QmeeTQ%2FTmEUFA25FApbK1FMXuGdx1Y0KAgVjC%2Bh%2F1SH0M6g4unR6ugpvOUtvRCap07Jc3o2Hj49x8%2FnSovrA1bKa9dkNSzMWJ3aaSOxesdC6KDc%2Bst0mtN89a5hAB6xAu59bdtlFV%2B7ktci0sFA23%2BA5hRfOBjnLVOJNu4n6Xl4BWoJYUsiYewegOF3w9ql2eyqSmz8sumfNILTtpWuKbGhVVWJGNLlPAMkiLIs4XEvSnvTKOOtPVFX4OC9AmVsz1hG2BupGKXNcHlp%2FfqKQ7tjkCnXHDaTKMFoEaeicNthe1Br7jXMqBvhbSj7qYVMp6uVi9ri3DZjous7yNpe1rGXI9yHwQ0tjbC6k0vt2AFrUlGp21N03%2BtdjzNxsBsce003dNIJa%2FHWcoyNZOtiN4htszaf6Bd1czkuycV%2BDHMALWOlrNM3dncMr8sONDje5qP38x30jEIrzU9dW32I%2B7QoYOCJ3gDqUMNoKM298Lv1q3fqWTuBtA3hbjC5ffYIzwnTT7%2BnbVWTQPVRvTbRVx51klMGjd2OGlmnGU2zy5AU31I5M3vB6gsoHearOyjKvk8Dgh6bdYdD82l3tPEqh70SYs8cEzd0yQHuxIJydPIt%2FAaMvFjBuHscTH6%2FoDEKsvnX8Hg6DY%2FLz7VV49n7d9ZpN42%2Brj57J3a9Y%2BI4psVirLicE0nOHrgWUG4zNR0bEGDmd37MGSKI7ISm5ZuGpmF0XY1LBbSw249vX%2F4EeL9%2Bm8%2BCOH6CLRenweikHNt%2F%2B1Dk%2FWrhB3OoS8KzyygOW4atbEbG4Hca8yXDn%2B4kjdlFMO%2BuYIQL49KbywjcrY2B88sgTG%2FgSbjmoi%2FPKGK93Sqpt%2FXMFHBzEHtlXk0zwb54XDYTDY2JMfU2%2FYd79%2B7l%2FwQ%2FrxdQJ%2BID7sp781%2Fh4RfarGpB%2FDM8PIvyeRys3vwjPPN89v8BSeiR3Q%3D%3D
```

**Ничего запускать и исполнять не нужно**. Группа содержит уже выходной бандл Javascript, и вы сразу же увидите DOM элемент со всей обвязкой

![](https://habrastorage.org/getpro/habr/upload_files/582/b6b/385/582b6b385d8ceaa21713759383f05098.png)

Затем подпишемся на события 1 раз в активной сессии

```
EventHandler["JoyCon", {
  "zr" -> (FrontSubmit[FrontSlidesSelected["navigateNext", 1]]&),
  "y" -> (FrontSubmit[FrontSlidesSelected["navigatePrev", 1]]&)
}];
```

Остается запустить ячейку со слайдами

![Первый большой шаг в освоении JoyCon](https://habrastorage.org/getpro/habr/upload_files/4da/858/fe1/4da858fe11470e70bd7af14444c9ab92.gif "Первый большой шаг в освоении JoyCon")

Первый большой шаг в освоении JoyCon

### Аналоговый стик

Стик теоретически позволяет управлять двумя ползунками одновременно. Для DPG Spring Meetings у меня как раз была идея живой демонстрации одного интересного эффекта **м𝒶𝑔𝒾ч𝑒𝓈к𝒾𝑒 𝓈𝓁𝓸𝓋𝒶 𝒾𝓏 𝑜𝒷𝓁𝒶𝓈𝓉𝒾 𝒻𝒾𝓏𝒾𝓀𝒾**. Я считаю, что некоторые вещи гораздо эффектнее и доходчивее показывать вживую _на сцене_.

Приведу сокращённый код интерактивного виджета:

```
FaradayWidget := ManipulatePlot[

Abs[(E^(I w (-1 + Sqrt[1 + (f/((-I g - w) w + (d - w0)^2))])) + E^(I w (-1 + Sqrt[1 + (f/((-I g - w) w + (d + w0)^2))]))) /. {g -> 0.694, w0 -> 50.0}]

, {w, 20, 80}, {{f,2},0,100,1}, {{d,0},0,10,1}
, FrameLabel->{"wavenumber", "transmission"}
, Frame->True
];

FaradayWidget
```

> Интерактивная онлайн-версия этого [виджета лежит здесь](https://jerryi.github.io/wljs-demo/THzFaraday.html)

![Демо](https://habrastorage.org/getpro/habr/upload_files/55e/b51/c68/55eb51c68d45b9dbf4858e3a379fb8bb.gif "Демо")

Демо

Чтобы встроить его на слайд, нужно вставить туда его символ как тег (aka JSX)

```
.slide

# Faraday Widget
Here it is in action

<FaradayWidget/>
```

Осталось привязать его к нашему стику

![Наш аналоговый стик](https://habrastorage.org/getpro/habr/upload_files/7f6/005/296/7f600529687092d42bef37933a5336a6.png "Наш аналоговый стик")

Наш аналоговый стик

Для начала проведем простой тест и привяжем его положение к диску на экране

```
pos = {0.,0.};
EventHandler["JoyCon", {"Stick" -> ((pos = #)&)}];

Graphics[{
  Circle[{0,0}, 2.],
  Disk[pos // Offload, 0.1]
}]
```

![Тест run](https://habrastorage.org/getpro/habr/upload_files/ae9/c77/afe/ae9c77afeae80c74013d5d63e5b04af7.gif "Тест run")

Тест run

Очевидно, что движения выходят уж слишком резкие. Да и физически двигать его на малое расстояние непросто. Решением будет интеграция_!_

```
EventHandler["JoyCon", {"Stick" -> ((pos += 0.1 #)&)}];
```

![Интеграция движения](https://habrastorage.org/getpro/habr/upload_files/b88/03f/c6e/b8803fc6e73b44c81d523b3f0a185ea0.gif "Интеграция движения")

Интеграция движения

Теперь привяжем переменную `pos` к ползункам нашего виджета

```
FaradayWidget := ManipulatePlot[

Abs[(E^(I w (-1 + Sqrt[1 + (f/((-I g - w) w + (d - w0)^2))])) + E^(I w (-1 + Sqrt[1 + (f/((-I g - w) w + (d + w0)^2))]))) /. {g -> 0.694, w0 -> 50.0}]

, {w, 20, 80}, {{f,2},0,100,1}, {{d,0},0,10,1}
, FrameLabel->{"wavenumber", "transmission"}
, Frame->True
, "TrackedExpression" -> Offload[5 pos] (* <-- *)
];
```

Вот как оно выглядит вживую на слайде

![Демо](https://habrastorage.org/getpro/habr/upload_files/e91/3d3/453/e913d3453286379c21740e81c48c67d0.gif "Демо")

Демо

А вот в реальной презентации DPG

![Реальное демо](https://habrastorage.org/getpro/habr/upload_files/8ac/36f/c59/8ac36fc59828c16b144c9993a9df487a.gif "Реальное демо")

Реальное демо

## Минутка отдыха

В прошлом году DPG проходила в Берлине, а в этом — в Регенсбурге, который примерно в 23 раза меньше по населению и в 10 раз по площади. Однако уютные земли Баварии мне всегда были ближе по душе

![Маленький, милый и уютный городок на слиянии рек Дуная и Регена](https://habrastorage.org/getpro/habr/upload_files/bee/652/a58/bee652a58bb42109d8933dc96cd123b0.jpg "Маленький, милый и уютный городок на слиянии рек Дуная и Регена")

Маленький, милый и уютный городок на слиянии рек Дуная и Регена

А это - университет. Кондовый стиль 60-х 💪🏻

![Место, где проходила DPG](https://habrastorage.org/getpro/habr/upload_files/87e/a6b/fae/87ea6bfae939f075298032852eb76e43.jpg "Место, где проходила DPG")

Место, где проходила DPG

Новое изобретение чашка - "Cъешь меня за 40 минут"

![Vegan, healthy, eco-friendly. НО только 40 минут](https://habrastorage.org/getpro/habr/upload_files/9aa/ab5/967/9aaab59674d6bb8950b8697ac5eff7da.jpg "Vegan, healthy, eco-friendly. НО только 40 минут")

Vegan, healthy, eco-friendly. НО только 40 минут

Бонусом получаем привкус вафли в любом напитке! Только не вздумайте грызть её, пока в ней горячий чай.

Больше фотографий мне сделать не удалось, так как я заболел в первый день и уехал домой в Аугсбург. И в целом провести 6 дней на конференции - это довольно непросто

![](https://habrastorage.org/getpro/habr/upload_files/bc7/186/92f/bc718692fe51cab9d6fcdae17c9ddd92.jpg)

Возвращаемся к нашим баранам.

## IMU или связка гироскоп-акселерометр

Для того чтобы их использовать, нужно считать соответствующие поля из объекта `details`, а именно

- `x,y,z` для акселерометра
    
- `rps` (**radians per second**) для гироскопа
    

Скрытый текст

```
//..
//....
const buttonStates = {
  a: false, b: false, home: false, plus: false, r: false, sl: false, sr: false,
  x: false, y: false, zr: false
};

const joystickPosition = [0.0, 0.0];
let restingJoystick = [0.0, 0.0];
let isCalibrated = false;
let imuEnabled = false;

// Enable IMU mode if allowed
core.JoyConIMU = async (args, env) => {
  imuEnabled = await interpretate(args[0], env);
};

// Function to handle Joy-Con input
function handleJoyConInput(detail) {
  if (!isCalibrated) {
    restingJoystick = [Number(detail.analogStickRight.horizontal), Number(detail.analogStickRight.vertical)];
    isCalibrated = true;
    return;
  }

  const currentTime = performance.now();
  if (currentTime - lastUpdateTime > 50) { // Update every 50ms
    lastUpdateTime = currentTime;

    let buttonPressed = false;
    let joystickMoved = false;

    for (const key of Object.keys(buttonStates)) {
      if (!buttonStates[key] && detail.buttonStatus[key]) buttonPressed = true;
      buttonStates[key] = detail.buttonStatus[key];
    }

    const verticalOffset = Number(detail.analogStickRight.vertical) - restingJoystick[1];
    const horizontalOffset = Number(detail.analogStickRight.horizontal) - restingJoystick[0];

    if (Math.abs(verticalOffset) > 0.1 || Math.abs(horizontalOffset) > 0.1) {
      joystickMoved = true;
    }

    joystickPosition[0] = horizontalOffset;
    joystickPosition[1] = -verticalOffset;

    if (imuEnabled) {
      server.kernel.io.fire('JoyCon', {
        'Accelerometer': Object.values(detail.actualAccelerometer),
        'Gyroscope': Object.values(detail.actualGyroscope.dps)
      }, 'IMU');
    }

    if (buttonPressed) {
      for (const key of Object.keys(buttonStates)) {
        if (buttonStates[key]) {
          server.kernel.io.fire('JoyCon', true, key);
          break;
        }
      }
    }

    if (joystickMoved) {
      server.kernel.io.fire('JoyCon', joystickPosition, 'Stick');
    }
  }
}
//....
//..
```

Так как IMU нам нужен не всегда, в скрипт внедрена булева переменная и управляющая функция `JoyConIMU[True | False]`, позволяющая включать или отключать измерения IMU.

JoyCon, как и большинство других устройств с IMU (некоторые смартфоны, часы, но точно не шлемы виртуальной реальности и квадрокоптеры), включает в себя

- **3х осевой гироскоп** - возвращает нам угловую скорость в **рад/сек** вокруг всех трех осей ![(\omega_x, \omega_y, \omega_z)](https://habrastorage.org/getpro/habr/upload_files/01b/747/ee7/01b747ee7b5472190d887d225ee24520.svg);
    
- **3х осевой акселерометр** - возвращает 1 единственный вектор ускорения ![(a_x, a_y, a_z)](https://habrastorage.org/getpro/habr/upload_files/aac/f18/bcd/aacf18bcdc2562d84dcf19dc47ee4e72.svg).
    

Вопрос: почему нельзя обойтись одним лишь гироскопом или акселерометром? А давайте попробуем выведем все оба. Сначала разрешим использование IMU

```
JoyConIMU[True] // FrontSubmit;
```

Теперь обозначим вспомогательные функции и переменные

```
prevTime = AbsoluteTime[];
angles = {0,0,0};
acceleration = {0,0,-1};

process[imu_] := With[{time = AbsoluteTime[]},
  With[{dt = time - prevTime},
    angles = (angles + {-1,1,1} imu["Gyroscope"][[{3,1,2}]] dt);
    acceleration = imu["Accelerometer"];
    prevTime = time;
  ]
]
```

Что здесь происходит:

- Вектор ускорения с акселерометра мы просто записываем в `acceleration`
    
- Данные с гироскопа мы обрабатываем так
    
    - меняем порядок угловых скоростей (особенность JoyCon) и направления
        
    - интегрируем по времени и получаем из угловых скоростей сами углы
        

Итак, на выходе мы имеем

1. **Три угла**, задающих ориентацию JoyCon `angles`
    
2. **Один вектор ускорения** (в состоянии покоя - направление гравитации) `acceleration`
    

Те три угла еще удобно записать в виде матрицы (тензора)

```
RollPitchYawMatrix[{\[Alpha], \[Beta], \[Gamma]}] // MatrixForm 
```

![Тензор поворота](https://habrastorage.org/getpro/habr/upload_files/39d/53c/80a/39d53c80a102bdcd8ff017da1f4f519e.png "Тензор поворота")

Тензор поворота

Тогда, применяя эту матрицу на любой трехмерный объект, мы можем сориентировать его по этим углам. Физически на JoyCon это выглядит так

![Физический смысл переменных.](https://habrastorage.org/getpro/habr/upload_files/e09/ca0/b03/e09ca0b03dbb25bc13514010e9c830fe.png "Физический смысл переменных.")

Физический смысл переменных.

Важно заметить, что, поскольку мы измеряем первую производную, то изначальная ориентация IMU оказывается неизвестна. В этом случае мы вручную задаём начальное положение `angles = {0., 0., 0}`.

Давайте посмотрим на данные в реальном времени:

```
EventHandler["JoyCon", {
  "IMU" -> Function[val, 
    process[val];
  ]
}];

angles = {0,0,0}; (* калибровка *)

Refresh[acceleration, 0.25] (* динамически обновляем *)
Refresh[angles, 0.25] (* динамически обновляем *)
```

![Динамический вывод](https://habrastorage.org/getpro/habr/upload_files/633/235/46b/63323546bac1938e9b4a73a6d54f6b8b.gif "Динамический вывод")

Динамический вывод

Не очень-то наглядно. Попробуем нарисовать векторы

```
axis = Table[{{0.,0.,0.}, Table[1.0 KroneckerDelta[i, j], {i,3}]}, {j,3}];

EventHandler["JoyCon", {
  "IMU" -> Function[val, 
    process[val];
    axis[[1]] = {{0.,0.,0.}, RollPitchYawMatrix[angles].{0,1.0,0.0}};
    axis[[2]] = {{0.,0.,0.}, RollPitchYawMatrix[angles].{-1.0,0.0,0}};
    axis[[3]] = {{0.,0.,0.}, -Normalize[acceleration][[{2,1,3}]]};
    axis = axis;
  ]
}];
```

А теперь выведем их на экран в виде конусов, а также добавим кнопку для сброса углов. По цветам мы будем различать:

1. **Синий и красный** - данные гироскопа
    
2. **Зеленый** - акселерометр
    

```
{
  {Opacity[0.2], Sphere[]}, 
  Red, Tube[axis[[1]]//Offload, {0.2, 0.01}],
  Blue, Tube[axis[[2]]//Offload, {0.2, 0.01}],
  Green, Tube[axis[[3]]//Offload, {0.2, 0.01}]
} // Graphics3D

EventHandler[InputButton["Reset"], Function[Null, angles *= .0]]
```

![Демо](https://habrastorage.org/getpro/habr/upload_files/3fa/4b8/ad4/3fa4b8ad40ffd28604a0e9ab91268601.gif "Демо")

Демо

Можно заметить, что зелёный вектор всегда направлен в “нужную” сторону, в то время как синий и красный векторы, ориентированные по углам гироскопа, накапливают ошибки. Это особенно заметно при быстрых движениях и иногда называется **дрифт**-ом.

Есть множество способов борьбы с этой проблемой. Общая идея заключается в корректировке этих углов с использованием данных с акселерометра (зелёный вектор). Ведь акселерометр точно знает, где находится положение вниз!

> - до тех пор, пока вы не придадите горизонтальное ускорение вашему контроллеру, и тогда гравитационное ускорение сложится с вашим, и вектор убежит вбок.

Даже если нам удастся это сделать, очевидно, что угол, совпадающий с вектором ускорения, невозможно скорректировать. Видимо, для приложений JoyCon это не так критично, как, скажем, для квадрокоптеров или шлемов виртуальной реальности. В последних добавляют магнитометр, который позволяет избавиться от этой неопределенности.

Есть отличное видео от [**James Lambert**](https://www.youtube.com/@james.lambert), поясняющее эти проблемы, а также варианты их решений, где [**он приводит подробный пример с** Oculus DK1](https://www.youtube.com/watch?v=ha3fDU-1wHk).

### На кой нам это в презентации?

Этим вопросом я задался, обнаружив, как глубока кроличья нора. В моем докладе на сессии магнетизма был ровно один слайд, где идея с IMU имела хоть какой-то смысл

![Слайд номер 3](https://habrastorage.org/getpro/habr/upload_files/92a/e61/c95/92ae61c95ae22356571c8929cd1ee995.png "Слайд номер 3")

Слайд номер 3

Видите кристаллическую структуру? Для неё действительно сложно найти “хороший” угол камеры, почему бы не вращать её прямо на сцене! Для этого нам не нужны все три угла и ускорение, а достаточно будет взять только один.

Итак, выкидываем акселерометр и берём только гироскоп

```
FrontSubmit[JoyConIMU[True]];
timestamp = AbsoluteTime[];
angle = 0.;
rotation = RotationMatrix[angle, {0,0,1.0}];

EventHandler["JoyCon", {
  "IMU" -> Function[val, 
     With[{angularSpeed = val["Gyroscope"][[1]], time = AbsoluteTime[], oldAngle = angle},
       angle += (time - timestamp) angularSpeed;
       timestamp = time;
     ];

     rotation = RotationMatrix[angle, {0,0,1.0}];
  ]
}];
```

Остаётся применить тензор поворота `rotation` на нашу трёхмерную структуру. Так как в этом кристалле много ионов, и они ещё и цветные, я сжал их в base64, чтобы поместить на Хабр

Скрытый текст

```
CrystalRawStructure = "1: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" // Uncompress;
```

```
CrystalStructure = Graphics3D[
  GeometricTransformation[CrystalRawStructure, rotation // Offload]
, ViewPoint->3.5{1.0,0.5,0.5}
, ImageSize->{550,600}
];
```

Встроим её на наш слайд

```
.slide

# Slide

Here is my crystal structure!

<CrystalStructure/>
```

![Демо](https://habrastorage.org/getpro/habr/upload_files/c29/98a/b6f/c2998ab6f94228b57627829a613b745b.gif "Демо")

Демо

Чтобы было совсем удобно, неплохо было бы подписываться на IMU только, когда слайд активен, и отписываться, когда мы с него уходим. Это несложно сделать, так как RevealJS _стучит_ ядру на события, связанные с изменениями состояния слайда. Оформим это в виде компонента на языке WLX:

Скрытый текст

```
.wlx

InteractiveCrystalStructure := Module[{rotation = RotationMatrix[1Degree, {0,0,1.0}], id = CreateUUID[], timestamp = AbsoluteTime[], angle = 0., CrystalStructure},
  
  CrystalStructure = Graphics3D[
    GeometricTransformation[CrystalRawStructure, rotation // Offload]
    , ViewPoint->3.5{1.0,0.5,0.5}
    , ImageSize->{550,600}
  ];

  EventHandler[id, {
    "Slide" -> Function[Null,
      FrontSubmit[JoyConIMU[True]];
      EventHandler["JoyCon", {
        "IMU" -> Function[val, 
          With[{angularSpeed = val["Gyroscope"][[1]], time = AbsoluteTime[], oldAngle = angle},
            angle += (time - timestamp) angularSpeed;
            timestamp = time;
          ];

          rotation = RotationMatrix[angle, {0,0,1.0}];
        ]
      }];
    ],

    ("Destroy" | "Left")   -> Function[Null,
      FrontSubmit[JoyConIMU[False]];
    ]
  }];

<div>
    <CrystalStructure/>
    <SlideEventListener Id={id}/>
</div>

]
```

Поместив этот код на любой слайд, мы получим то, что хотим, не загрязняя глобальное пространство и не путаясь в ногах у других обработчиков. Таким образом, управление подпиской на IMU будет локализовано для конкретного слайда, и при его смене мы будем корректно включать и выключать обработку данных, не влияя на остальные слайды и их обработку

```
.slide

# Before

---

# Slide

Here is my crystal structure!

<InteractiveCrystalStructure/>

---

# After
```

А это реальные слайды с _DPG2025_

![Работает!](https://habrastorage.org/getpro/habr/upload_files/256/2b2/c5c/2562b2c5c4dfb4149161818f643c1fb1.gif "Работает!")

Работает!

_Youtube - почти_ **_полная версия презентации_**

### Финальный код и блокнот

Собранный код ячейки управления контроллером приведён под спойлером. Если вставить его в пустую ячейку, то получим работающий виджет для подключения JoyCon

Скрытый текст

```
jsfc4uri1%3AeJztfWtz28aWoGtmdqdq99NU7Q9oa3ZiUiJpAqRkmYqccWTnxlNx4vXjfvGqHJBoSkhAgAJAiaSj%2FRf7af%2FsnnO6G%2BhuNEjKj3vvVN1UTAHd531Ovx%2B4P05fT%2F%2Fh3r17%2BT%2FBz09RXkz%2FEd%2F%2BO%2Fw8zfN0EgVFlCYVyOtFzN%2Fgw7OgCN78v3%2B5d6%2FH89n%2F7nt%2BNJunWcE%2BskmaJHxS%2FEe6OkuTjnrloUjI2S2bZumMPfgtXXUhs3vDx5dR%2BOAEieC%2Fhw%2FZWcaDgrMgCVlerGLOikuuCIE4bLwoijRBYEjMC5X1PSWzUxamk8WMJ0VvQoSexxzfWg8E3oP2iUStkHqTOMjzn4MZB%2FQHGY9B72vgucjyNOvO0ygpeMaydJGEPOzOQnbZPWLzuDtg86zrs4Ivi27Mp4V4usiCVfew32dTECQfpYsijhLeTdKEsyxKLroey2cjAl3m%2BBjzIMT0Iza%2BENhev%2F%2FAIWYEL9lbQAQx985E1l5pupgXmpneFGhEGw5holw440z5BqCmQZzzEgKsUbybh0DgbUQ2mfNsmmazIJnwXpLetNolU%2BECYVpimQP4R8xhLBgJuh02Lp8u0xkvX%2BYx2Ee9ZOVTHlePZaoguSxzVuXTWsEgyK0lGcRZXkST31%2BleUTRc8re93v9DoOf81LhjANQcvEfEtgNFOVnQRyNs8Blsmi2eJ4E49iVlT%2BN4%2FSGh29TaXIDREa9wGYvXr5jszTkLJqyQKAJZTLeE25DiFMW5KtkwlpBdpF3GE%2Bu2%2Bz0ibK7IUtwE0QgA0bwPOPoIUJ63z8XeCem1UCSHxaJKGhFyi6hFIJUwLkLrIHMfFEg2FTBCAApGea2QmASxe1SmClr3ddNV%2BYwl9l%2FXszGPJNEekESxOnFG8x8HV1cFr3LNIvWaVIEcbvDtsBe8wxeAFK4EBlaLiyyBT%2BphCkWWSJfb5U9GJOVzCLLoBbZWB6Esjpk1y5KT9hhHwzAwMwilXEQcwWps1wJUit9GsWTSi4A5KrkvQJL5lboKQhVAl6m1xaEggJVQGxS83e%2BYumU%2FTL%2BDcK0B295Sy%2Fbbc150rV69ntAOGfffMOkS6q8hchr1%2BQ1XMBYndppI7ES7VZXRuihfP%2FLdJpzLG%2B7xgq4zIrK917FSRCvgnBX8lrYOhjIOqYMUjDry6C47AXjvGUq0oYA6vc89scfrISwpZEwhqfsGDCsbpjPri9BOIC3eZw0gnsI3jWlrmlXVVCGlDnPABGiLkt43IvS3jTKeOuBqFwedHRQxh48nUx4zKEzwaFqezBSMXsdxAuel56YFIsgNkDbHYPMn1ZZmk%2FSOd9MogTrhfO8XVG47bAHUCM%2FaLvNidoaIW8o%2FKkFT6erlRULZrtBMQw6yLp9YiKOoef0u5F2q6ncqKkRZndyrR1HYFUqPrZd5Z%2BSM9Sjr3gWpSFGW7xik0sO7Qjatex5qsYrr%2FUYgc8Zwr%2FAxhGcDpEL0areWrKJNVpW0ZjZ7XlbbzyMVkMJ8YxfRxPqG9k9YhVtZROysXcmYLS4%2BY2AMXRsXpr9XTSNKkA6D%2FJ70B4lBY4FOPQ1nxZFACYFXwJ1qLMWZsMh%2BhYSEcpG0qrcZeRxKu0QqkkYZOEPizh%2BCX2czdBQqrYD%2FZkac3BkE1gGFXPMW0d96M3RT7932DaUkIBBGD7XVW89gHEJ9XcgPFsfZSvEbikcGns97ROLrNOcpvm1YrSgZv%2FM7MRL1aCm8fv9fiV81YcQNQF794KNA2xW4VkbL%2BVIxOi0NbDRo7weMtCs26OL%2B6fV%2BIKHe1rENY9DAO7EgnKMbiz8BgwaHvbGweT3Cxqc4ejtX8Pj6TQ8fqCMyziUHVVw76jTbhp9XX0e6FGi13s%2Fiq659P0kxg40RVt93FiPbQKHwHbVca7hihaublNqlhLlz5gIKEun0MIePmLlEsAYOdsweg%2Bj62roLqCFhX98%2B%2FInwPv123wGTcATbGc5jdcRLktjaPi%2FfSjyfrXwgznUWeHZZRSHLcNiNiNjfmAa8yXDn%2B4kjdlFMO%2Buuj4O3W8uIwgMbZogvwzC9AaeqvmN4jLKe6K1aJX022Z2Cvg5iL5qGY6Z4HAjLpunhkZMVhbtE8e0zdvVnL%2F5L%2FBAdZYF8M84rxPl8zhYvflv8DyByncWZVma3WlW6H%2F833v3IDoTwP4AA1nIyx%2Bakz0PQwjDh7MgvLiBIOz9lht100uZ3sqD2RxaAalWh6VzzK%2BaNfkOHlFP0Cv%2BeHuit7%2BCxg8ZvwIwjw%2FYQ2aSldA0koIavCLWo1eg2O8NNaAoiaATHImxiwIN0xeQHGF6IOYYTkWJYd%2BJppuN9AKEdK76KFCHXXnwF1qlK1%2F%2BHeBfDTDjk2j%2BxlCjVAITJGhpPmXWpz%2B%2BfiNaB2hHWxfLDrtYwb81FHl4DuA5WGtltmT1MwxrjeFjDlLlIGnuw7%2BBkXX1LC1QB%2Fjjiz8D8WdogF37V0ADfj369ekXIK%2BHlD6k9CGlH9PzMT5f9TH3ysOUK8K6GlxV%2FIk32qp3yPZZqwuG3GcXSxhdgSnhaYVPA3xatw0kv0ICJxDOgcRZlzgrE2dg4xB1T%2BAcSJyliTO0cQjSK7F9C4eq1VawpODpY8sUrLTntXg2xwGlx4AXou6Dc4ELIO7jzwGi7ZOj9%2FdZF6TRuvQIfurwOSP0hpx1Uw76GIRApa76Zrqn0j0z3Vfpvpk%2BUOkDPX1I9Ic1%2BkOiP6zRHxL9YY3%2BMcEf1%2BCPCf7YhscohHTyoMEYAxMzPJvSldDsqqYahi9mDGzdcuRACu4L7ANhHulNlYMMu8Kg6F2dgCcIkCzIpSvsKAkIo0kiIq8vAqQrsA6EWSSP6k3KIggHa51jaVxJVwrd14T269JIjr7g4RscfYOjX%2BM4KN0s9dSMUWrpS64iz7cNZZSXHIWFnwO03z7%2BHKBe%2B%2FhzgPzgaeAqOYjoLgVIqCHHb8wZNOWIKq57KlomlNXK9PVMz8oc6Jm%2BlTnUM6tYLEf24MiDUynAvt0GVdWcp6D8TVC%2BghpsghooqOEGKMOBslCqapUCSYaRqpSvHA68anDfVYPzrhpcd%2BV03K3VHk%2ByNM8%2FzDPoCU2KVtX2dtgYnsfwPF4bM%2BLYM2QfcaGDqvExNkpUjSPsaiSfsaGjCn8MlNYj%2BYzlS2At2W2DQBx6ZNnT5AL6ZT9k6ezFbPE6CA3BZvA8g%2BfZ2hz%2BQH9qHhWTS5zgE7OPMJ73CZVe86sMNKy1PVUTJ2gUsznWV82GgQYfx%2BkOPL%2BGJ2E7RLW3lH9X8u%2FapoHDAaChSY9UJbxfh59kCnqS5i3EtiHyuYLIo6RF9qmBZDqIi8gKbTpDywHDLhgei2VmAS0JCP1cCiTYga0JF%2FjsozwHgsBEvNpz12Kt0fLh6rID9NsntTCU4B3h%2BY4wYFNoFen%2FWkCHM0vgxW9pgVaLo8lKt6sG2VPy7VcTNZolV7old0abzJu4iXh285o38dqAZMaLjkSGczPKmhi5cErP3IyEh0G5fbTnQel%2F%2BIGAhgok1%2FO7KiBk%2FmqkJVT4E5W%2F1unniJ%2Fr4E0xgAOkXWsTjuOtO9VHlukiHA9ZURfUyrzeZkRXvRtQgP4c4J%2BleFuKt5V4W4m3tXhzdJ%2BpUyhpOVuSU0Xb2Z6cKl7OVuVU8a7nGsNPewpx4yiwYQioW7fDQh4XAS4zvuETo1Gyx6A6IA6Sm9prMVdUCm2uHm6IlHqP5GsOUC%2BB8eXKSMK%2BLMpDf1fy71qMYkX6WPxi2pCeh2OR7x7rQrp8868sIcVAt08D3b4c%2Bg7Koa9HKR6liGEwETQGw2jmmRg5XqdRCENG8MlsZSes7QRtsDnTBpszNdjU3XWniQWjz60tq%2BtdzL8P4P%2BWBvCGJNTLmC1Vx2K2Un2KmVOSWaMks0ZJZhunEjAy5WQCSWJnr4zslZ29NrLXZrZXEfdcxL%2FqNAZVA7p0NpqGWMNunozoi8mIvi2f5FbnhFVMmWHwaJzX8AQpr0bKE6S8GqnGmRChpEPBpimSy6Xq%2B5INuioKaKx%2FoJwuR34CTk4siBkCAeprCWs1TyCgUVT1PDBZY6zJmJTsBDVNkLUafsrwIl5dCScEkRJcabM7mgyrOl9sYcqOIY6sLpHuJRbKSwS%2FNBbtsSWijReloGpGRgqhSjCJrQs6UAOOymJ%2BabEqU0guRbam5saqQKHMZs66yjFmc%2FpSWMxryYkgOWvTJ9sFy3blLQHRL%2BUj0GDVJoTxWhWWFtkM%2FmK13VVORXEFLYJsSU7Ip00%2Bx8xWV%2BLKeBJEvbZOlUoAIZr0%2BnLmAZPRlzJzWROLVDsgVXUCUloxv4dCExmjERUzfGIWbbO5%2BpvNNVTVXguZlTNw8lEYDJubygaDzzRsZYmKZv%2BT7dqq3NQV8VV306db2VdFaKuZBzuY2d%2FFzBB4w3FZY7gN9BlW93RPfr7V%2B5rV%2FS9l9YGIbW%2Br0f1NRtdN2VyGP6dm6GtU%2Fc%2BuGbwvY72%2FT2mzv09p%2F0WmtMuZJ7F7aOQYEXZoUA%2BjQV5UczIt1%2FT2zYjhqHcJfzyai8KR7XqEEpQzS%2FJJ3%2FOydVfBPMhyLrcUXAcZw1MZakcBGDjhN9UGA09OMSNchtt0dwIMQj%2FkOH%2FqHffZQ9E%2Fe%2FWC8svpF9yF9WYxawVZhgPiCCwB1uClIeSRg0WsNtJqG%2FpoOyDu5yPk%2Bsyp2AuOk0SSaoswzHGogrpfjvetYSfyZqflQzUt8F3JYaRyD1SSXajMwNAUujWsMeNB0jK1kShop5dlbodJVXDPi6bUbc22Ok7NuMJOMU8uCpwxJzDQkCWLOAb1%2BqAYpfUEyIkhkUT7rtmFDxXMiP0c%2FOwQcBLEk0UMwN8HBWCtfuLXPFaaaQEQY7rknt%2FQnLKAet%2FXd%2FJOQBB2PKqcR3i4%2FWwKCu1ptaC5aZfwhi68GQ%2BjxWwLpu%2FCjNObLWieC22SRbQbfAtu34XLZ%2FNi1YwY8mkAUefkehlkF1Fyseesxirr36qifVbuF8N9UkDiI6jD9n7Cg11yD%2FFeBwzD9mhTv5Y2gLRXWapR2JOVF9IdR0FOc0mPDsu0Nc%2FS71U6pFU5ORiKq4HfqxcQb75ZuRTp82rKvIWHRf5MO4hxIk7uUe%2BwQN%2Fx3mFyuexFaJWSJL0BVs8gWI1jLCIzxBqiot8rohnPC2jBoHi0ELPrzMUiglutRtU%2BJheNU2R%2BYgpDjaC2lqgrgbPp%2BwybQTN55U5eU3K7LkEQzy9x3YF65soN1JurAR1UFqX5%2BLDQz%2FmQuPeteVKNhtxPRt43qVOOTnwpiGNvE6UaK4lqBpDR8ZBsVVX5Gu2LYDZrYCuydL6rnfgiVNfF2O4YkNVGVbBRu3LsPT7GgOl6ThvvYzvarhpSSBgO%2Buzf2ON%2Bu1ekP0RLHraO2hBNDbgO1MGRgduhbuHIIYLsLpoSmKhktJ11EibeRNFSRENogL91NDFGFaD1tK6s4n2DpVusUsGvUdiWS8qioUhvaWStVpRFE0C9lZG1XlMWDYF6akLH9n9L9ZH29YV2GrwphjihrMjcgJWXOO%2B%2Fwmn1Nc6y39y0nQ6sCMvFa1wxNQjTCoAUHYg4fblRvpUkc1AaB%2BXrKgEPnAI2OEnzDJY5qpVjV2WM1Uk9woztmVU3treQC3pAsrcUtT7uYKC%2Fa8EE0%2BnvSv5d11aQDZJWh90q33rf%2BPO4q66iQdHF3DalPMEljnqYfSnZbY74jey34zbkP8OrgOuNF9Op2mJdSkDjhB%2FiNChaLX845N0j8DXSQGleJIV31OqL81GGo93CPeMXGef5K5694SBN%2BKUFhB7CkdcffIaEr%2Fl1Gi9ot%2FJXk9I7egx2fPTJUhItcXbpRTJNoZTeoAgdBvEWWGKOV%2BKguYTp5TFgtbzDDvMOoXh6ntmTmUbZ7CbI%2BMvgtzT7M89y4Pc6QEWJkEQHQb22OoxZQ42SDagwhvVrqAX0IuugMM4dmNLNgsnTMMTjgXXoIcjUbwIH2PeKpUGkB%2BPJ58HkstVK6FyqfopAB%2B3NF%2FmlhAHvvCnwegJwZLln69Zknc%2BjszROsxfJu9yhmgdm8HwTpRxqfmQfwFujmsV9qF4%2FXPKlO0eZX1p%2BBGRm6MRRk087bIaeGjU67rZDjhlZ3f330lvgxPOOZqKRbq7fUmhv9kZ7IJhhilHNMnRs9hQ3699aVV%2FTKJnCn85lvOZ4l8aLZxtLQKRDauY1SwSFtLJvaKXbohkkmyTETR%2FZRsmwi581SkQlxSERpdsSEakmSYzh9cbKQgNslIuKpUMumU7DxVHD2N4Gr%2BmhS9CkTnUab2vtNzFAP00lW0STZqPNtTP4m22uAW6KBaeAnktAnWKzDXF6tfjCYg467Mglpkxfjdj3aRrjlJTHvlG47wfnbZrfVHm%2BnTeu8oZ2XlDlHdt5WZV3VENca7meX8MN05vELe4hZi%2FmbnkpkzptbpkpHzuUbrFFdoPYlLmOm8Sm7FzX6shUCjcyOfMEpkZ44DdjDmrqQjOCl9O4bDXEfHF3jctaw9JadITdbbKhMpkFc2zDiAtznBpS%2FiSYQ%2FngDWoKEDkT9qcsmjfZGQA%2FpcQ9rW662FjQtBsxNpWzYUM5G9aE0wjuIBvO4TXIRxsAy%2Bstqj7l%2B6Nz9gdTSO8fnYOxvMM2%2B%2FZbdixFMdBa2kUcOAP2%2BDGu3dHqo191fcuOKW0ylLdkILbG58kTNgTWKuX4HHkOkVBXrYjpmOUVIThV6Pu4eNTIteYMmtxscshRhz12OUSmV%2Fp2KoGa3YSsdnAVza3e1VePDV95%2Fb%2BQs5CR5S3P%2B5ruEhPPTf56bHSnw3rGHT1G3Jpc9kMUF1t6glMCaRTXWdjrJV1QaRJDXACRbhbkWgI190SgT%2BS5%2ByIixxZKUWwM6G314YZ60IMKz3MaR%2BbUXNZcB75ZjCfpbBYk4ZbxRK4BNkuGw9FDp2Qix5ZMp7pdRBh7xCtkt6OkJXyzwG5hNwlaEm12rTY5vrl7acyj03CdDnZtcLtbXpUD9Eb2ZJiTSBuHuatGTjhP8shtGZmzAycBSpzWjZweAZCzDSlzduAkQNu4I6DDNljQB5F8p15lznZuEnSzBX0QyXfqVebswEmAbragD3X3wDmGL3N24CRAt1twACINnHqVOdu5SdDNFhyASEOnXmXODpwE6GYLDmE4OXTW7WXOdk4SlCx4bte%2BeiFvqjXK%2B8M21xjl2hzVFu8bShWo7TttV%2BaE83zkmpl2EsLhioB3zhO7cUQkOUMW53LcMw8qZzfxJPidxFM4G8SDKtJ31rNlzo7iCfC7iSdxIIo6rMG9A5z%2FcNqvzNlNQAl%2BJwEVTrP9BqDCwGm%2FMmdH8QT43cSTOBvEg%2Fp74GwEypwdxRPgdxNP4mxy7xDHs077lTm7CSjB7ySgwmm23xBUGDrtV%2BbsKJ4Av5t4EmeDeNC4DJ0tVJmzo3gC%2FG7iSRxwr9UIVPX2ph1hT%2Bu3UZp7LXKrOeBxMM95KO%2BBPeRdukbDwDC3sal%2BZ40PdZHBYPqKndiYZ1KbBfNW64IWjC5wIxoOTTUpjEU8at7vRNDbRnB9R4L%2BZoL1kVLNMNv9VTbdrcrLu%2Fipgm720Z%2BM9p7U1dBqzuiwjSDedhA02LlIEndG6%2Ba%2B3mBKa%2BVX3FBh6UCXSq8c6d65uKXCTvfPnVsnSKbXUXJxVnXEnN0lXK%2Bc0KXeDY3BccNyk8rIiyyIkpG54K1oiCVv7MwicH1Fu7a2J6SpFMJ%2Fu%2BxalosvUmNt%2B7KZwcprv0NaJjcuhxNb9vg0SvgbTsPYNCueInh5n%2Fcp3mNZjXQ7jC%2FndHmfAO7Qelu6KJ7jpW8veZ4HF3TPoUzu7cnbLyV7n17Qcq%2BgLEU5VzemZjxP42u80p3%2FRrej6qvP1SIhkMTdLnjn6lvxat53J%2FZ3EqdexmfpNTcvMdyjBcuMZN%2FriKtftQVU85QECtJCWUm5lkNT7aISaH0O%2BaB6l8tuFgO0J124aAuN23kooyeEAy1xnyB0q8wLeq2j0cYlu9KfYnID5X4XJcXxU9yNLGmHVYjqqmpbyfFS4I7YSX2uXS4MyFkE4xDT%2B64bhpEFEsG50XOxmdzYM9KoiPu%2B4C%2FmzknMg0zFTBlKxqGiKqbKaDzUrpS5LZ%2BUSLU7MneWR9x3qejkZeHDdUzLc%2B%2F76r6a%2Bv%2B9Xq8qm%2BeNWzCwEiqFwAty36b95aBPlzJsKPxGyR%2Bx99gPPD63qwAcQ3vDERvgONdkTPftQj308uwdVo6%2B792ZJc4RulkORszzjzuC93A7c8%2F3vLvzx7HDgO4X8prd8GX%2F94eDZiM7rAxtzPNlgToePr6rfsePG1kd4wrAEbD0af9LvfIbsT36NAk2pklaQC2ySEKq8F3i8esXyQ%2F4%2FYMCWqVpdHF4dldZH%2FsddgTuwOESPRlGw8bZx3E85B3Cw%2BFQy%2FXoH%2F7QUB8fjnB%2Bq4QZNvjCG2IAHhHxQ0W40WSP%2Fbp38iLI0AA8S4L4VRpjSB4%2BvbPuQkYRhn6zAH1dAFHJ1Auh6gpsBKPi4oTU420TQN3jTmi3gQxQ41MjW3tGkDaxe0SToMAdWyFVqTndnNFh43pnaCJbzqBH79ligutEgeyMswM2lo%2Blk6HyLpBY30wZd1hggapdM5pKKJ247Rj40oXB4FhoSsKcUcPyNsjAmIaIUiTVmytb1XwxhwaoamHoVmABRcGGD2ZmtaWc%2BsLlMYsRHXvqqK3ZfbWVul%2Fuhu7bVzmJTpy4zV27Qh5vN9HkoOverRt9RAzYQJoetw6Ftja8BPtB3rMuikhvHMHYHDOqZlIXHuz8ml%2BBMQptP2ntKB1UgeYeuuq8qb3ShIMz3%2F4MiOyc7d6mW%2Fjl1ki9C626K3afUoqcVAqJ7ry4d34kg4LSb21caW9np0vgRYAHptbJm5%2BECDnuq9K49HC4tQ0ERl0GiNStFTq53GrPJHA9MnaQ9tbumOmxpnXOTO%2FXemo02KxtmjcObdohZ%2BwJ%2FKRoO6ui7bj%2FyeF29gXD7Xtz76QWcMauyjuFnMSkLZXkRp2JM%2Bx0Xo2BZwI1hd64gdcOwbej3H%2BlAJSf2IhwB%2BSPL56JT2d8ZpWHOxwHX67a%2B2LmcCle%2B7bI5%2BsOA6T%2FFLqXX0r5TJWPaID2N64ydAu%2FtM6fXtX%2BRd2sfevmM5V%2B5G91NAxN0DRHQ%2Fvtr%2BHsL6v5Fnf%2FbWguXK7mwJu%2BrqLyNe4bqL178z20DOqzc1LCmkUX%2BRiMoeszwVMyNJTFGf6erlPem2JXvCWOGGXVhCeeffGP2%2By%2BuHihtBaOI4DDlnGDPomGswH2NJp33tYb77sT8O9CoI4%2B%2BFz%2BQ53ArcNj8rtVcXqDt8UseDJZddhldHGpveJlMlGxCHnNhzD8pCP24uwebWbHQ01L8hIdeoUU8ZFBSNWg2gLsZFshO3IXIUvNxxUhmkqmbwlWV%2F7QLRhTMVqezS1dh%2F3e8aPD4%2BNDKHz%2BUc8%2FPvIG2pQ8bQWucC3LHHu9R4feI9w45h%2F6vcNHvn90VCETolCfvtaDe%2BblYeA4vfBbkL9P31DE%2B5YeH%2BEKo3Zj7FRdUuDEjXXco6FlJ%2BEWIXPpPlHR2Lo9nc2NUkOo9q2sBGYYVfvgFWJ8i7J4j5xIrUpqBN3HaxtQ14Ev1X7IWrgvmsDm6Q1C4UoYauZtYugPnPw2s8Mf36b6KVLjdRBd5g%2BP7AKmIk6TRriQSLfJb4eWw%2BZBFhV4IF6g%2FRvzDafI7CeWW7rd2PBfJYBkLv4%2BeaLZUSQdnOpBs4GFAP%2FjFPR%2BdHRc50QFjr7GCdH8DfMPD82y6Iss4skw4p%2BANMcC0iq2g3OSGOGU3E2gw3PUQECZTGldij6hROEKf76FQsWigwNDLaKCZ3gj%2BvQrKUFvdQ2%2FTsOb8%2BKn58%2FEF%2FGSWsX68y8fXr97%2Bf1Pz5u7h3bvwuyADLEx2LHz4Gh4oA9SirBx1aiukqGNmDTkIX0bEKPIw1MLiUsu3SAGmpMXfn1tC7dvTtn%2FaQl%2B7A%2FBeAguTpzj5rtxx1nv33fmbk2w1sxBUn2OUOaspVosLgXD0vCRYhyXykXHqSMn0KACPBWf8zMqg%2FvGJgj8r%2Bl%2Bbdki1%2BbLW3ZIKc54UsxRStQSs90nuORLufWeoGhHCZ7gpi4GPjgPlAul58Hkdy7OsRiHjkeuU9DCPpJdW5uoUZdmKQUMs9CNUkeDkTkppTGGgiPeOsZBt5HjoKspQUc%2FIjOqH4OzocX5lZFxaqZRJ%2FzP%2FvjuraXVYDCyUobHO%2BlJx6lH%2BjluW1Z9dmzkOGZtw5unhkfOk8w1HnVrO8%2FtbrD6T3TU1HnIbwPWa3GA1X3gzMZTB3xG1jGjjZ7DEqqNgBxbPppcE1Sh5Agh%2FRjNyHGwpxm%2BPM1SQ6sO29jY1ez8qHYpx0b1bzfaYnhcs0XDKRnXMRuT8YmLjrF33t50vwN%2BNqfvM2%2Ff%2FGfsqNP30l33gEa77SYffgHyYTN5sGKd%2FKatpoJyQJTfB71lD7JxoXOlHtb4cN7A7qq8sYeZn2BpgQnoRIUKpF5139HJbkVBl1K71Y7I1rQaCV7W1kJcRA9REHTqrcr%2BJYugQaWZpJF1j561ikqITWo4yFX6W4T127nKR6BQvXRo3%2BAZYhr7Hncvao0Nxq3edRD27VWl%2B7se3nliFEqx1prxCY%2Bu9WJfw3Ws6Wo89Gbkux4tmDSzMRoYB4Gm5WOFT70FWqqR2HYnrK6OpofVTQyjfB5Ar0LQw%2B7Q2SIv0pl4N9cfGxZfG9gbahr63U0EaxWqcUHOEMPeoSCPfZu7FOTmBSnNDhsUnBOOzW6p0OWKnXK21ur3qlW7DUCrXYDGuwAFuwDhVQ%2B7wGW7AK13gsJbH3ZiWV4zcXKXIFKftjcCSFbHW0JHHUH%2FG4ydxXwXk%2BEdKLvAxeq%2Bgl1csAsg3SiyE%2Bed4mgnKHk7yK76%2FoUi6U%2B4oB7EZ%2BUNXH%2FFePoqSuK%2FXba3RUnIl%2FX9%2FjwU%2BmOH8eE%2B%2B%2FcPH169e%2F38wwe2%2F1DeTD5vVVeSC9W12%2BAw8YKrvU84X994YCAp95PlPRLml6llSrrqlj0xJ57lboTENLciRLfKmVQkgoKQW%2FDUNHIVGUEYPlP73LacdYhwPk1T0%2BKIQGnMcaK49euPYIXStiP2Pz9G4S382j07Y8qiDvBzMOO3v2oMDF%2FRVsEo7JgrdEI6JVvbUlfsj%2FlaGkOIfXWlRYUCeuuqJcF1dIHD5R5EumMnjaQCxUlq%2FLGc9dK1LoPB3EDa3olHpTywaWCgm9%2FFI0wnixmetaiTf%2FbLS6y%2BMC0NQh5WurhO5VDU49dlRGyYspcezcutkgqjvMixMTLUvKTbVuVupNuqupBWKbeqNootJq7ktRWgfZhmLyCOvGH%2FqDoEX2Qre478vZDgvEHdTN%2BZCY5RbLR9U2Km067om%2Bc6t5gARsU0Uchxw7s1pY8FhtJFbi%2BBcO8w8TyTB4PcjZhRwDcVXpzx%2FE1ZW1sMpxM2VmF0Xf5b4ULVX%2FXfa1qWy3BNRB9b%2B3nrBZ0g9%2BTF9qz1ur1n2N8hiZw9M0SxV7TJnQK3Sa1aj8DdoAtHC0xzc7GRs2m7QzN8fQtZM2y5%2Fchs3wSMVhPKjsC3eQE9iCdW6IjpTmyBVT0zgZF8wZ%2FHfCbGegSwJ5gYSD3qLgmXsb2Mx0EB%2FRz8UEeeZt15GiV45pdWN3nYnYXssnvE5nF3wOZZ12cF9LO62OETTxdZsOoe9vtsCoLko3RRxFHCu0macJqc6Hosn40IdJnjYyw%2Btww0xxcC2%2Bv39xxiRvCSvQVEFFNODO%2FZRSgSfVDuhIlyEWhnquUBqGkAoV5C4KyN%2BP6MPH8L%2FcEpnlVIJvpnDehTDGWHV2yUl%2F4dCYod8To2X8UFfHqKuPpPT8nMV7x10Hi38pfm68p8XStos775TQbyqzSP5HHO99V6o%2BhNAEByoSK%2BDhDlZ0FMM9kOM0azxXOKbUdW%2FjSO0xsevk2lGwyQSZrxnvASlIuqKgyyixzq0uRarw0NNqJkUbDOoQjhehoi0TlixNNKUnk4%2BBJKacwlO%2ByVt0SP3LhN%2Fb6uqtFxrZnoZ7r%2BWBLp2esFverOtHaHbYFVd6q1qwVey%2BTaN5ut5uxWb3rlB3c2xrPxpR%2BC7NpF4QmeeTQ%2FTmEUFA25FApbK1FMXuGdx1Y0KAgVjC%2Bh%2F1SH0M6g4unR6ugpvOUtvRCap07Jc3o2Hj49x8%2FnSovrA1bKa9dkNSzMWJ3aaSOxesdC6KDc%2Bst0mtN89a5hAB6xAu59bdtlFV%2B7ktci0sFA23%2BA5hRfOBjnLVOJNu4n6Xl4BWoJYUsiYewegOF3w9ql2eyqSmz8sumfNILTtpWuKbGhVVWJGNLlPAMkiLIs4XEvSnvTKOOtPVFX4OC9AmVsz1hG2BupGKXNcHlp%2FfqKQ7tjkCnXHDaTKMFoEaeicNthe1Br7jXMqBvhbSj7qYVMp6uVi9ri3DZjous7yNpe1rGXI9yHwQ0tjbC6k0vt2AFrUlGp21N03%2BtdjzNxsBsce003dNIJa%2FHWcoyNZOtiN4htszaf6Bd1czkuycV%2BDHMALWOlrNM3dncMr8sONDje5qP38x30jEIrzU9dW32I%2B7QoYOCJ3gDqUMNoKM298Lv1q3fqWTuBtA3hbjC5ffYIzwnTT7%2BnbVWTQPVRvTbRVx51klMGjd2OGlmnGU2zy5AU31I5M3vB6gsoHearOyjKvk8Dgh6bdYdD82l3tPEqh70SYs8cEzd0yQHuxIJydPIt%2FAaMvFjBuHscTH6%2FoDEKsvnX8Hg6DY%2FLz7VV49n7d9ZpN42%2Brj57J3a9Y%2BI4psVirLicE0nOHrgWUG4zNR0bEGDmd37MGSKI7ISm5ZuGpmF0XY1LBbSw249vX%2F4EeL9%2Bm8%2BCOH6CLRenweikHNt%2F%2B1Dk%2FWrhB3OoS8KzyygOW4atbEbG4Hca8yXDn%2B4kjdlFMO%2BuYIQL49KbywjcrY2B88sgTG%2FgSbjmoi%2FPKGK93Sqpt%2FXMFHBzEHtlXk0zwb54XDYTDY2JMfU2%2FYd79%2B7l%2FwQ%2FrxdQJ%2BID7sp781%2Fh4RfarGpB%2FDM8PIvyeRys3vwjPPN89v8BSeiR3Q%3D%3D
```

Ничего исполнять не нужно. Просто скройте входную ячейку оставив только выходную через свойства (правый угол группы)

А здесь лежит [**блокнот со всеми**](https://jerryi.github.io/wljs-demo/PresenterJoyCon.html) **примерами** (некоторые из которых работают в браузере).

#### А если со своим ноутбуком выступать не получится?

Скрытый текст

WLJS Notebook можно экспортировать в HTML, [сохраняя даже некоторую динамику](https://wljs.io/frontend/Exporting/Dynamic%20HTML). Это довольно хитрый алгоритм, который отслеживает все цепочки событий, происходящих на стороне JS и WL, и пытается аппроксимировать их простой машиной состояний. В конечном итоге получается обычный HTML файл, внутри которого хранятся все ячейки, слайды, а также данные этих машин состояний.

Единственное, из-за разнообразия значений, поступающих от IMU, экспортер не сможет запечатлеть это автоматически в машине состояний на JS, и про вращения, а также стик можно забыть. Однако всё остальное будет работать. 🙂

#### Зачем буханку хлеба превращать в троллейбус?

Скрытый текст

![src. народное достояние](https://habrastorage.org/getpro/habr/upload_files/b75/741/331/b75741331f3351660901478ac26e8ec4.png "src. народное достояние")

src. народное достояние

Если бы не острая потребность показать крутящуюся кристаллическую структуру, то этой статьи бы и не было.

Спасибо за внимание, и тем, кто дочитал до сюда 🧙🏼‍♂️ 🤍