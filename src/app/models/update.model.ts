export class Update {
    public id!:number;
    public VinCode!:string;
    public image!:string;
    public manufacturer!:string;
    public model!:string;
    public mile!:string;
    public year!:string;
    public price!:string;
    public phoneNumber!:string;
    public ariivesIn!:string;
    public driveTrainGeo!:string
    public driveTrainEng!:string
    public fuelTypeGeo!:string
    public fuelTypeEng!:string
    public transmissionGeo!:string
    public transmissionEng!:string

    constructor(id:number,VinCode:string,image:string,manufacturer:string,model:string,mile:string,year:string,
        price:string,phoneNumber:string,ariivesIn:string,driveTrainGeo:string,driveTrainEng:string,fuelTypeGeo:string,
        fuelTypeEng:string,transmissionGeo:string,transmissionEng:string){
            this.id = id;
            this.VinCode = VinCode;
            this.image = image;
            this.manufacturer = manufacturer;
            this.model = model;
            this.mile = mile;
            this.year = year;
            this.price = price;
            this.phoneNumber = phoneNumber;
            this.ariivesIn = ariivesIn;
            this.driveTrainGeo = driveTrainGeo;
            this.driveTrainEng = driveTrainEng;
            this.fuelTypeGeo = fuelTypeGeo;
            this.fuelTypeEng =fuelTypeEng;
            this.transmissionGeo = transmissionGeo;
            this.transmissionEng = transmissionEng;
    }
}


