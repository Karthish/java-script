$( document ).ready(function() {
    var list = [];
    // *************************VIEW*********************

       // Add-task
    $('#add-task').click(function() {
        validation();
        tasks_array();
        render();
    });

    // completed task
    $('#task-list > li').on('click','.btn-done',function(){
        taskStatus();
    });


    var render = function() {
        for(var i=0;i<list.length;i++) {
            for(var j=0;j<list.length;j++) {
                $('#task-list > li').eq(i).remove();
            }
            $('#task-list').append('<li><div class="usertask">' + list[i].task + 
            '</div><button class="btn-done">completed</button><button>delete</delete></li>');
        }
    }

// ************************CONTROLLER**********************

     // append task to list
    var crrTask = function() {
        var taskName = $('#user-value').val();
        return taskName;
    }

    // input validation
    var validation = function() {
        var inputVal = $('#user-value').val();
        if($('#user-value').val().length == 0 || inputVal.trim() == '') {
            alert("can't add empty task");
            $('#user-value').val('');
        }

        else {
            crrTask();
        }
    }

    // task status
    var taskStatus = function() {
        
    }
// ***************************MODEL***************************

    var tasks_array = function(){
        var usrval = crrTask();
        var obj = {
            task : usrval,
            completed : false
        }
        list.push(obj);
        console.log(list);
    }




});