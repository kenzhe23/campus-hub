import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Theme, spacing, radius, fontSize } from '../theme';

type Props = {
  onSuccess: (login: string) => void;
  theme: Theme;
};

export function LoginCard({ onSuccess, theme }: Props) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!login.trim() || !password.trim()) {
      setError('Барлық өрісті толтырыңыз');
      return;
    }
    if (login.trim().length < 4) {
      setError('Логин кемінде 4 таңба болуы керек');
      return;
    }
    if (password.length < 6) {
      setError('Пароль кемінде 6 таңба болуы керек');
      return;
    }
    setError('');
    onSuccess(login.trim());
  };

  return (
    <KeyboardAvoidingView
      style={[styles.screen, { backgroundColor: theme.primary }]}
      behavior="padding"
    >
      <View style={[styles.loginCard, { backgroundColor: theme.card }]}>
        <View style={styles.logoWrap}>
          <Ionicons name="school" size={48} color={theme.primary} />
        </View>

        <Text style={[styles.loginTitle, { color: theme.text }]}>
          Campus Hub
        </Text>
        <Text style={[styles.hint, { color: theme.muted }]}>
          Жүйеге кіру үшін деректерді енгізіңіз
        </Text>

        {/* Логин өрісі */}
        <View
          style={[
            styles.inputRow,
            { borderColor: theme.border },
            !!error && { borderColor: theme.error },
          ]}
        >
          <Ionicons
            name="person-outline"
            size={20}
            color={theme.muted}
            style={styles.inputIcon}
          />
          <TextInput
            style={[styles.input, { color: theme.text }]}
            placeholder="Логин"
            placeholderTextColor={theme.muted}
            autoCapitalize="none"
            value={login}
            onChangeText={(text) => {
              setLogin(text);
              setError('');
            }}
          />
        </View>

        {/* Пароль өрісі */}
        <View style={[styles.inputRow, { borderColor: theme.border }]}>
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color={theme.muted}
            style={styles.inputIcon}
          />
          <TextInput
            style={[styles.input, { color: theme.text }]}
            placeholder="Пароль"
            placeholderTextColor={theme.muted}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <Pressable
            onPress={() => setShowPassword((v) => !v)}
            style={styles.eyeBtn}
          >
            <Ionicons
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={22}
              color={theme.primary}
            />
          </Pressable>
        </View>

        {/* «Мені есте сақтау» */}
        <Pressable
          style={styles.rememberRow}
          onPress={() => setRemember((v) => !v)}
        >
          <View
            style={[
              styles.checkbox,
              { borderColor: theme.border },
              remember && {
                backgroundColor: theme.primary,
                borderColor: theme.primary,
              },
            ]}
          >
            {remember && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text style={[styles.rememberText, { color: theme.muted }]}>
            Мені есте сақтау
          </Text>
        </Pressable>

        {!!error && (
          <Text style={[styles.error, { color: theme.error }]}>{error}</Text>
        )}

        <Pressable
          style={[styles.loginButton, { backgroundColor: theme.primary }]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Кіру</Text>
          <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    padding: spacing.xl,
  },
  loginCard: {
    padding: spacing.xxl,
    borderRadius: radius.xl,
  },
  logoWrap: {
    width: 80,
    height: 80,
    borderRadius: 24,
    backgroundColor: '#E8F1FF',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: spacing.md,
  },
  loginTitle: {
    fontSize: fontSize.xl,
    fontWeight: '800',
    textAlign: 'center',
  },
  hint: {
    fontSize: fontSize.sm,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: spacing.lg,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: radius.md,
    marginBottom: spacing.md,
    paddingHorizontal: 12,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 14,
  },
  eyeBtn: {
    padding: 8,
  },
  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.md,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.sm,
  },
  checkmark: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
  rememberText: {
    fontSize: fontSize.sm,
  },
  error: {
    marginTop: spacing.sm,
  },
  loginButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    padding: 15,
    borderRadius: radius.md,
    marginTop: spacing.lg,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: fontSize.md,
  },
});