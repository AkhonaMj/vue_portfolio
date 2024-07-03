<template lang="">
    <div>
        <footer><p>&copy; Akhona Mjikelo {{currentYear}}| All rights reserved</p></footer>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentYear: new Date().getFullYear()

        }
    },
    
}
</script>
<style>
footer{
    background-color: #ffffff;
}

</style>