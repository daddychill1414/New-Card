import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

interface CustomButtonProps {
  title?: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  isLoading?: boolean;
}

export default function CustomButton({
  title = "Add Profile",
  onPress,
  backgroundColor = "#6366f1",
  textColor = "#ffffff",
  isLoading = false
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  }
});