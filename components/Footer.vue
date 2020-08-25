<template>
    <footer :class="className">
        <div class="container">
            <div class="row no-gutters">
                <div class="col-lg-6 col-sm-6">
                    <p class="mt-1 mb-0">
                        &copy; 2020 <strong class="text-dark">Plaive</strong>. {{$t('allRightsReserved')}}<br>
                        <small class="mt-0 mb-0">
                            <a class="text-primary" target="_blank" href="#">{{$t('privacyPolicy')}}</a>
                            <a class="text-primary" target="_blank" href="#">{{$t('tos')}}</a>
                        </small>
                    </p>
                </div>
                <div class="col-lg-6 col-sm-6 text-right">
                    <div class="app">
                        <a href="#"><img alt="" src="@/assets/img/google.png"></a>
                        <a href="#"><img alt="" src="@/assets/img/apple.png"></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    props: ["className"]
}
</script>