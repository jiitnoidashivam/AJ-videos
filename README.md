# AJ Videos
Open dist/index.html in a modern desktop browser, or double-click Start-AJ-Videos.cmd on Windows with Node.js installed for a consistent local storage origin. No package installation or internet connection is needed for the local server. Start with the Orbital Studies sample or choose New. Import originals, click a bin item to preview and mark source In/Out, double-click to append, or drag into a timeline track. Click a clip to select it. Set timing and effects in Effect controls.


**#How to open it
in windows , just run the start AJ Video.cmd file by double clicking it
in Linux node.js must be installed, open the folder in terimal that contains start.cjs , type "node start.cjs" , and open "http://127.0.0.1:4178/" in a browser**

## Editing
Space plays/pauses. Left/Right step one sequence frame, Home returns to start, Ctrl+K splits, Delete removes, Shift+Delete closes the gap on that track, Ctrl+Z undoes, Ctrl+Shift+Z redoes, Ctrl+S saves a project. Source monitor I/O marks trim boundaries. Use Clip timing → Edit point for ripple, roll, slip and slide by a signed number of frames. Roll and slide require adjoining shots. Use overlapping clips on V2 and V1 and a fade on the upper layer for a dissolve. Set speed to 0 with a source offset for a freeze. For motion animation, move the playhead, change motion values and set a keyframe at each time. Proxy attachment expects a matching pre-generated video with the same duration and audio.

Use A1 for dialogue and A2 for music. Enable ducking on the music clip to lower gain whenever A1 contains a clip. RMS normalization analyses the selected source range using the browser audio decoder and limits the applied gain. It is not a LUFS broadcast meter. Import SRT creates editable text clips. Export SRT includes every text clip. Text appears burned into video exports.

## Projects and export
The browser autosaves one sequence and stores imported media locally where storage permits. Save project downloads edit decisions. Keep original media alongside project files and reimport originals when moving to a new browser or machine. A 30 fps sequence grid offers frame stepping. Source seeking and real-time recording depend on browser codecs and machine load. Use desktop Chrome or Edge and keep the tab visible during export. Only browser-supported MP4/WebM formats appear. Preview uses a reduced working resolution. Export renders from originals at the selected output dimensions.

## Coverage of the requested workflows
| Area | Available in this build | Further development |
|---|---|---|
| Editing | Two video layers, title and audio tracks, trims, split, ripple, roll, slip, slide, source In/Out, attach proxies | Multicam, nesting, automatic proxies, verified source-frame accuracy across codecs |
| Audio | Clip mixing, voice high-pass, RMS normalization, track-activity ducking, manual alignment | Noise modelling, automatic sync, speech-aware ducking, integrated LUFS |
| Color | Exposure, contrast, warmth, hue, saturation, copy previous grade, standard-domain 3D .cube LUT | HDR color management, scopes, measured shot matching, full Lumetri equivalent |
| Effects | Green screen, blur, sharpen, mirror, scaling, constant speed, freeze | Tracking, stabilization, distortion pipeline, continuous speed ramps |
| Titles and captions | Editable text, lower thirds, rolling titles, SRT import/export | Adobe MOGRT compatibility, embedded selectable caption streams |
| Transitions | Fades, layered dissolves, wipes, zooms | Custom transition authoring |
| Graphics | Position, scale and opacity keyframes, logo overlays, animated titles | Full Essential Graphics equivalent and After Effects integration |
| AI | Manual aspect ratios, positioning and elliptical masking | AI reframe, transcription, auto captions, audio enhancement, scene detection and object removal |
| Social content | Landscape, portrait, square and 4:5 canvases | Platform account integration and direct posting |
| Film and TV | Browser-decodable footage and manual proxies | Camera RAW pipelines, HDR, broadcast compliance and production management |
| Delivery | Real-time MP4 or WebM recording if supported; 720p, 1080p, 4K settings | MOV/AVI/MXF, batch encoding, 8K validation, Media Encoder |
| Advanced editing | Manual match cuts, freeze, blend modes, ellipse mask | Rotoscoping, adjustment layers, Dynamic Link |
| Content types | General-purpose sequences for short films, vlogs, podcasts, promos, tutorials and the other requested genres | Long-form performance and production qualification |
| Collaboration | Portable project files, media bin, local autosave, undo/redo, manual version copies | Multi-user projects, cloud asset sync, revision merging |
| VR | Flat video preview of browser-decodable footage | Spherical viewer, projection-aware effects/transitions and VR metadata export |
