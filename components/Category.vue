<template>
  <div>
    <a
      class="list-group-item  t-font-boldest border-0"
      style="padding: 0.40rem 0.5rem;" id="list-settings-list"
      data-toggle="tab"
      href="#index-Category-1"
      role="tab"
    >
        <i class="nav-icon i-Pen-2 mr-3"></i>
        {{cat.name}} -- {{cat.id}}
    </a>
  </div>
</template>

<script>
  export default {
    props: ['cat', 'key']
  }
</script>
