//We have incoming name of the file and we need return his extension - расширение
//for example  filename.dopstring.to.exe   => exe
let filename = "filename.dopstr.anything.gzip";

const getExtension = (filename) => {
    if (typeof filename !== 'string') {
        throw new Error("Invalid type of parameter");
    }
    const parts = filename.split('.')
    console.log(parts, parts.length)
    return parts.length === 1 ? null : parts[parts.length - 1]

}
console.log(getExtension(filename))