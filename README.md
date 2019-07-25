# jbrowse_region_retriever

A small script to download NCList data from a list of regions


## Setup

Just run

```
npm install
```

Or

```
yarn
```

To install the dependencies

## Usage

Make a file called regions.json like this


regions.json
```
[
    {"refName": "chr1", "start": 0, "end": 10000},
    {"refName": "chr2", "start": 50000, "end": 60000},
    ...
]
```

Then run the script like this

sample usage

    node index.js /path/to/data/directory regions.json

Where /path/to/data/directory contains a trackList.json


## Example output

```
ExampleFeatures ctgA    999     2000    Remark:hga
ExampleFeatures ctgA    1658    1984    f07
ExampleFeatures ctgA    3013    6130    f06
ExampleFeatures ctgA    4714    5968    f05
NameTest        ctgA    1099    2000    Gene:hga
NameTest        ctgA    1199    1900    Protein:HGA
NameTest        ctgA    1599    3000    Gene:hgb
NameTest        ctgA    1799    2900    Protein:HGB
snps    ctgA    999     1000    FakeSNP
Genes   ctgA    1049    9000    EDEN
ReadingFrame    ctgA    1049    9000    EDEN.2
ReadingFrame    ctgA    1049    9000    EDEN.1
ReadingFrame    ctgA    1299    9000    EDEN.3
CDS     ctgA    9999    11500   Apple1
EST     ctgA    1049    7300    agt221.5
EST     ctgA    1049    3202    agt830.5
EST     ctgA    1149    7200    agt767.5
EST     ctgA    5409    7503    agt830.3
EST     ctgA    7499    8000    agt221.3
EST     ctgA    7999    9000    agt767.3
ChromHMM        ctgA    0       11960   15_Quies
Clones  ctgA    999     20000   b101.2
malformed_alignments    ctgA    5232    5302    seg04
malformed_alignments    ctgA    5799    6101    seg04
malformed_alignments    ctgA    6441    6854    seg04
malformed_alignments    ctgA    6884    7241    seg03
malformed_alignments    ctgA    7105    7211    seg04
malformed_alignments    ctgA    7409    7737    seg03
malformed_alignments    ctgA    7694    8177    seg04
malformed_alignments    ctgA    8054    8080    seg03
malformed_alignments    ctgA    8305    8999    seg03
malformed_alignments    ctgA    8544    8783    seg04
malformed_alignments    ctgA    8868    8935    seg04
malformed_alignments    ctgA    9403    9825    seg04
```

Description of output

    column 1 - trackLabel
    column 2 - refName
    column 3 - start
    column 4 - end
    column 5 - feature id
    column 5 - feature name

Can customize the output as needed by editing the script

