$(document).ready(function () {
    var cars = {
        // 1st car array
        1: {
            model: "Toyota Grande", 
            price: "$40,000", 
            year: "2025", 
            keyfeatures: "Spacious interior with premium leather seats <br> Advanced infotainment system with touchscreen display <br> Powerful 2.5L engine with smooth transmission <br> Advanced safety features, including lane departure warning and blind spot monitoring <br>", 
            design: "The Toyota Grande boasts a sleek and sophisticated design, with a bold front grille, LED headlights, and a stylish rear bumper.", 
            performance: "The Toyota Grande delivers a smooth and responsive driving experience, with a powerful engine and precise handling.", 
            interior: "The interior of the Toyota Grande is designed for comfort and convenience, with premium leather seats, ample legroom, and advanced technology features.", 
            engine: "2.5L 4-Cylinder", 
            transmission: "6-Speed Automatic", 
            drivetype: "Front-Wheel Drive", 
            seatingcapacity: "5 Passengers",
            image: "assests/images/toyota/grande.jpg" // Add image path
        },
        // 2nd car array
        2: {
            model: "Toyota Fortuner", 
            price: "$35,000", 
            year: "2023", 
            keyfeatures: "Spacious interior with premium leather seats <br> Advanced infotainment system with touchscreen display <br> Powerful 2.5L engine with smooth transmission <br> Advanced safety features, including lane departure warning and blind spot monitoring <br>", 
            design: "The Toyota Fortuner boasts a bold and rugged design, with a prominent front grille, LED headlights, and a stylish rear bumper.", 
            performance: "The Toyota Fortuner delivers a smooth and responsive driving experience, with a powerful engine and precise handling.", 
            interior: "The interior of the Toyota Fortuner is designed for comfort and convenience, with premium leather seats, ample legroom, and advanced technology features.", 
            engine: "2.7L Petrol or 2.4L Diesel", 
            transmission: "6-Speed Automatic or 6-Speed Manual", 
            drivetype: "4x4", 
            seatingcapacity: "7 Passengers",
            image: "assests/images/toyota/fortuner.jpg" // Add image path
        },
        // 3rd car array
        3: {
            model: "Toyota Hilux", 
            price: "$25,000", 
            year: "2024", 
            keyfeatures: "Spacious interior with premium leather seats <br> Advanced infotainment system with touchscreen display <br> Powerful 2.5L engine with smooth transmission <br> Advanced safety features, including lane departure warning and blind spot monitoring <br>", 
            design: "Toyota Hilux ka design bold aur rugged hai, jisme prominent front grille, LED headlights, aur stylish rear bumper hai.", 
            performance: "Toyota Hilux driving experience smooth aur responsive hai, jisme powerful engine aur precise handling hai.", 
            interior: "The interior of the Toyota Grande is designed for comfort and convenience, with premium leather seats, ample legroom, and advanced technology features.", 
            engine: "2.5L 4-Cylinder", 
            transmission: "6-Speed Automatic or 6-Speed Manual", 
            drivetype: "4x4", 
            seatingcapacity: "5 Passengers",
            image: "assests/images/toyota/hillix.jpg" // Add image path
            
        },
        // 4th car array
        4: {
            model: "Honda City", 
            price: "$25,000", 
            year: "2024", 
            keyfeatures: "Spacious interior with premium leather seats <br> Advanced infotainment system with touchscreen display <br> Powerful 2.5L engine with smooth transmission <br> Advanced safety features, including lane departure warning and blind spot monitoring <br>", 
            design: "Honda City ka design sleek aur modern hai, jisme prominent front grille, LED headlights, aur stylish rear bumper hai.", 
            performance: "Honda City driving experience smooth aur responsive hai, jisme powerful engine aur precise handling hai.", 
            interior: "Honda City ka interior comfort aur convenience ke liye design kiya gaya hai, jisme premium features, ample legroom, aur advanced technology hai.", 
            engine: "1.5L i-VTEC Petrol", 
            transmission: "CVT with Paddle Shifters", 
            drivetype: "Front-Wheel Drive", 
            seatingcapacity: "5 Passengers",
            image: "assests/images/honda/city.jpg" // Add image path
        },
        // 5th car array
        5: {
            model: "Honda Civic", 
            price: "$25,000", 
            year: "2024", 
            keyfeatures: "Spacious interior with premium leather seats <br> Advanced infotainment system with touchscreen display <br> Powerful 2.5L engine with smooth transmission <br> Advanced safety features, including lane departure warning and blind spot monitoring <br>", 
            design: "Honda Civic ka design sleek aur modern hai, jisme prominent front grille, LED headlights, aur stylish rear bumper hai.", 
            performance: "Honda Civic driving experience smooth aur responsive hai, jisme powerful engine aur precise handling hai.", 
            interior: "Honda Civic ka interior comfort aur convenience ke liye design kiya gaya hai, jisme premium features, ample legroom, aur advanced technology hai.", 
            engine: "1.8L i-VTEC Petrol", 
            transmission: "CVT with Paddle Shifters", 
            drivetype: "Front-Wheel Drive", 
            seatingcapacity: "5 Passengers",
            image: "assests/images/honda/civic.jpeg" // Add image path
        },
        // 6th car array
        6: {
            model: "Honda Grace", 
            price: "$25,000", 
            year: "2024", 
            keyfeatures: "Spacious interior with premium leather seats <br> Advanced infotainment system with touchscreen display <br> Powerful 2.5L engine with smooth transmission <br> Advanced safety features, including lane departure warning and blind spot monitoring <br>", 
            design: "Honda Grace ka design sleek aur modern hai, jisme prominent front grille, LED headlights, aur stylish rear bumper hai.", 
            performance: "Honda Grace driving experience smooth aur responsive hai, jisme powerful engine aur precise handling hai.", 
            interior: "Honda Grace ka interior comfort aur convenience ke liye design kiya gaya hai, jisme premium features, ample legroom, aur advanced technology hai.", 
            engine: "1.5L i-VTEC Petrol", 
            transmission: "CVT with Paddle Shifters", 
            drivetype: "Front-Wheel Drive", 
            seatingcapacity: "5 Passengers",
            image: "assests/images/honda/grace.jpg" // Add image path
        },
        // 7th car array
        7: {
            model: "Suzuki Swift", 
            price: "$25,000", 
            year: "2024", 
            keyfeatures: "Spacious interior with premium leather seats <br> Advanced infotainment system with touchscreen display <br> Powerful 2.5L engine with smooth transmission <br> Advanced safety features, including lane departure warning and blind spot monitoring <br>", 
            design: "Maruti Suzuki Swift ka design sleek aur modern hai, jisme prominent front grille, halogen headlights, aur stylish rear bumper hai.", 
            performance: "Maruti Suzuki Swift driving experience smooth aur responsive hai, jisme powerful engine aur precise handling hai.", 
            interior: "Maruti Suzuki Swift ka interior comfort aur convenience ke liye design kiya gaya hai, jisme premium features, ample legroom, aur advanced technology hai.", 
            engine: "1.2L K-Series Petrol", 
            transmission: "5-Speed Manual aur AMT", 
            drivetype: "Front-Wheel Drive", 
            seatingcapacity: "5 Passengers",
            image: "assests/images/suzuki/suzuki swift new.jpg" // Add image path
        },
        // 8th car object
        8: {
            model: "Suzuki Breeza", 
            price: "$25,000", 
            year: "2024", 
            keyfeatures: "Spacious interior with premium leather seats <br> Advanced infotainment system with touchscreen display <br> Powerful 2.5L engine with smooth transmission <br> Advanced safety features, including lane departure warning and blind spot monitoring <br>", 
            design: "Maruti Suzuki Brezza ka design sleek aur modern hai, jisme prominent front grille, LED headlights, aur stylish rear bumper hai.", 
            performance: "Maruti Suzuki Brezza driving experience smooth aur responsive hai, jisme powerful engine aur precise handling hai.", 
            interior: "Maruti Suzuki Brezza ka interior comfort aur convenience ke liye design kiya gaya hai, jisme premium features, ample legroom, aur advanced technology hai.", 
            engine: "1.5L K-Series Petrol", 
            transmission: "5-Speed Manual aur 4-Speed Automatic", 
            drivetype: "Front-Wheel Drive", 
            seatingcapacity: "5 Passengers",
            image: "assests/images/suzuki/suzuki breeza.jpg" // Add image path
        },
        // 9th car object
        9: {
            model: "Suzuki Alto", 
            price: "$25,000", 
            year: "2024", 
            keyfeatures: "Spacious interior with premium leather seats <br> Advanced infotainment system with touchscreen display <br> Powerful 2.5L engine with smooth transmission <br> Advanced safety features, including lane departure warning and blind spot monitoring <br>", 
            design: "Maruti Suzuki Alto ka design sleek aur modern hai, jisme prominent front grille, halogen headlights, aur stylish rear bumper hai.", 
            performance: "Maruti Suzuki Alto driving experience smooth aur responsive hai, jisme powerful engine aur precise handling hai.", 
            interior: "Maruti Suzuki Alto ka interior comfort aur convenience ke liye design kiya gaya hai, jisme premium features, ample legroom, aur advanced technology hai.", 
            engine: "0.8L Petrol", 
            transmission: "5-Speed Manual", 
            drivetype: "Front-Wheel Drive", 
            seatingcapacity: "5 Passengers",
            image: "assests/images/suzuki/suzuki alto new new.jpeg" // Add image path
        }
    };
    

    $('#compareButton').on('click', function () {
        var car1Id = $('#car1').val();
        var car2Id = $('#car2').val();
    
        if (car1Id && car2Id && car1Id !== car2Id) {
            // Fill in comparison data
            $('#car1-model').text(cars[car1Id].model);
            $('#car2-model').text(cars[car2Id].model);
            $('#car1-price').text(cars[car1Id].price);
            $('#car2-price').text(cars[car2Id].price);
            $('#car1-year').text(cars[car1Id].year);
            $('#car2-year').text(cars[car2Id].year);
            $('#car1-keyfeatures').text(cars[car1Id].keyfeatures);
            $('#car2-keyfeatures').text(cars[car2Id].keyfeatures);
            $('#car1-design').text(cars[car1Id].design);
            $('#car2-design').text(cars[car2Id].design);
            $('#car1-performance').text(cars[car1Id].performance);
            $('#car2-performance').text(cars[car2Id].performance);
            $('#car1-interior').text(cars[car1Id].interior);
            $('#car2-interior').text(cars[car2Id].interior);
            $('#car1-engine').text(cars[car1Id].engine);
            $('#car2-engine').text(cars[car2Id].engine);
            $('#car1-transmission').text(cars[car1Id].transmission);
            $('#car2-transmission').text(cars[car2Id].transmission);
            $('#car1-drivetype').text(cars[car1Id].drivetype);
            $('#car2-drivetype').text(cars[car2Id].drivetype);
            $('#car1-seatingcapacity').text(cars[car1Id].seatingcapacity);
            $('#car2-seatingcapacity').text(cars[car2Id].seatingcapacity);
            
            // Show images
            $('#car1-image').html('<img src="' + cars[car1Id].image + '" alt="' + cars[car1Id].model + '" class="car-image">');
            $('#car2-image').html('<img src="' + cars[car2Id].image + '" alt="' + cars[car2Id].model + '" class="car-image">');
    
            // Show the comparison result
            $('.comparison-result').show();
        } else {
            alert('Please select two different cars to compare.');
        }
    });
    
});

