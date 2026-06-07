interface Notification {
  Type: string;
  Timestamp: string;
}

export const getPriorityScore = (n: Notification) => {
  const weight: Record<string, number> = {
    Placement: 3,
    Result: 2,
    Event: 1,
  };

  return (
    weight[n.Type] * 1000000 +
    new Date(n.Timestamp).getTime()
  );
};