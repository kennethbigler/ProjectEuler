/*global console*/
/*jslint continue:true*/

/*  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *  Find the sum of all the multiples of 3 or 5 below 1000. */
function multiples35(end) {
    "use strict";
    var i = 0,
        result = 0;
    
    // sanatize input
    end = parseInt(end, 10);
    if (isNaN(end)) {
        end = 1000;
    }
    
    for (i = 0; i < end; i += 1) {
        if ((i % 3) === 0 || (i % 5) === 0) {
            result += i;
        }
    }
    return result;
}

/*  Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
 *  1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 *  By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms. */
function evenFib(a, b, sum) {
    "use strict";
    var end = 4000000,
        current = a + b,
        result = 0;
    //console.log(current + ", " + sum);
    if (current > end) {
        return sum;
    } else if (current % 2 === 0) {
        result = evenFib(b, current, sum + current);
    } else {
        result = evenFib(b, current, sum);
    }
    return result;
}
function startEvenFib(end) {
    "use strict";
    var result = evenFib(1, 1, 0);
    return result;
}

/*  The prime factors of 13195 are 5, 7, 13 and 29.
 *  What is the largest prime factor of the number 600851475143 ? */
function largestPrimeFactor(n) {
    "use strict";
    var factors = [],
        i = 0;
    while (n % 2 === 0) {
        if (factors.indexOf(2) === -1) {
            factors.push(2);
        }
        n = n / 2;
    }
    for (i = 3; i < Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            if (factors.indexOf(i) === -1) {
                factors.push(i);
            }
            n = n / i;
        }
    }
    if (n > factors[factors.length - 1]) {
        return n;
    }
    return factors.pop;
}

/*  A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 *  Find the largest palindrome made from the product of two 3-digit numbers. */
function largestPalendrome(end) {
    "use strict";
    var i, j, k, product, palendromes = [];
    
    // sanatize input
    end = parseInt(end, 10);
    if (isNaN(end)) {
        end = 999;
    }
    
    // start at end and iterate down
    for (i = end; i > 0; i -= 1) {
        for (j = end; j > 0; j -= 1) {
            // check for palendrome
            product = (i * j).toString();
            for (k = 0; k < product.length / 2; k += 1) {
                if (product[k] !== product[product.length - k - 1]) {
                    break;
                }
            }
            if (k === (product.length / 2)) {
                palendromes.push(parseInt(product, 10));
            }
        }
    }
    product = 0;
    for (i = 0; i < palendromes.length; i += 1) {
        if (palendromes[i] > product) {
            product = palendromes[i];
        }
    }
    return product;
}

/*  2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 *  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20? */
function smallestDividingNumber(end) {
    "use strict";
    var i, n;
    
    // sanatize input
    end = parseInt(end, 10);
    if (isNaN(end)) {
        end = 20;
    }
    
    n = end;
    while (true) {
        for (i = end; i > end / 2; i -= 1) {
            if (n % i !== 0) {
                break;
            }
        }
        if (i === end / 2) {
            return n;
        }
        n += end;
    }
}

/*  The sum of the squares of the first ten natural numbers is,
 *      1^2 + 2^2 + ... + 10^2 = 385
 *  The square of the sum of the first ten natural numbers is,
 *      (1 + 2 + ... + 10)^2 = 55^2 = 3025
 *  Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
 *  Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum. */
function findSquaredSumDif(end) {
    "use strict";
    var i,
        sumSquared = 0,
        squaredSum = 0;
    
    // sanatize input
    end = parseInt(end, 10);
    if (isNaN(end)) {
        end = 100;
    }
    
    for (i = 1; i <= end; i += 1) {
        sumSquared += i;
        squaredSum += (i * i);
    }
    sumSquared *= sumSquared;
    return sumSquared - squaredSum;
}

/*  By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 *  What is the 10,001st prime number? */
function isPrime(n) {
    "use strict";
    var i;
    for (i = 2; i <= Math.sqrt(n); i += 1) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function findXPrimeNumber(end) {
    "use strict";
    var n = 2,
        counter = 0;
    
    // sanatize input
    end = parseInt(end, 10);
    if (isNaN(end)) {
        end = 10001;
    }
    
    while (true) {
        if (isPrime(n)) {
            counter += 1;
        }
        if (counter === end) {
            return n;
        }
        n += 1;
    }
}

/*  The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.
 *
 *  Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product? */
function maxAdjacentProduct(end) {
    "use strict";
    var i,
        flag = 0,
        result = 1,
        product = 1,
        number = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
    
    // sanatize input
    end = parseInt(end, 10);
    if (isNaN(end)) {
        end = 13;
    }
    
    // set up initial number
    for (i = 0; i < end; i += 1) {
        product *= parseInt(number[i], 10);
    }
    result = product;
    // iterate through looking for windows without 0s finding max
    for (i = 0; i < number.length - end; i += 1) {
        if (number[i + end] === "0") {
            flag = end;
        }
        if (number[i] === "0" && number[i + end] !== "0") {
            product *= parseInt(number[i + end], 10);
        } else if (number[i + end] === "0" && number[i] !== "0") {
            product /= parseInt(number[i], 10);
        } else if (number[i + end] !== "0" && number[i] !== "0") {
            product /= parseInt(number[i], 10);
            product *= parseInt(number[i + end], 10);
            if (product > result && flag <= 0) {
                result = product;
            }
        }
        flag -= 1;
    }
    return result;
}

/*  A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 *      a^2 + b^2 = c^2
 *      For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 *  There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 *  Find the product abc. */
function findPTriplet(a, b) {
    "use strict";
    var i, j, c, e;
    c = Math.sqrt((a * a) + (b * b));
    e = a + b + c;
    //console.log("a: " + a + ", b: " + b + ", c: " + c + ", e: " + e);
    if (e === 1000) {
        return a * b * c;
    }
    for (i = a + 1; i < 400; i += 1) {
        for (j = 2; j < 401; j += 1) {
            if (Math.sqrt((i * i) + (j * j)) % 1 === 0) {
                return findPTriplet(i, j);
            }
        }
    }
}

function startFindPTriplet() {
    "use strict";
    return findPTriplet(0, 1);
}

/*  The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *  Find the sum of all the primes below two million. */
function findXPrimeNumber(end) {
    "use strict";
    var n = 2,
        sum = 0;
    
    // sanatize input
    end = parseInt(end, 10);
    if (isNaN(end)) {
        end = 2000000;
    }
    
    while (n < end) {
        if (isPrime(n)) {
            sum += n;
        }
        n += 1;
    }
    return sum;
}

/*  In the 20×20 grid below, four numbers along a diagonal line have been marked in red.
 *
 *  The product of these numbers is 26 × 63 × 78 × 14 = 1788696.
 *  What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20×20 grid? */
function findGridMaxProduct() {
    "use strict";
    var i, j, k, max,
        grid = [[8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
                [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
                [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
                [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
                [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
                [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
                [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
                [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
                [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
                [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
                [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
                [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
                [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
                [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
                [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
                [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
                [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
                [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
                [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
                [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
            ],
        lrProduct = 1, udProduct = 1, lrudProduct = 1, lrduProduct = 1, end = 4, result = 0;

    // go through y
    for (i = 0; i < grid.length; i += 1) {
        // go through x
        for (j = 0; j < grid[i].length; j += 1) {
            // go through length (4)
            lrProduct = udProduct = lrudProduct = lrduProduct = 1;
            for (k = 0; k < end; k += 1) {
                // left and right
                if (j < grid[i].length - end) {
                    lrProduct *= grid[i][j + k];
                }
                // up and down
                if (i < grid.length - end) {
                    udProduct *= grid[i + k][j];
                }
                // left -> right, up -> down
                if ((j < grid[i].length - end) && (i < grid.length - end)) {
                    lrudProduct *= grid[i + k][j + k];
                }
                // left -> right, down -> up
                if ((j < grid[i].length - end) && (i >= end - 1)) {
                    lrduProduct *= grid[i - k][j + k];
                }
            }
            //console.log("lr: " + lrProduct + ", ud: " + udProduct + ", lrud: " + lrudProduct + ", lrdu: " + lrduProduct);
            k = (lrProduct > udProduct) ? lrProduct : udProduct;
            max = (lrudProduct > lrduProduct) ? lrudProduct : lrduProduct;
            max = (max > k) ? max : k;
            result = (result > max) ? result : max;
        }
    }
    return result;
}

/*  The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:
 *      1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
 *  Let us list the factors of the first seven triangle numbers:
 *       1: 1
 *       3: 1,3
 *       6: 1,2,3,6
 *      10: 1,2,5,10
 *      15: 1,3,5,15
 *      21: 1,3,7,21
 *      28: 1,2,4,7,14,28
 *  We can see that 28 is the first triangle number to have over five divisors.
 *  What is the value of the first triangle number to have over five hundred divisors? */
function numDivisors(n) {
    "use strict";
    var i, result = 0;
    for (i = 1; i <= Math.sqrt(n); i += 1) {
        if (i === Math.sqrt(n)) {
            result += 1;
        } else if (n % i === 0) {
            result += 2;
        }
    }
    return result;
}
function findTriNumXDivisors(end) {
    "use strict";
    var i = 1,
        divisors = 0,
        triangleNumber = 0;
    
    // sanatize input
    end = parseInt(end, 10);
    if (isNaN(end)) {
        end = 500;
    }
    
    while (divisors <= end) {
        triangleNumber += i;
        divisors = numDivisors(triangleNumber);
        i += 1;
        //console.log(triangleNumber + ": " + divisors);
    }
    return triangleNumber;
}

/*  Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.
 *  see array below for numbers */

function firstTenSum() {
    "use strict";
    var i, sum = 0,
        numbers = [
            37107287533902102798797998220837590246510135740250, 46376937677490009712648124896970078050417018260538, 74324986199524741059474233309513058123726617309629, 91942213363574161572522430563301811072406154908250,
            23067588207539346171171980310421047513778063246676, 89261670696623633820136378418383684178734361726757, 28112879812849979408065481931592621691275889832738, 44274228917432520321923589422876796487670272189318,
            47451445736001306439091167216856844588711603153276, 70386486105843025439939619828917593665686757934951, 62176457141856560629502157223196586755079324193331, 64906352462741904929101432445813822663347944758178,
            92575867718337217661963751590579239728245598838407, 58203565325359399008402633568948830189458628227828, 80181199384826282014278194139940567587151170094390, 35398664372827112653829987240784473053190104293586,
            86515506006295864861532075273371959191420517255829, 71693888707715466499115593487603532921714970056938, 54370070576826684624621495650076471787294438377604, 53282654108756828443191190634694037855217779295145,
            36123272525000296071075082563815656710885258350721, 45876576172410976447339110607218265236877223636045, 17423706905851860660448207621209813287860733969412, 81142660418086830619328460811191061556940512689692,
            51934325451728388641918047049293215058642563049483, 62467221648435076201727918039944693004732956340691, 15732444386908125794514089057706229429197107928209, 55037687525678773091862540744969844508330393682126,
            18336384825330154686196124348767681297534375946515, 80386287592878490201521685554828717201219257766954, 78182833757993103614740356856449095527097864797581, 16726320100436897842553539920931837441497806860984,
            48403098129077791799088218795327364475675590848030, 87086987551392711854517078544161852424320693150332, 59959406895756536782107074926966537676326235447210, 69793950679652694742597709739166693763042633987085,
            41052684708299085211399427365734116182760315001271, 65378607361501080857009149939512557028198746004375, 35829035317434717326932123578154982629742552737307, 94953759765105305946966067683156574377167401875275,
            88902802571733229619176668713819931811048770190271, 25267680276078003013678680992525463401061632866526, 36270218540497705585629946580636237993140746255962, 24074486908231174977792365466257246923322810917141,
            91430288197103288597806669760892938638285025333403, 34413065578016127815921815005561868836468420090470, 23053081172816430487623791969842487255036638784583, 11487696932154902810424020138335124462181441773470,
            63783299490636259666498587618221225225512486764533, 67720186971698544312419572409913959008952310058822, 95548255300263520781532296796249481641953868218774, 76085327132285723110424803456124867697064507995236,
            37774242535411291684276865538926205024910326572967, 23701913275725675285653248258265463092207058596522, 29798860272258331913126375147341994889534765745501, 18495701454879288984856827726077713721403798879715,
            38298203783031473527721580348144513491373226651381, 34829543829199918180278916522431027392251122869539, 40957953066405232632538044100059654939159879593635, 29746152185502371307642255121183693803580388584903,
            41698116222072977186158236678424689157993532961922, 62467957194401269043877107275048102390895523597457, 23189706772547915061505504953922979530901129967519, 86188088225875314529584099251203829009407770775672,
            11306739708304724483816533873502340845647058077308, 82959174767140363198008187129011875491310547126581, 97623331044818386269515456334926366572897563400500, 42846280183517070527831839425882145521227251250327,
            55121603546981200581762165212827652751691296897789, 32238195734329339946437501907836945765883352399886, 75506164965184775180738168837861091527357929701337, 62177842752192623401942399639168044983993173312731,
            32924185707147349566916674687634660915035914677504, 99518671430235219628894890102423325116913619626622, 73267460800591547471830798392868535206946944540724, 76841822524674417161514036427982273348055556214818,
            97142617910342598647204516893989422179826088076852, 87783646182799346313767754307809363333018982642090, 10848802521674670883215120185883543223812876952786, 71329612474782464538636993009049310363619763878039,
            62184073572399794223406235393808339651327408011116, 66627891981488087797941876876144230030984490851411, 60661826293682836764744779239180335110989069790714, 85786944089552990653640447425576083659976645795096,
            66024396409905389607120198219976047599490197230297, 64913982680032973156037120041377903785566085089252, 16730939319872750275468906903707539413042652315011, 94809377245048795150954100921645863754710598436791,
            78639167021187492431995700641917969777599028300699, 15368713711936614952811305876380278410754449733078, 40789923115535562561142322423255033685442488917353, 44889911501440648020369068063960672322193204149535,
            41503128880339536053299340368006977710650566631954, 81234880673210146739058568557934581403627822703280, 82616570773948327592232845941706525094512325230608, 22918802058777319719839450180888072429661980811197,
            77158542502016545090413245809786882778948721859617, 72107838435069186155435662884062257473692284509516, 20849603980134001723930671666823555245252804609722, 53503534226472524250874054075591789781264330331690];
    for (i = 0; i < numbers.length; i += 1) {
        sum += numbers[i];
    }
    console.log(sum);
    sum = sum.toString();
    sum = sum.substring(0, 1) + sum.substring(2, 11);
    return sum;
}

/* The following iterative sequence is defined for the set of positive integers:
 *   n → n/2 (n is even)
 *   n → 3n + 1 (n is odd)
 * Using the rule above and starting with 13, we generate the following sequence:
 *        13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 * It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
 * Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
 * Which starting number, under one million, produces the longest chain?
 * NOTE: Once the chain starts the terms are allowed to go above one million. */
function collatz(n, c) {
    "use strict";
    c += 1;
    if (n === 1) {
        return c;
    }
    if (n % 2 === 0) {
        return collatz(n / 2, c);
    } else {
        return collatz(3 * n + 1, c);
    }
}

function findLongestCSequence(end) {
    "use strict";
    var i, result, temp, max = 0;
    
    // sanatize input
    end = parseInt(end, 10);
    if (isNaN(end)) {
        end = 1000000;
    }
    
    for (i = 1; i < end; i += 1) {
        temp = collatz(i, 0);
        if (temp > max) {
            max = temp;
            result = i;
        }
    }
    return result;
}

/* Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
 * How many such routes are there through a 20×20 grid? */
function findEnd(x, y, max, count) {
    "use strict";
    if (x === max && y === max) {
        if (count % 1000000000 === 0) {
            console.log(count);
        }
        return count + 1;
    }
    if (x < max) {
        count = findEnd(x + 1, y, max, count);
    }
    if (y < max) {
        count = findEnd(x, y + 1, max, count);
    }
    return count;
}

function numGridPaths(n) {
    "use strict";
    // sanatize input
    n = parseInt(n, 10);
    if (isNaN(n)) {
        n = 20;
    }
    return findEnd(0, 0, n, 0);
}

/* solution found online in python and translated
 * 1. S[i][j] = 1                      if j = 0
 * 2. S[i][j] = S[i][j-1] + S[i-1][j]  if 0 < j < i
 * 3. S[i][j] = 2 * S[i][j-1]          if i = j     */
function dynNumGridPaths(n) {
    "use strict";
    var i, j, result = [];
    
    // sanatize input
    n = parseInt(n, 10);
    if (isNaN(n)) {
        n = 20;
    }
    
    // 1. S[i][j] = 1  if j = 0
    for (i = 0; i < n; i += 1) {
        result[i] = 1;
    }
    
    for (i = 1; i <= n; i += 1) {
        // 2. S[i][j] = S[i][j-1] + S[i-1][j]  if 0 < j < i
        for (j = 1; j < i; j += 1) {
            result[j] = result[j - 1] + result[j];
        }
        // 3. S[i][j] = 2 * S[i][j-1]  if i = j
        result[i] = 2 * result[i - 1];
    }
    //console.log(result);
    return result[n];
}

/* 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 * What is the sum of the digits of the number 2^1000? */
function sumTwoHighPower(end) {
    "use strict";
    var i, j, result = 0,
        carry = 0,
        exp = [1];
    
    // sanatize input
    end = parseInt(end, 10);
    if (isNaN(end)) {
        end = 1000;
    }
    
    // iterate to exponent times
    for (i = 0; i < end; i += 1) {
        // iterate through array multiplying by 2
        for (j = 0; j < exp.length; j += 1) {
            exp[j] *= 2;
            exp[j] += carry;
            carry = 0;
            if (exp[j] >= 10) {
                exp[j] %= 10;
                carry = 1;
                if (exp[j + 1] === undefined) {
                    exp[j + 1] = 1;
                    carry = 0;
                    break;
                }
            }
        }
        //console.log(exp);
    }
    
    for (i = 0; i < exp.length; i += 1) {
        result += exp[i];
    }
    
    return result;
}

/* If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
 *
 * NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters.
 * The use of "and" when writing out numbers is in compliance with British usage. */
function translateSum(end) {
    "use strict";
    // 21-30, 27-90, 28 00
    var num, i, j, result = 0,
        translate = [4, 3, 3, 5, 4, 4, 3, 5, 5, 4, 3, 6, 6, 8, 8, 7, 7, 9, 8, 8, 6, 6, 5, 5, 5, 7, 6, 6];
    
    // sanatize input
    end = parseInt(end, 10);
    if (isNaN(end)) {
        end = 1000;
    }
    
    // iterate through all numbers <= 1000
    for (i = 1; i <= end; i += 1) {
        // thousands case
        if (i === 1000) {
            result += 11;
            break;
        }
        // hundreds case
        if (i >= 100) {
            num = i.toString();
            num = parseInt(num[0], 10);
            // number + hundred
            result += (translate[num] + 7);
            // check for "and"
            if (i % 100 !== 0) {
                result += 3;
            }
        }
        j = i % 100;
        if (j >= 20) {
            num = j.toString();
            num = parseInt(num[0], 10);
            result += translate[num + 18];
            j = j % 10;
        }
        if (j > 0) {
            result += translate[j];
        }
        //console.log(result);
    }
    return result;
}

/* By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

   3
  7 4
 2 4 6
8 5 9 3

* That is, 3 + 7 + 4 + 9 = 23.
* Find the maximum total from top to bottom of the triangle below:

                     75
                   95  64
                  17 47 82
                18 35  87 10
               20 04 82 47 65
             19 01 23  75 03 34
            88 02 77 73 07 63 67
          99 65 04 28  06 16 70 92
         41 41 26 56 83 40 80 70 33
       41 48 72 33 47  32 37 16 94 29
      53 71 44 65 25 43 91 52 97 51 14
    70 11 33 28 77 73  17 78 39 68 17 57
   91 71 52 38 17 14 91 43 58 50 27 29 48
 63 66 04 68 89 53 67  30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

* NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route.
* However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o) */

function longestPath() {
    "use strict";
    var i, j, a, b, triangle = [[75],
                                [95, 64],
                                [17, 47, 82],
                                [18, 35, 87, 10],
                                [20, 4, 82, 47, 65],
                                [19, 1, 23, 75, 3, 34],
                                [88, 2, 77, 73, 7, 63, 67],
                                [99, 65, 4, 28, 6, 16, 70, 92],
                                [41, 41, 26, 56, 83, 40, 80, 70, 33],
                                [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
                                [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
                                [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
                                [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
                                [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
                                [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]];
    
    for (i = triangle.length - 2; i >= 0; i -= 1) {
        for (j = 0; j < triangle[i].length; j += 1) {
            a = triangle[i][j] + triangle[i + 1][j];
            b = triangle[i][j] + triangle[i + 1][j + 1];
            triangle[i][j] = (a > b) ? a : b;
        }
    }
    // console.log(triangle);
    return triangle[0][0];
}

/* You are given the following information, but you may prefer to do some research for yourself.
 *  1 Jan 1900 was a Monday.
 *  Thirty days has September,
 *  April, June and November.
 *  All the rest have thirty-one,
 *  Saving February alone,
 *  Which has twenty-eight, rain or shine.
 *  And on leap years, twenty-nine.
 *  A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
 * How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)? */
// NOTES: 364 Days in 52 weeks, 365 in year, 366 in leap year
function x(end) {
    "use strict";
    var i;
    
    // sanatize input
    end = parseInt(end, 10);
    if (isNaN(end)) {
        end = 1000;
    }
}



function x(end) {
    "use strict";
    var i;
    
    // sanatize input
    end = parseInt(end, 10);
    if (isNaN(end)) {
        end = 1000;
    }
}




function x(end) {
    "use strict";
    var i;
    
    // sanatize input
    end = parseInt(end, 10);
    if (isNaN(end)) {
        end = 1000;
    }
}




function x(end) {
    "use strict";
    var i;
    
    // sanatize input
    end = parseInt(end, 10);
    if (isNaN(end)) {
        end = 1000;
    }
}






