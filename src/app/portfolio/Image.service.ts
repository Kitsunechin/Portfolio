import { Injectable } from '@angular/core';

@Injectable()

export class ImageService{
    Images = [];

    getImages(){
        return this.Images = IMAGES;
    }
    
    getImage(id: number){
        return IMAGES.find(image => image.id == id)
    }
}

const IMAGES = [
    {"id": 1, "category": "nature", "caption": "views of nature", "url":"/assets/Images/nature.jpg"},
    {"id": 2, "category": "nature", "caption": "views of nature", "url":"/assets/Images/nature2.jpg"},
    {"id": 3, "category": "nature", "caption": "views of nature", "url":"/assets/Images/nature3.jpg"},
    {"id": 4, "category": "nature", "caption": "views of nature", "url":"/assets/Images/nature4.jpg"},
    {"id": 5, "category": "nature", "caption": "views of nature", "url":"assets/Images/nature5.jpg"},
    {"id": 6, "category": "animals", "caption": "animal lovers", "url":"assets/Images/animal.jpg"},
    {"id": 7, "category": "animals", "caption": "animal lovers", "url":"assets/Images/animal2.jpg"},
    {"id": 8, "category": "animals", "caption": "animal lovers", "url":"assets/Images/animal3.jpg"},
    {"id": 9, "category": "animals", "caption": "animal lovers", "url":"assets/Images/animal4.jpg"},
    {"id": 10, "category": "animals", "caption": "animal lovers", "url":"assets/Images/animal5.jpg"},
    {"id": 11, "category": "people", "caption": "many faces of people", "url":"assets/Images/people.jpg"},
    {"id": 12, "category": "people", "caption": "many faces of people", "url":"assets/Images/people2.jpg"},
    {"id": 13, "category": "people", "caption": "many faces of people", "url":"assets/Images/people3.jpg"},
    {"id": 14, "category": "people", "caption": "many faces of people", "url":"assets/Images/people4.jpg"},
    {"id": 15, "category": "people", "caption": "many faces of people", "url":"assets/Images/people5.jpg"},
    {"id": 16, "category": "city", "caption": "our city", "url":"assets/Images/city.jpg"},
    {"id": 17, "category": "city", "caption": "our city", "url":"assets/Images/city2.jpg"},
    {"id": 18, "category": "city", "caption": "our city", "url":"assets/Images/city3.jpg"},
    {"id": 19, "category": "city", "caption": "our city", "url":"assets/Images/city4.jpg"},
    {"id": 20, "category": "city", "caption": "our city", "url":"assets/Images/city5.jpg"},

]