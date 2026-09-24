# Class Summaries

A brief of every class and slide in the `/learn` section, in deck order. Source: the Spanish dictionaries in `src/presentations/<course>/<class>.dict.tsx`. Slide titles are given in Spanish (the authoring language) with a short English summary; the slide link is `/learn/<course>/<class>?s=<n>`.

## Course: Wwise + Unreal (`wwise-unreal`)

All five classes belong to the **Intro** section. The course builds from general computing (how data, programs and servers work) to what an engine is, then to Wwise itself: its end-to-end pipeline, the editor and the catalog of objects.

---

### 1. Datos, programas y servidores — *Data, programs and servers*

`/learn/wwise-unreal/datos-programas-y-servidores` · 9 slides

The computing foundations the rest of the course relies on: the memory hierarchy, programming languages, the client–server model, and how a game loads SoundBanks into memory only when it needs them.

| # | Slide | Brief |
|---|---|---|
| ▶ | **Intro** | Cover: *Datos, programas y servidores* — "from the disk to the server". |
| 1 | **Biblioteca** — Para trabajar, los datos tienen que llegar a tus manos | A library seen from above: shelves hold every subject (getting up is slow), the table holds closed books (reaching is fast), the open books are the current subject (reading is instant). The closer to your hands, the faster, and the less fits. |
| = | **Computador** — La biblioteca es tu computador | Same diagram renamed: shelves = hard disk, table = RAM, open books = cache, the readers = CPUs. Disk, RAM and cache are distances to the processor. |
| 2 | **Lenguajes** — La CPU solo entiende unos y ceros | Four stacked language levels: Python/JavaScript (reads like English, memory managed for you), C++/Rust (full hardware control, compiled), assembly (direct processor instructions), machine code (1s and 0s, the only thing the CPU understands). Higher is easier for you; lower is faster for the CPU. |
| 3 | **Restaurante** — Un servidor es un programa que atiende peticiones | You order a burger from the waiter; the kitchen checks the menu, gathers the ingredients and cooks it; the waiter brings it back (or tells you there are none). That is what a server does. |
| = | **Cliente-servidor** — El restaurante es cliente y servidor | Same scene renamed: you = client PC, kitchen = server PC; the server validates the user, fetches resources and builds the response (or returns an error). |
| 4 | **Servidores** — Cada servidor sirve lo suyo | Three identical request/response rows: a web server serves pages (Apache, Nginx), an FTP server serves files (FileZilla Server, vsftpd), a database server serves data (PostgreSQL, MySQL). |
| 5 | **Hardware** — Una computadora servidor: hecha para servir todo el día | A server machine next to a graphic-design PC: same parts, opposite priorities. The server has fast, robust network cards and a 24/7 power supply but no video card; the design PC has a basic network card and PSU and a powerful GPU. |
| 6 | **Arranque** — Arranca el juego, y los bancos suben cuando hacen falta | Stepped slide (4 steps) on a phone running a game. The disk holds the game and three SoundBanks; RAM holds the game engine, the main scene, the sound engine and `soundbank_init`. Steps: **pide** — the scene asks the sound engine to play the menu music; **busca** — the sound engine fetches `soundbank_menus` from disk; **sube** — the bank loads into free RAM while `soundbank_nivel_1` stays on disk. |

---

### 2. ¿Qué es un motor de audio? — *What is an audio engine?*

`/learn/wwise-unreal/que-es-un-motor-de-audio` · 7 slides

From compiled vs interpreted programs to a definition of "engine", then game engines and audio engines as the same pattern.

| # | Slide | Brief |
|---|---|---|
| ▶ | **Intro** | Cover: *¿Qué es un motor de audio?* — "from languages to engines". |
| 1 | **Lenguajes** — Programas compilados vs interpretados | A compiled program is translated once, before running, into a binary ready for the CPU; an interpreted program stays text, so someone has to read it live. |
| 2 | **Compilados** — A los compilados los corre el OS | Stack: binary → OS (Windows, macOS, Linux) → CPU. The OS only launches the binary, which already speaks machine language; nothing translates it at runtime. |
| 3 | **Interpretados** — A los interpretados los corre un motor | The same stack with a new floor: script → engine (interpreter, itself a compiled program) → OS → CPU. The CPU never sees your script, only the engine reading it. |
| 4 | **Qué es un motor** — Un motor es un programa que corre para correr programas | Definition: an engine takes programs made of resources, code and configurations and produces behaviour. Table of examples: browser runs HTML + JS; Python runs `.py` scripts; Unreal/Godot run scenes + scripts; Wwise runs Wwise objects. |
| 5 | **Game engines** — Un game engine corre configs y código | Resources (textures, models, audio) feed configurations (scenes, maps, prefabs) and code (gameplay scripts); the game engine runs them together and produces the game. |
| 6 | **Audio engines** — El motor de audio: mismo patrón | The game-engine diagram reduced: audio resources (songs, sounds, voices) feed interactive-sound configurations (tracks, buses, events), and the sound engine runs them to produce audio. |

---

### 3. Wwise por adentro — *Wwise from the inside*

`/learn/wwise-unreal/wwise-por-adentro` · 2 slides

A short bridge class: it maps the generic audio-engine pattern onto Wwise and shows the full pipeline from authoring to the running game.

| # | Slide | Brief |
|---|---|---|
| ↺ | **Recap** — Wwise: el mismo patrón | The audio-engine diagram with Wwise names: resources feed Wwise objects (segments, containers, events), which become SoundBanks that the sound engine runs to produce audio. |
| 1 | **Punta a punta** — Wwise de punta a punta | The complete map. Audio clips and the designer's configs go into the Wwise project (Wwise Objects); the Wwise editor generates SoundBanks (`.bnk`, structure + media) into the engine project, where the Wwise plugin exposes the API and your audio code makes Wwise calls. In the build, the game makes Wwise calls to the Wwise engine, which runs the loaded SoundBanks. The game only uses the interface: the calls. |

---

### 4. El editor Wwise — *The Wwise editor*

`/learn/wwise-unreal/el-editor-wwise` · 8 slides

A tour of the authoring tool: views, the editors inside the Views menu, layouts, and the Designer layout where most of the work happens.

| # | Slide | Brief |
|---|---|---|
| ▶ | **Intro** | Cover: *El editor Wwise* — "the authoring tool". |
| 1 | **Views** — El editor se arma con views | The Views menu: three families with submenus (Editors, Profiler, Utilities) and the direct views (Audio Device Meter, Audio File Importer, Loudness Meter, Meter, Project Explorer, Soundcaster, Transport Control). |
| 2 | **Los útiles** — Los de todos los días | The everyday views highlighted: Project Explorer to navigate the project, Transport Control to play the selection, Soundcaster to test and mix. |
| 3 | **Por propiedad** — Un editor por propiedad | Inside Editors: the Property Editor (tabs General, Routing, Conversion, Positioning, Advanced) plus property editors that work on any Wwise Object: RTPC (Game Parameter curves), States, Effects, Stingers (musical hits) and Metadata. |
| 4 | **Por objeto** — Un editor por tipo de objeto | Editors for specialized objects: Music Playlist, Music Segment, State, Switch, SoundBank, Effects and Event editors. |
| 5 | **Layouts** — Un layout es un acomodo de views | Two screens with the same panels arranged differently: a layout is an arrangement of views, and each task wants its own screen. |
| 6 | **De fábrica** — Un layout por tarea | Table of the built-in layouts: Designer (F5, daily object and Event work), Profiler (F6, live connection to the game), SoundBank (F7), Mixer (F8), Schematic (F9, project structure and routing as a diagram), Audio Object Profiler (F10), Voice Profiler (F11, trace every playing voice), Game Object Profiler (F12) and up to four User Layouts. |
| 7 | **Designer** — Designer: donde la magia sucede | The Designer layout: Project Explorer, Contextual Help and Transport Control on the left; a centre panel with a tab per open element and, below, tabs for views of the selected element (Selected Element Editor, RTPC, States, Effects, Metadata); the Property Editor on the right. Navigate, edit and listen without switching screens. |

---

### 5. Wwise Objects

`/learn/wwise-unreal/wwise-objects` · 15 slides

The catalog of Wwise objects, organized by a teaching classification of five families along the path a sound takes: Game Input → Content → Mixing → Output, with Processing acting on the path and Packaging wrapping it all.

| # | Slide | Brief |
|---|---|---|
| ▶ | **Intro** | Cover: *Wwise Objects* — "the object catalog". |
| 1 | **El camino** — Todo sonido sigue el mismo camino | Stepped slide (5 steps): the five families between the game and the output. **Game input** — the game only touches Game Input (posts Events, sets Game Syncs). **Señal** — the signal is born in Content, goes through the busses and out to the device. **Procesa** — Processing acts on Content and Mixing, with parameters (RTPC, States) coming from the game. **SoundBanks** — everything inside travels packaged in SoundBanks; the game and the output stay outside. |
| = | **Clasificación** — Cinco familias, cinco preguntas | The five families named by their question: Game Input (what does the game say? Events, Game Syncs); Content (what plays and how is it chosen? Sound and Structure, for SFX and Music); Mixing · Routing (where does the signal go?); Processing (what happens to the signal?); Packaging (how is it delivered?). A classification for teaching, not Wwise's own. |
| 2 | **Sonido** — Los únicos que apuntan a audio real | The objects that point at audio data: Sound SFX (the workhorse), Sound Voice (one source per language), Music Track, Music Segment (timeline with cues, tempo, meter) and plug-in sources (Wwise Synth, tone generator). Everything else decides whether, when, which and how these play. |
| = | **Estructura** — Containers: hijos + una regla | Containers hold children and a playback rule, and produce no audio: Property Container (no rule, groups and passes properties down), Random (which one?), Sequence (in what order?), Switch (according to what the game says?), Blend (how much of each, by RTPC), Music Playlist, Music Switch, and Folders (organize only). |
| = | **Herencia** — Lo del padre baja a los hijos | A three-level `footsteps` tree worked in dB: relative properties (volume, pitch) add up level by level (−6 → −10 → −14 dB), absolute ones (bus, effects) are inherited unless a child overrides them (`footstep_metal` routes to a Metal bus). |
| 3 | **Mixing · routing** — Cómo se mezclan las señales y por dónde suena esa mezcla | The Audio tab's three folders: Containers (each object points to exactly one output bus), Busses (Main Audio Bus with SFX and Music, a reverb Aux Bus, Master Motion Bus for haptics, Secondary Bus) and Devices (speaker, controller, headphones). The signal moves, it is not copied. |
| = | **Aux busses** — El send es una copia | A Sound SFX sends its dry signal to its Audio Bus and a copy, with a per-object send level, to the reverb Aux Bus; both end in the Main Audio Bus (dry + wet). Normal bus = one destination; aux bus = duplication for shared effects. |
| 4 | **Efectos** — Un efecto por voz o uno para todas | Effect on the object (3 voices, 3 instances, before mixing: flexible but costly) vs effect on the bus (3 voices, 1 instance, on the sum). That is why reverb lives on an aux bus. |
| = | **ShareSets** — Se edita una vez, se usa en todos | An Effect ShareSet (`Reverb_Hall`) edited in one place and used by a sound, a bus and an aux bus. ShareSet types: Effect, Attenuation, Conversion Settings, Modulators (LFO, Envelope, Time). Custom = a local version for a single case. |
| 5 | **Events** — El juego solo ve el Event | The game posts `Play_Footstep` by name; inside are Actions (Play the footsteps container, Set Switch surface = grass, Set RTPC car_rpm = 4200). Events take no arguments, so each value needs its own Event. Changing the behaviour never touches the game code. |
| = | **Game syncs** — Game Syncs: valores desde el código | Four kinds of values set by game code and read by objects, containers and busses: Switch (discrete, per Game Object), State (discrete, global, with transitions), RTPC (continuous, via a curve, e.g. RPM → pitch) and Trigger (a one-off pulse, e.g. music stingers on the next beat). Events say *when*, Game Syncs say *how*. |
| 6 | **Packaging** — Empaquetar y organizar | SoundBanks (Events + structures + media loaded at runtime, also Auto-Defined per Event), Work Units (`.wwu` files that split the project for version control and teams) and Queries/Sessions (editor tools, not runtime objects). Only SoundBanks ship with the game. |
| ↺ | **Cierre** — Todo sonido sigue el mismo camino | Recap of the full path: Game Input → Content → Mixing → Output; Processing acts along the way; SoundBanks package it all. |
