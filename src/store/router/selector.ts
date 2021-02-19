export const selectCurrentRoute = ({
  router,
}: {
  router: { currentRoute: string };
}) => router.currentRoute;
