// import { parseString } from 'xml2js';
// import axios from 'axios';

export function newsList(){
    console.log('newsList from actions called!')
    return {
        type:'NEWS',
        payload:[
            {
                "_id" : "5c5d1835eaaefaaddc73b181",
                "description" : "Soupçonnée d’être à l’origine des enregistrements clandestins d'Alexandre Benalla et de Vincent Crase, la commissaire divisionnaire a démissionné ce jeudi «pour éviter toute polé",
                "url" : "https://www.20minutes.fr/politique/2446375-20190207-affaire-benalla-cheffe-securite-premier-ministre-demissionne#xtor=RSS-149",
                "title" : "Monseogneur Peoc'h",
                "type" : "Article"
            }
        ]
    }
}