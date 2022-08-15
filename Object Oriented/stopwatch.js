// create a stopwatch object
// it will have duration as property
// it will have 3 methods reset, start and stop
// start method will be used to start the stopwatch, start method cannot be invoked back to back twice
// stop method will be used to stop the stopwatch, stop method cannot be invoked back to back twice
// duration property will have the duration of the time the stopwatch has run
// reset method can take the stopwatch to initial state 

function Stopwatch(){

    let begin, end, running, duration = 0;

    this.start = function(){
        // checking if the stopwatch already running or not
        if (running){
            throw new Error('Stopwatch already runnin');
        }
        running = true;
        begin = new Date();
    };

    this.stop = function(){
        // checking if the stopwatch already stopped or not
        if(!running){
            throw new Error('Stopwatch is not runnin');
        }
        running = false;
        end = new Date();

        // adding the duration in seconds
        duration = (end - begin)/1000;
    };

    this.reset = function(){
        begin=null; 
        end=null; 
        running=false; 
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() {return duration}
    });
}

sw = new Stopwatch();