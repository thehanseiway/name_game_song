
    //Constructor name letters and testing
    function Song(name) {
        this.name = name;
        var nameSufix = this.name.slice(1);
        var fnameLetter = this.name.slice(0,1).toLowerCase();
        var bfm = function () {
           var bfmLetters = ["b","f","m"];
           for ( var i = 0; i < bfmLetters.length; i+=1) {
                if ( bfmLetters[i] === fnameLetter ) {
                    bfmLetters[i] = "";
                }
            }
            return bfmLetters;
        };
        var isVowel = function () {
           var letterVowelTest = /[aeiouy]/i;
           if ( letterVowelTest.test(fnameLetter) ) {
                nameSufix = fnameLetter + nameSufix;
           }
           return letterVowelTest.test(fnameLetter);
        };
       var song = function (bLetter, fLetter, mLetter) {
            bLetter = bLetter || '';
            fLetter = fLetter || '';
            mLetter = mLetter || '';
            //Test if first letter of name is the same as b,f,m
            return this.name + ", " + this.name + ", bo-"+ bLetter + nameSufix + ",\n" +
            "Banana-fana fo-" + fLetter + nameSufix + "\n" +
            "Fee-fi-mo-"+ mLetter + nameSufix + "\n" +
            this.name + "!";
        };
        this.songPlay = function () {
            isVowel();
            console.log( song.apply(this, bfm()) );
        };
    }
    var katie = new Song("Katie"),
        maximus = new Song("Maximus"),
        bart = new Song("Bart"),
        fred = new Song("Fred");

    //Start Sing
    katie.songPlay();
    maximus.songPlay();
    bart.songPlay();
    fred.songPlay();
