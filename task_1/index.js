import { encoded, translations } from "./data.js";

console.log("Let's rock");

const decode = (encoded, translations) => {
  let decoded = [...encoded];

  for (let i = 0; i < encoded.length; i++) {
    const currentDec = decoded[i];

    currentDec.areaId = translations[currentDec.areaId];
    currentDec.departmentId = translations[currentDec.departmentId];
    currentDec.directionId = translations[currentDec.directionId];
    currentDec.mediaTypeId = translations[currentDec.mediaTypeId];
    currentDec.mediaId = translations[currentDec.mediaId];
    currentDec.resellingId = translations[currentDec.resellingId];
    currentDec.formatTypeId = translations[currentDec.formatTypeId];
    currentDec.formatId = translations[currentDec.formatId];
    currentDec.unitId = translations[currentDec.unitId];
    currentDec.platformId = translations[currentDec.platformId];
    currentDec.adPlatformId = translations[currentDec.adPlatformId];
    currentDec.serviceTypeId = translations[currentDec.serviceTypeId];
  }

  return decoded;
};

console.log(decode(encoded, translations));
