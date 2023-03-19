<script lang="ts">
  import { realTimeDate } from "../../firestore";

  realTimeDate((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  });
</script>

<div>
  <div>
    <div />
    <div />
  </div>
</div>
