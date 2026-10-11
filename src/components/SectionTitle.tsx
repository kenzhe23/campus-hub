type Props = { title: string; subtitle?: string };

export function SectionTitle({ title, subtitle }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text>{subtitle}</Text> : null}
    </View>
  );
}