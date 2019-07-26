/*eslint-env node*/
const NCList = require('@gmod/nclist').default
const {LocalFile} = require('generic-filehandle')
const fs = require('fs')

if(process.argv.length<4) {
    console.log('usage: node index.js /path/to/data/directory regions.json')
    process.exit(1)
}


async function readTrack(trackConfig,regionList) {
    const store = new NCList({
      baseUrl: process.argv[2]+'/',
      urlTemplate: trackConfig.urlTemplate,
      readFile: url => new LocalFile(url).readFile(),
    })

    regionList.forEach(async r => {
        for await (const feature of store.getFeatures({
              refName: r.refName,
                start: r.start,
                  end: r.end,
        })) {
              console.log(`${trackConfig.label}\t${feature.get('seq_id')}\t${feature.get('start')}\t${feature.get('end')}\t${feature.get('id')||feature.get('load_id')||'.'}\t${feature.get('name')||'.'}`)
          }
    })
}

const data = JSON.parse(fs.readFileSync(process.argv[2]+'/trackList.json'))
const regions = JSON.parse(fs.readFileSync(process.argv[3]))
const tracksOfInterest = data.tracks.filter(f => f.storeClass=='JBrowse/Store/SeqFeature/NCList')
Promise.all(tracksOfInterest.map(track => {
    readTrack(track, regions)
}))
