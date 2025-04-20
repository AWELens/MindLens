mindlens/
├── core/                  # Ядро: модели, вычисления, трансформеры
│   ├── model/             # Сущности: блоки, связи, слои, контексты
│   ├── engine/            # Интерпретация, валидация, зависимостные графы
│   └── runtime/           # Сигналы, реактивность, состояния
├── ui/                    # Визуальная среда
│   ├── editor/            # Канва, редактирование, слои
│   ├── explorer/          # Навигация по дереву абстракций
│   └── widgets/           # Плавающие панели, инспекторы, миникарта
├── platform/              # Интеграции
│   ├── vscode/            # Плагин для VSCode
│   ├── cli/               # CLI-обёртка
│   └── ide/               # Плагины для других IDE (WebStorm, CLion)
├── plugins/               # Расширения
│   ├── codegen/           # Генерация кода по DSL
│   ├── importers/         # Импорты из OpenAPI / C4 / TS AST
│   └── analyzers/         # Статический анализ зависимостей
├── docs/
│   ├── VISION.md
│   ├── ARCHITECTURE.md
│   └── CONTRIBUTING.md
├── LICENSE.md
├── README.md
└── tsconfig.json / CMakeLists.txt
