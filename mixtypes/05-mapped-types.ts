type PcBrand = {
    name: string;
    country: string;
    createdAt: Date;
}

type WellKnownBrands = 'apple' | 'lenovo' | 'hp' | 'dell' | 'microsoft' | 'huawei';

type MyPcRecord = {
    [BrandKey in WellKnownBrands]?: PcBrand;
}

const brandRecord: MyPcRecord = {
    apple: {
        country: 'USA',
        createdAt: new Date(),
        name: 'Apple',
    }
}

function printPcCatalog(pcCatalog: MyPcRecord) {
    console.log(pcCatalog.apple?.country);
}

type PartOfWindow = {
    [Key in 'document' | 'screen' | 'navigator']?: Window[Key];
}

const dates: PartOfWindow = {
    document: window.document,
}

export { }