
export const fileUpload = async(file)=>{
// estoy creando una peticion http
    if(!file) throw new Error('No tenemos ningun archivo a subir')
    
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dzlshfe4a/upload';

//estoy mandando este body
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file)

    try {
// es una peticion post        
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if(!resp.ok) throw new Error('No se pudo subir imagen')

        const cloudResp=await resp.json();

        return cloudResp.secure_url;

    } catch (error) {
        console.log(error);
        throw new Error( error.message);
    }
}
