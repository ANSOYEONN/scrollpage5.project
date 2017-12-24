            console.log("volume has changed to " + vol);
        }else{
            console.log("sound has not been loaded yet");
        }
        
    }

    function startDraw(){
        lch =  new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(lch);
                
        rch =  new Uint8Array(analyser2.frequencyBinCount);
        analyser2.getByteFrequencyData(rch);
    }

    function stopSound(){
        if(sourceNode){
            sourceNode.stop(0);
            console.log("stopped at:" + audioContext.currentTime);
            stopStamp = audioContext.currentTime;
            javascriptNode.removeEventListener('audioprocess', startDraw);
        }
    }

    function pauseSound(){
        sourceNode.stop(0);
        console.log("paused at:" + audioContext.currentTime);
        stopStamp = audioContext.currentTime;
        javascriptNode.removeEventListener('audioprocess', startDraw);
        paused = true;
    }

    function sDraw(){
        lch = new Uint8Array(analyser.fftSize);
        analyser.getByteTimeDomainData(array);

        rch = new Uint8Array(analyser2.fftSize);
        analyser2.getByteTimeDomainData(array2);  
    }

    var onError = function(e){
        console.log(e);
    }
}
