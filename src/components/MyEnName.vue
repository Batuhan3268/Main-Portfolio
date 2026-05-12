<template>
  <div class="w-full overflow-hidden">
    <h1
      id="my-name-text"
      class="font-fancy text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[10vw] font-extrabold uppercase text-flax-smoke-900 leading-none tracking-tighter w-full"
      style="letter-spacing: -0.0em;"
    >
      BATUHAN Gokmen
    </h1>
  </div>
</template><script setup lang="ts">
  import { onMounted } from 'vue';
  import { gsap } from 'gsap';

  onMounted(() => {
    // Animate the name on page load
    gsap.fromTo(
      '#my-name-text',
      { y: '100%' },
      { 
        y: '0%', 
        duration: 1.2, 
        ease: 'power3.out',
        delay: 0.5
      }
    );
  });
</script>
